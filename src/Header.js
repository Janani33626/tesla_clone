import react, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [menuStatus, setMenuStatus] = useState(false);
  return (
    <div>
      <Head>
        <Logo>
          <img alt="logo" src="teslaimages/logo-png.jpg" />
        </Logo>
        <CenterMenu>
          <ul>
            <li>
              <a href="">Model s</a>
            </li>
            <li>
              <a href="">Model 3</a>
            </li>
            <li>
              <a href="">Model x</a>
            </li>
            <li>
              <a href="">Model y</a>
            </li>
            <li>
              <a href="">Solar Roof</a>
            </li>
            <li>
              <a href="">Solar Panels</a>
            </li>
          </ul>
        </CenterMenu>
        <RightMenu>
          <ul>
            <li>
              <a href="">Shop</a>
            </li>
            <li>
              <a href="">account</a>
            </li>
            <li onClick={() => setMenuStatus(true)}>
              <a href="#">Menu</a>
            </li>
          </ul>
        </RightMenu>
        <SlidingMenu isMenuOpen={menuStatus}>
          <Cross onClick={() => setMenuStatus(false)}></Cross>
          <li>
            <a href="">Model S</a>
          </li>
          <li>
            <a href="">Model 3</a>
          </li>
          <li>
            <a href="">Model X</a>
          </li>
          <li>
            <a href="">Model Y</a>
          </li>
          <li>
            <a href="">Solar Roof</a>
          </li>
          <li>
            <a href="">Solar Panel</a>
          </li>
          <li>
            <a href="">Existing Inventory</a>
          </li>
          <li>
            <a href="">Used Inventory</a>
          </li>
          <li>
            <a href="">Trade In </a>
          </li>

          <li>
            <a href="">Test Drive</a>
          </li>
          <li>
            <a href="">Powerwall</a>
          </li>
          <li>
            <a href="">Commercial Energy</a>
          </li>
        </SlidingMenu>
      </Head>
    </div>
  );
}

const Head = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;
`;
const Logo = styled.div`
  img {
    width: 5.5rem;
    height: 7rem;
  }
`;
const CenterMenu = styled.div`
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 0.75rem;
    padding-right: 0.75 rem;
  }
  a {
    color: #000;
    text-decoration: none;
    font-weight: 600;
  }
  @media all and (max-width: 992px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 0.75rem;
    padding-right: 0.75 rem;
  }
  a {
    color: #000;
    text-decoration: none;
    font-weight: 600;
  }
  @media all and (max-width: 992px) {
    li:nth-of-type(1),
    li:nth-of-type(2) {
      display: none;
    }
  }
`;
const SlidingMenu = styled.ul`
  position: fixed;
  background-color: #fff;
  width: 300px;
  right: ${(props) => (props.isMenuOpen ? 0 : "-300px")};
  top: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 50px 20px 20px 40px;
  list-style: none;
  transition: all 0.5s ease-in-out;
  li {
    padding: 10px 0;
  }
  a {
    color: #000;
    text-decoration: none;
  }
`;
const Cross = styled(CloseIcon)`
  cursor: pointer;
  position: absolute;
  right: 2rem;
  top: 2 rem;
`;
export default Header;
