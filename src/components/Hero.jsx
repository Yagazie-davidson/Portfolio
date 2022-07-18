import React from 'react';
import styled from "styled-components"
import TypingEffect from './TypingEffect';
import { Link } from "react-scroll";

function Hero() {
    const Hero = styled.section`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-self: center;
        height: 100vh;
        background-color: #F7F7F7;
        @media screen and (max-width: 414px) {
            
          }
    `
    const Button = styled.button`
        background-color: rgb(125, 30, 106);
        border: none;
        color: white;
        font-size: 18px;
        padding: 15px 60px;
        margin-top: 30px;
        cursor: pointer;
    `
    const Intro = styled.h2`
        font-size: 36px;
        font-weight: 800;
        font-family: 'Poppins', sans-serif;  
        color: #000;  
        font-weight: 600; 
        @media screen and (max-width: 414px) {
            font-size: 26px;
        } 
    `
    const HeroName = styled.h1`
        font-family: 'Newsreader', serif;    
        font-size: 80px;
        color: #000;  
        font-weight: 200; 
        @media screen and (max-width: 414px) {
            font-size: 60px;
            padding: 0px 20px;
            text-align: center
        } 
    `;
    
    return (
        // ↓
        <Hero>
            <Intro>Hi, I am</Intro>
            <HeroName>Letam Ugwuadu</HeroName>
            <TypingEffect />
            <Button>
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    ▼
                </Link>
            </Button>
        </Hero>
        
    );
}

export default Hero;

