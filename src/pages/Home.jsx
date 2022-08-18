import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import "../App.css";
import Work from "../components/Work";
import Contact from "../components/Contact";

function Home() {
	return (
		<div>
			{/* <hr /> */}
			<Hero />
			<About />
			<Work />
			<Contact />
			{/* <Services /> */}
			{/* <HeroContact /> */}
		</div>
	);
}
export default Home;
