import {FaHamburger, FaPizzaSlice} from 'react-icons/fa';
import {GiChopsticks, GiNoodles} from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export function Category(){
    return (
        <List>
            <SLink to={'/Cuisine/american'}>
                <FaHamburger />
                <h4>American</h4>
            </SLink>
            <SLink to={'/Cuisine/italian'}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </SLink>
            <SLink to={'/Cuisine/japanese'}>
                <GiChopsticks />
                <h4>Japanese</h4>
            </SLink>
            <SLink to={'/Cuisine/chinese'}>
                <GiNoodles />
                <h4>Chinese</h4>
            </SLink>
        </List>
    );
}

const List = styled.div`
    margin: 0rem 0rem;
    display: flex;
    justify-content: center;
`;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 5rem;
    height: 5rem;
    scale: .75;
    border-radius: 50%;
    text-decoration: none;
    cursor: pointer;
    background: linear-gradient(35deg, #494949, #313131);

    svg{
        color: white;
        font-size: 1.5rem;
    }

    h4{
        color: white;
        font-size: .85rem;
    }

    &.active{
        background: linear-gradient(to right, #f27121, #e94057);
    }
`;