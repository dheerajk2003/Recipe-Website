import { useState ,useEffect} from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import { Link } from "react-router-dom";

export function Searched(){
    const [sRecipes, setSRecipe] = useState([]);
    const params = useParams();

    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&query=${name}`);
        const recipes = await data.json();
        setSRecipe(recipes.results);
    }

    useEffect(() => {
        getSearched(params.search);
    },[params.search]);

    return(
        <Grid>
            {sRecipes.map((rec) => {
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
    )
}

const Grid = styled.div`
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