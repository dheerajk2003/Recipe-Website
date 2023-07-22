import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';

export function Recipe(){
    const params = useParams();
    const [idRecipe , setIdRecipe] = useState([]);
    const [activeTab, setActiveTab] = useState(false);

    const getRecipeFromId = async(rId) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${rId}/information?apiKey=${import.meta.env.VITE_API_KEY}`);
        const recipe = await data.json();
        setIdRecipe(recipe);
    }

    useEffect(() => {
        getRecipeFromId(params.id);
        console.log(idRecipe);
    },[params.id])

    return(
        <DetailWrapper>
            <div>
                <h3>{idRecipe.title}</h3>
                <img src={idRecipe.image} alt={idRecipe.id} />
                <ul>
                    <li>{"Time : " + idRecipe.readyInMinutes + " minutes"}</li>
                    <li>{"Serving : " + idRecipe.servings + " people"}</li>
                </ul>
            </div>
            <Info>
                <Button className={!activeTab ? "active" : ""} onClick={() => {setActiveTab(false)}}>Instructions</Button>
                <Button className={activeTab ? "active" : ""} onClick={() => {setActiveTab(true)}}>Ingredients</Button>

                {activeTab === false && (
                    <div>
                        {/* <p dangerouslySetInnerHTML={{__html: idRecipe.summary}}></p> */}
                        <p dangerouslySetInnerHTML={{__html: idRecipe.instructions}}></p>
                    </div>
                )}

                {activeTab === true && (
                    <ul>
                        {idRecipe.extendedIngredients.map((ing) => {
                            return(
                                <li key={ing.id}>{ing.original}</li>
                            )
                        })}
                    </ul>
                )}
            </Info>
        </DetailWrapper>
    )
}

const DetailWrapper = styled.div`
    margin-top: 4rem;
    margin-bottom: 5rem;
    display: flex;
    @media (max-width: 2000px){
        div{
            img{
                width: 40vw;
            }
        }
        
    }
    @media (max-width: 768px) {
        flex-direction: column; 
        align-items: center;
        div{
            align-items: center;
            img{
                width: 80vw;
            }
        }
    }
    .active{
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }

    h3{
        margin-bottom: 1.5rem;
    }

    li{
        font-size: 1rem;
        line-height: 1rem;
        margin: .5rem;
    }
    ul{
        margin-top: 2rem;
    }
    
`;

const Button = styled.button`
    padding: .5rem 1rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    margin-bottom: 1rem;
    font-weight: 600;
`;
const Info = styled.div`
    @media (max-width: 2000px){
        margin-left: 5rem;        
    }
    @media (max-width: 768px){
        margin-left: 1rem;        
    }

`;
