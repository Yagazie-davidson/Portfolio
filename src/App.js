import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
	console.log(window.innerWidth);
	// eslint-disable-next-line
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	React.useEffect(() => {
		window.addEventListener("resize", function () {
			setWindowWidth(window.innerWidth);
		});
	}, []);
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route index element={<Home />} />
				<Route path="work" element={<Work />} />
				<Route path="contact" element={<Contact />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}
