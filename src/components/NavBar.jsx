import React from "react";
import styled from "styled-components";

export default function NavBar() {
	const Nav = styled.nav`
		display: flex;
		justify-content: space-between;
		align-items: center;
		align-self: center;
		padding: 20px 30px 0px 30px;
		background-color: #f7f7f7;
		font-family: "Poppins", sans-serif;
		height: 20vh;
		@media screen and (max-width: 414px) {
			display: flex;
			justify-content: space-between;
			align-items: center;
			align-self: center;
		}
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
		border-radius: 5px;
		@media screen and (max-width: 414px) {
			padding: 10px 30px;
			font-size: 14px;
		}
	`;
	const Logo = styled.h2`
		color: #7d1e6a;
		font-size: 24px;
		@media screen and (max-width: 414px) {
			font-size: 16px;
			margin-top: 15px;
		}
	`;

	const NavLinks = styled.ul`
		list-style: none;
		display: flex;
		justify-content: centeral;
		align-items: center;
		flex-direction: row;
		list-style: none;
	`;
	return (
		<Nav>
			<Logo>Letam</Logo>
			<NavLinks className="navBar">
				<a
					href="https://docs.google.com/document/d/1lellu5XyIZzZxVi-ML7nRTsbz4ui_44J4AFXHvOXBqk/edit?usp=sharing"
					target="_blank"
				>
					<Button>My CV</Button>
				</a>
			</NavLinks>
		</Nav>
	);
}
