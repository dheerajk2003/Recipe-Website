import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 0rem 0rem;
`;

export const Card = styled.div`
    min-height: 30vh;
    border-radius: 1rem;
    margin: .5rem;
    overflow: hidden;
    position: relative;
    background-color: white;
    /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
    /* box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px; */


    img{
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    p{
        position: absolute;
        z-index: 3;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%, 0%);
        color: white;
        text-shadow: 1px 1px 3px black .5;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: .85rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const Gradient = styled.div`
    width: 100%;
    height: 50%;
    position: absolute;
    bottom: 0;
    z-index: 2;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.6));
`;

export const HeadingTitle = styled.h3`
    margin: .5rem;
    text-align: center;
    line-height: 2rem;
    font-size: 1.2rem;
    color: #535353;
`;