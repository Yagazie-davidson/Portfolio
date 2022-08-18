import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import styled from "styled-components";

export default function Form() {
	const Form = styled.form`
		display: flex;
		flex-direction: column;
		padding: "20px 0px";
		font-family: "Poppins", sans-serif;
		@media screen and (max-width: 414px) {
			/* padding-left: 50px */
		}
	`;
	const Button = styled.button`
		color: #fff;
		font-size: 18px;
		padding: 7px 1px;
		cursor: pointer;
		border-radius: 5.5px;
		background-color: #7d1e6a;
		text-decoration: none;
		border: none;
		max-width: 10rem;
		@media screen and (max-width: 414px) {
			margin-left: 70px;
		}
	`;
	// const styleWidth = {
	//     width: "400px",
	//     margin: '8px 0px',
	//     padding: '13px 10px'
	// }
	const Input = styled.input`
		width: 400px;
		margin: 8px 0px;
		padding: 13px 10px;
		font-family: "Poppins", sans-serif;
		font-weight: 600;
		@media screen and (max-width: 414px) {
			width: 300px;
		} ;
	`;
	const Message = styled.input`
		width: 400px;
		font-family: "Poppins", sans-serif;
		margin: 8px 0px;
		padding: 70px 10px;
		@media screen and (max-width: 414px) {
			width: 300px;
		} ;
	`;
	const styleSubmit = {
		color: "#FFF",
		padding: "10px 1px",
	};
	const Return = styled.p`
		text-align: center;
		color: #212529;
		font-size: 24px;
		font-family: "Poppins", sans-serif;
	`;
	const [state, handleSubmit] = useForm("mnqwljqn");
	if (state.succeeded) {
		return (
			<Return>
				<i>Thanks for reaching out!</i>
			</Return>
		);
	}
	return (
		<Form onSubmit={handleSubmit}>
			<Input
				id="name"
				type="name"
				name="name"
				placeholder="Your Name"
				// style={styleWidth}
			/>
			<ValidationError prefix="name" field="name" errors={state.errors} />
			<Input
				id="email"
				type="email"
				name="email"
				placeholder="Your Email"
				// style={styleWidth}
			/>
			<ValidationError prefix="Email" field="email" errors={state.errors} />
			<Message id="message" name="message" placeholder="Message" />
			<ValidationError prefix="Message" field="message" errors={state.errors} />
			<Button type="submit" disabled={state.submitting}>
				<p style={styleSubmit}>Submit</p>
			</Button>
		</Form>
	);
}
