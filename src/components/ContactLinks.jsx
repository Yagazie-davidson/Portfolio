import React from "react";
import styled from "styled-components";

function ContactLinks(props) {
	const Feed = styled.p`
		text-align: center;
		color: #212529;
		font-size: 24px;
		font-family: "Poppins", sans-serif;
		@media screen and (max-width: 414px) {
			text-align: center;
			/* width: 370px; */
		} ;
	`;
	const A = styled.a`
		font-family: "Poppins", sans-serif;
	`;
	const Htitle = styled.h4`
		font-size: 22px;
		font-family: "Poppins", sans-serif;
	`;
	const Section = styled.section`
		line-height: 40px;
		@media screen and (max-width: 414px) {
			margin-left: 9px;
		} ;
	`;
	return (
		<div>
			<Section>
				<Htitle>Email</Htitle>
				<A href="mailto:davidsonletam@gmail.com">hello@letamdev.com</A>
				<Htitle>Linkedin</Htitle>
				<A href="">Chineletam Ugwuadu</A>
				<Htitle>GitHub</Htitle>
				<A href="">Yagazie-davidson</A>
				<Htitle>Twitter</Htitle>
				<A href="">@letamdavidson</A>
				<br />
				<br />
				<Feed>
					<i>I look forward to hearing from you!</i>
				</Feed>
			</Section>
		</div>
	);
}

export default ContactLinks;
