import React, { useState } from "react";
import styled from "styled-components";
import data from "../projectsData";
import { FaHtml5, FaCss3 } from "react-icons/fa";
// import { SiRedux } from "react-icons/si";

function Projects() {
	const Wrapper = styled.section`
		display: flex;
		height: 100vh;
		justify-content: center;
		@media screen and (max-width: 414px) {
			display: flex;
			flex-direction: column;
			height: 150vh;
			justify-content: center;
			margin-top: 0rem;
		}
	`;
	const Card = styled.div`
		display: flex;
		justify-content: center;
		flex-direction: column;
		border-radius: 30px;
		// background-color: #F7F7F7;
		padding: 30px;
		@media screen and (max-width: 414px) {
			display: flex;
			justify-content: center;
			flex-direction: column;
			border-radius: 30px;
			// height: 3000vh;
		}
	`;
	const Img = styled.img`
		width: 20em;
		padding-bottom: 20px;
		@media screen and (max-width: 414px) {
			width: 20rem;
		}
	`;
	const Text = styled.article`
		width: 320px;
		// @media screen and (max-width: 414px){
		//     height: 120vh;
		// }
	`;
	const Description = styled.p`
		width: 320px;
		color: grey;
	`;
	const Container = styled.section`
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 2rem;
		max-width: 7rem;
		@media screen and (max-width: 414px) {
			// padding-left: 2rem
		}
	`;
	const Label = styled.p`
		font-size: 18px;
		color: #000;
	`;
	const font = {
		fontFamily: "'Poppins', sans-serif",
	};
	const space = {
		paddingLeft: "0rem 0rem 0rem 0rem",
	};
	const ProLinks = styled.a`
		font-weight: 800;
		text-decoration: underline;
		color: #000;
	`;
	const projectData = data;

	const ReadMore = ({ children }) => {
		const text = children;
		const [isReadMore, setIsReadMore] = useState(true);
		const toggleReadMore = () => {
			setIsReadMore(!isReadMore);
		};
		return (
			<p className="text">
				{isReadMore ? text.slice(0, 44) : text}
				<span onClick={toggleReadMore} className="read-or-hide">
					{isReadMore ? "...read more" : " ...show less"}
				</span>
			</p>
		);
	};

	const card = projectData.map(project => {
		return (
			<Card key={project.id}>
				<Img src={project.img} alt="" />
				<h4 style={font}>{project.title}</h4>
				<Text>
					<p style={font}>Description:</p>
					<Description style={font}>
						<ReadMore>{project.description}</ReadMore>
					</Description>
				</Text>
				<ProLinks style={font} href={project.github} target="-blannk">
					GitHub
				</ProLinks>
				<ProLinks style={font} href={project.website} target="_blank">
					Website
				</ProLinks>
			</Card>
		);
	});

	return <Wrapper>{card}</Wrapper>;
}
export default Projects;
