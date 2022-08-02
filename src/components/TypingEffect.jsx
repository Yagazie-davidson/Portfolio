import React from "react";
import "../App.css";
import styled from "styled-components";

function TypingEffect(props) {
	let ReactRotatingText = require("react-rotating-text");
	const displayText = ["Software Engineer", "Student", "Culer"];
	const Wrapper = styled.div`
		text-align: center;
	`;
	const Text = styled.h3`
		font-size: 1.5rem;
		font-family: "Poppins", sans-serif;
		font-weight: 600;
		color: grey;
	`;
	const Dtext = styled.span`
		color: #7d1e6a;
		font-size: 1.5rem;
		font-family: "Poppins", sans-serif;
		font-weight: 600;
	`;
	ReactRotatingText.defaultProps = {
		color: "inherit",
		cursor: true,
		deletingInterval: 170,
		emptyPause: 1000,
		eraseMode: "erase",
		pause: 1500,
		typingInterval: 170,
		random: false,
	};
	return (
		<Wrapper>
			<Text>
				<Dtext>
					<ReactRotatingText items={displayText} />
				</Dtext>{" "}
				Based in Nigeria
			</Text>
		</Wrapper>
	);
}

export default TypingEffect;
