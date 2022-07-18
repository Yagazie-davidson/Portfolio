import React from 'react'
import styled from "styled-components";
// import Button from "./Button";
// import Home from '../pages/Home'
//import About from '../pages/About'
// import Work from '../pages/Work'
import { Link } from "react-router-dom";


export default function NavBar() {
  const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: center;
    padding: 20px 30px 0px 30px;
    background-color: #F7F7F7;
    font-family: 'Poppins', sans-serif;    
    height: 15vh;
  `;
  const Logo = styled.h2`
    color: #7D1E6A;
    font-size: 24px;
    @media screen and (max-width: 414px){
      font-size: 16px
    }
  `

  const NavLinks = styled.ul`
    list-style: none; 
    display: flex;
    justify-content: centeral;
    align-items: center;
    flex-direction: row;
    list-style: none;
  `
  const Linka = styled.li`
    text-decoration: none;
    padding: 10px;
    font-family: 'Poppins', sans-serif;    
    font-size: 16px;
    text-decoration: none;
    color: #7D1E6A;
    font-weight: 600
  `
  const white = {
    color: '#7D1E6A',
    textDecoration: 'none'
  }
  // const active = 
  const name = "LETAM";
// const [state, setState] = React.useState(true)
// function hover() {
//   setState(prevState => {
//       return false
//   })
// }
// function hoverOut() {
//   setState(prevState => {
//       return true
//   })
// }

  return (
      <Nav>
        {/* {if(window.width > 415)} */}
        <Link to="/" style={white}><Logo>{name}</Logo></Link>
        <NavLinks className="navBar">
        {/* <Button 
          buttonText="Download CV"
          fontFamily=""
          backgroundColor="#FFD369;"
          padding="15px 10px;"
          toggle={true}
          link="https://drive.google.com/drive/u/1/folders/1jAqH6V1MC8m_Kfea-Fht5f2mtnVrAI7J"
        /> */}
          <Linka><Link to="/" style={white} className="link">Home</Link> {" "}</Linka>
          <Linka><Link to="work" style={white}>Work</Link></Linka>
          <Linka><Link to="contact" style={white}>Contact</Link></Linka>
        </NavLinks>
      </Nav>
  );
}
