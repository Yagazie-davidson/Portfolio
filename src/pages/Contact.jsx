import React from "react";
// import Footer from "../components/Footer"
import styled from "styled-components";
import ContactLinks from "../components/ContactLinks";
import Form from "../components/Form";

function Contact() {
	const Container = styled.section`
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-left: 10rem;
		@media screen and (max-width: 414px) {
			margin-left: 0rem;
		}
	`;
	const Header = styled.h1`
		font-size: 60px;
		color: #000;
		@media screen and (max-width: 414px) {
		}
	`;
	const Content = styled.section`
		// display: grid;
		// grid-template-columns: auto auto auto auto;
		// grid-template-rows: auto auto;
		// grid-gap: 100px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-right: 200px;
		@media screen and (max-width: 414px) {
			display: flex;
			flex-direction: column;
			justify-content: center;
			margin-right: 0px;
			padding-left: 0px;
		}
	`;
	return (
		<Container>
			<Header>Let's get in touch!</Header>
			<Content>
				<ContactLinks />
				<Form />
			</Content>
		</Container>
	);
}

export default Contact;
