import React from "react";
import styled from "styled-components";
import Projects from "./Projects";

function Work() {
	const Work = styled.section`
		display: flex;
		flex-direction: column;
		margin: 20px;
		@media screen and (max-width: 414px) {
			display: flex;
			flex-direction: column;
			justify-content: center;
			margin-left: 10px;
		}
	`;
	const Header = styled.h1`
		font-size: 40px;
		color: #000;
		margin-top: 3rem;
		margin-left: 2rem;
		text-align: center;
		@media screen and (max-width: 838px) {
			text-align: center;
			margin-left: 0rem;
		}
	`;

	return (
		<div>
			<Work id="work">
				<Header>Recent Works</Header>
				<Projects />
			</Work>
		</div>
	);
}
export default Work;
