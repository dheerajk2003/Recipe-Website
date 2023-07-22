import styled from 'styled-components';
import { Link , useParams } from 'react-router-dom';
import {motion} from 'framer-motion';
import { useEffect, useState } from 'react';

export function Cuisine(){
    
    const [recipe, setRecipe] = useState([]);
    let params = useParams();

    // "https://api.spoonacular.com/recipes/complexSearch?apiKey=2fc7bc9935304c3d84e37aec90b921f9&cuisine=italian"

    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&cuisine=${name}`)
        const recipes = await data.json();
        setRecipe(recipes.results);
        console.log(recipe);
    }

    useEffect(() => {
        getCuisine(params.type);
    },[params.type]);

    return(
        <Grid 
            animate={{opacity: 1}}
            initial={{opacity: 0}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
        >
            {recipe.map((rec) => {
                return(
                    <Card key={rec.id}>
                        <Link to={"/recipe/" + rec.id}>
                            <img src={rec.image} alt={rec.id} />
                            <h4>{rec.title}</h4>
                        </Link>
                    </Card>
                )
            })}
        </Grid>
    );
}

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    grid-gap: 1.5rem;
`;

const Card = styled.div`
    border-radius: 2rem;
    /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    img{
        width: 100%;
        border-radius: 2rem;
    }
    a{
        text-decoration:none;
    }
    h4{
        text-align: center;
        padding: 1rem;
        color: #4d4d4d;
    }
`;