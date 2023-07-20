/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import MainPage from "../pages/Main";
import AboutPage from "../pages/AboutPage";
import Contact from "../pages/Contact";
import _404Page from "../pages/404Page";
import Enrollment from "../pages/Enrollment";

const NavConfig = () => {
	return (
		<Routes>
			<Route path="/" element={<App />}>
				<Route index element={<MainPage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/enrollment" element={<Enrollment />} />
				<Route path="/*" element={<_404Page />} />
			</Route>
		</Routes>
	);
};

export default NavConfig;
