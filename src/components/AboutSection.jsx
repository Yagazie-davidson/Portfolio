import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import imgLetam from "../assets/Boti.png";
import { FaReact, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiJavascript } from "react-icons/si";

function AboutSection(props) {
	const SectionR = styled.section`
        display: grid;
        grid-template-columns: auto auto auto;
        padding: 10px;
        background-color: #F7F7F7;
        margin: -50px 100px 0px 100px;
        @media screen and (max-width: 414px) {
            display: flex;
            flex-direction: column;
            margin: 0px 30px 0px 30px;
        `;
	const SectionF = styled.section`
        background-color: #F7F7F7;
        color: #fff;
        padding: 50px;
        font-size: 30px;
        @media screen and (max-width: 414px) {
            padding: 0px;
            text-align: center
    `;
	const SectionS = styled.section`
		background-color: #f7f7f7;
		padding-top: 130px;
	`;

	const Img = styled.img`
		width: 450px;
		@media screen and (max-width: 414px) {
			// width: 350px;
			// margin-left: 20px;
			// margin-top: -100px;
			display: none;
		}
	`;
	// const H1 = styled.h1`
	//     color: #000;
	//     font-size: 70px;
	//     // text-align: center
	//     @media screen and (max-width: 414px) {
	//         font-size: 50px;
	//         margin-top: 50px;
	//         padding: 0px 60px
	//     }
	// `
	const styleBody = {
		fontSize: "18px",
		fontFamily: "'Poppins', sans-serif",
		color: "#000",
	};
	const h4 = {
		fontSize: "30px",
		fontFamily: "'Poppins', sans-serif",
		color: "#000",
		padding: "20px 0px",
	};
	const Label = styled.p`
		font-size: 18px;
		color: #000;
	`;
	const Button = styled.button`
		background-color: rgb(125, 30, 106);
		border: none;
		color: white;
		font-size: 18px;
		padding: 20px 60px;
		margin-top: 30px;
		cursor: pointer;
		text-decoration: none;
	`;
	const font = {
		fontFamily: "'Poppins', sans-serif",
	};
	const Container = styled.section`
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 5rem;
		max-width: 30rem;
		@media screen and (max-width: 414px) {
			// padding-left: 2rem
		}
	`;
	const space = {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	};
	return (
		<SectionR id="about">
			<SectionF>
				{/* <H1>Hi, I am Letam Davidson</H1> */}
				<h4 style={h4} id={props.id}>
					Software Engineer based in Nigeria
				</h4>
				<p style={styleBody}>
					I became an Engineer because I'm drawn to a dynamic career that
					combines my spark for learning and helping others. <br /> <br />
					I specialize in Frontend Development, creating beautiful websites that
					are responsive across all devices. I am consistently learning new ways
					to increase my skillset to meet my client's needs.
					<br /> <br />
					I constantly strive to be the best version of myself and to uplift
					everyone around me. I'm a fast learner and I love taking on challenges
					with creativity and hard work. <br /> <br />
					<h3>Fun tip:</h3> I prefer to be called <strong>Letam</strong> rather
					than <strong>Chineletam</strong>
				</p>
				<br />
				<Button>
					<Link to="/work" className="white">
						View my projects
					</Link>
				</Button>
				<Container>
					<div style={space}>
						<FaHtml5 fill="grey" />
						<Label style={font}>HTML</Label>
					</div>
					<div style={space}>
						<FaCss3 fill="grey" />
						<Label style={font}>CSS</Label>
					</div>
					<div style={space}>
						<SiJavascript fill="grey" />
						<Label style={font}>JavaScript</Label>
					</div>
					<div style={space}>
						<FaReact fill="grey" />
						<Label style={font}>React</Label>
					</div>
					<div style={space}>
						<SiRedux fill="grey" />
						<Label style={font}>Redux</Label>
					</div>
					<div style={space}>
						<SiTailwindcss fill="grey" />
						<Label style={font}>Tailwind CSS</Label>
					</div>
				</Container>
			</SectionF>
			<SectionS>
				<Img src={imgLetam} alt="IMG" />
			</SectionS>
		</SectionR>
	);
}

export default AboutSection;
