import React from "react";
import styled from "styled-components";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
// import { IconContext } from "react-icons";
import "../App.css";

const FooterBottom = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  padding: 20px 50px 0px 50px;
  background-color: #F7F7F7;
  //background-color: #222831;
  font-family: "Poppins", sans-serif;
  height: 25vh;
  color: #7D1E6A;
`;
const Mail = styled.a`
font-size: 30px;
color: #7D1E6A;
padding-top: 10px
padding-bottom: 10px;
font-family: 'Poppins', sans-serif; 
background-color: #F7F7F7; 
text-align: center  
`
const Text = styled.h3`
  color: #7D1E6A;
  font-family: 'Poppins', sans-serif; 

`;
const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  // background-color: #fff
`;
// const iconStyle = {
//     margin: "0px 20px",
//     fontSize: "30px",
// }
const IconA = styled.a`
  margin: 0px 20px;
  font-size: 30px;
`;
const darkfoot = {
  backgroundColor: "#F7F7F7",
  textAlign: "center"
}

function Footer(props) {
  return (
    <div style={darkfoot}>
      <Mail href='mailto:davidsonletam@gmail.com'>hello@letamdev.com</Mail>
      <FooterBottom>
      <IconWrapper>
        <IconA href="https://twitter.com/LetamDavidson" target="_blank">
          <FaTwitter fill="#7D1E6A" />
        </IconA>
        <IconA href="https://www.linkedin.com/in/chineletam-ugwuadu-87422622b/" target="_blank">
          <FaLinkedinIn fill="#7D1E6A" />
        </IconA>
        <IconA href="https://github.com/Yagazie-davidson" target="_blank">
          <FaGithub fill="#7D1E6A" />
        </IconA>
      </IconWrapper>
      <Text>Created with 💜 by Letam © 2022</Text>
    </FooterBottom>
    </div>
  );
}

export default Footer;
