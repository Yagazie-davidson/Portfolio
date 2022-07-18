import React from 'react';
import styled from 'styled-components';

function Button(props) {

    
    const [state, setState] = React.useState(props.toggle)
    function hover() {
        setState(prevState => {
            return !prevState
        })
    }
    function hoverOut() {
        setState(prevState => {
            return !prevState
        })
    }
    const ButtonText = styled.a`
        text-decoration: none;
        color:  ${state ? "#FFF" : "#F7D1E6A"};
        font-family: ${props.fontFamily}  
        font-weight: 800;
        // background-color: #F7F7F7;
    `
    
    const Button = styled.a`
    margin-top: ${props.marginTop}rem;
    color:  ${state ? "#FFF" : "#7D1E6A"};
    font-size: 18px;
    padding: ${props.padding};
    line-height: 27px;
    cursor: pointer;
    border-radius: 5.5px;
    background-color: ${state ? "#7D1E6A" : "#fff"};
    border: ${state ? "none" : "1px solid #7D1E6A"};
    text-decoration: none;
    font-family: ${props.fontFamily}  

`;
    return (
        <Button 
            href={props.link}
            onMouseEnter={hover}
            onMouseOver={hover}
            onMouseLeave={hoverOut}
        >
            <ButtonText
                onMouseEnter={hover}
                onMouseOver={hover}
                onMouseLeave={hoverOut}
            >{props.buttonText}</ButtonText>
        </Button>
    );
}

export default Button;