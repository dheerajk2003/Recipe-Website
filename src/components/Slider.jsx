import { useEffect, useState } from "react";
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Wrapper, Card, Gradient } from "./styles";
import { Link } from "react-router-dom";

export function Slider(props){

    const [popular, setPopular] = useState([]);

    const getPopular = async() => {

        const check = localStorage.getItem(`${props.file}`);

        if(check){
            setPopular(JSON.parse(check));
        }
        else{
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_API_KEY}&number=9&tags=${props.tags}`);
            const data = await api.json();
            localStorage.setItem(`${props.file}`, JSON.stringify(data.recipes));
            setPopular(data.recipes);
            console.log(data.recipes);
            console.log("fuck it");
        }
        
    }

    useEffect(() => {
        getPopular();
    }, []);

    const pageNo = props.pageCount;

    return (
        <div>
            <Wrapper>
                <Splide options={{
                    perPage:`${pageNo}`,
                    arrows: false,
                    pagination: true,
                    drag: 'free',
                    gap: '1rem',
                    breakpoints: {
                        1000: {
                          perPage: 3,
                         
                        },
                        767: {
                          perPage: 2,
                      
                        },
                        640: {
                          perPage: 1,
                    
                        },
                      },
                }}>
                    {popular.map((recipe) => {
                        return(
                            <SplideSlide key={recipe.id}>
                                <Card >
                                    <Link to={"/recipe/" + recipe.id}>
                                        <img src={recipe.image} alt={recipe.title}/>
                                        <p>{recipe.title}</p>
                                        <Gradient />
                                    </Link>
                                </Card>
                            </SplideSlide>
                        );
                    })}  
                </Splide>  
            </Wrapper>
        </div>
    );
}

{Wrapper}
{Card}
{Gradient}