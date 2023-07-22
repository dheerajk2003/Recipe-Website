import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Search() {

    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate("/searched/" + input);
    }

    return (
        <FormStyle onSubmit={submitHandler}>
            <div>
                <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
                <FaSearch />
            </div>
        </FormStyle>
    )
}

const FormStyle = styled.form`
    margin: 1rem 0rem;
    padding-left: 10rem;
    
    div{
        position: relative;
        width: 100%;
        height: 100%;
        /* margin: 0 7rem; */
        @media (max-width: 2000px){
            padding-right: 10rem;
        }
        @media (max-width: 768px){
            padding-right: 0rem;
        }
    }

    input{
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        outline: none;
        width: 100%;
        height: 2rem;
        border-radius: 1rem;
        font-size: 1rem;
    }
    svg{
        position: absolute;
        top: 65%;
        left: 0%;
        transform: translate(100%, -70%);
        color: white;
        font-size: 1rem;
    }
`;

