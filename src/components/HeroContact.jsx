import React from 'react';
import styled from 'styled-components';
import Button from './Button';

function HeroContact() {
    const Section = styled.section`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-self: center;
        background-color: #222222;
        //background-color: #222831;
        // padding: 0px 300px;
        padding-bottom: 50px; 
        @media screen and (max-width: 414px) {
            display: none
        }
        
    `
    const styleHeader = {
        color: "#FFF",
        fontSize: '35px',
        // backgroundColor: "#2c2c2c"
    }
    const styleback = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: "#2c2c2c",
        width: "65em",
        padding: '20px 120px'

    }
   
    return (
        <Section>
            <div style={styleback}>
                <h4 style={styleHeader}>Let's Connect</h4>
                <Button 
                    buttonText="Contact me"
                    fontFamily="sans-serif"
                    backgroundColor="#FFD369;"
                    toggle={true}
                    padding="15px 60px;"
                    link="contact"
                />
            </div>
        </Section>

    );
}

export default HeroContact;