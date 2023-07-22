import { Pages } from "./pages/pages"
import { Category } from "./components/Category";
import { BrowserRouter, Link } from "react-router-dom";
import { Search } from "./components/Search";
import { GiKnifeFork } from "react-icons/gi";
import styled from 'styled-components';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav>
          <span>
            <GiKnifeFork />
          </span>
          <Logo to={"/"} >
            Tasty Recipes
          </Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 400;
  font-family: "Lobster Two" , cursive;
  color: #1f1f1f;
`;
const Nav = styled.div`
  position: absolute;
  top: 0rem;
  padding: 1rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  span{
    svg{
      font-size: 1.5rem;
    }
  }
`;

export default App
