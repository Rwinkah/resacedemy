import React, { useState } from "react";
import BurgerMenu from "../Hamburger/BurgerMenu";
import UseMediaQuery from "../Mediaquery/UseMediaQuery";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import "../../styles/NavBar.scss";

export default function Navbar() {
	const navigate = useNavigate();
	let isPageWide = UseMediaQuery("(min-width: 769px)");

	const handleClick = (path) => {
		navigate(`/${path.toLowerCase()}`);
	};

	const [colorChange, setColorChange] = useState(false);

	const changeNavbarColor = () => {
		if (window.scrollY >= 50 || !isPageWide) {
			setColorChange(true);
		} else {
			setColorChange(false);
		}
	};

	window.addEventListener("scroll", changeNavbarColor);

	return (
		<nav
			className={colorChange ? "nav__component colorChange" : "nav__component"}
		>
			<div className="nav__header">
				<img className="logo" src={logo} alt="" />
				<p className="logo__text">{/* <span>Magmund</span> Power */}</p>
			</div>

			{isPageWide ? (
				<div className="links__content">
					<button onClick={() => handleClick("about")}>About Us</button>
					<button onClick={() => handleClick("enrollment")}>Enrollment</button>
					<button>Youtube</button>
					<button
						className="contact_button"
						onClick={() => handleClick("Contact Us")}
					>
						Contact Us
					</button>
				</div>
			) : (
				<BurgerMenu />
			)}
		</nav>
	);
}
