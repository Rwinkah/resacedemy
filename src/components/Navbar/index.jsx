import React, { useState } from "react";
import BurgerMenu from "../Hamburger/BurgerMenu";
import UseMediaQuery from "../Mediaquery/UseMediaQuery";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import "../../styles/NavBar.scss";

export default function Navbar() {
	const navigate = useNavigate();
	const [selectPage, setSelectPage] = useState("Home");
	let isPageWide = UseMediaQuery("(min-width: 769px)");
	const handleClick = (path) => {
		navigate("/");
		setSelectPage(path);
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
					<Link
						className={selectPage === "Home" ? "links selected" : "links"}
						smooth={true}
						spy={true}
						to="home"
						offset={-45}
						onClick={() => handleClick("Home")}
					>
						Home
					</Link>
					<Link
						className={selectPage === "About" ? "links selected" : "links"}
						smooth={true}
						spy={true}
						to="about"
						offset={-45}
						onClick={() => handleClick("About")}
					>
						About
					</Link>
					<Link
						className={selectPage === "Services" ? "links selected" : "links"}
						smooth={true}
						spy={true}
						to="services"
						offset={-45}
						onClick={() => handleClick("Services")}
					>
						Services
					</Link>
					<Link
						className={
							selectPage === "Contact Us"
								? "links Contact-Link selected"
								: "links Contact-Link"
						}
						smooth={true}
						spy={true}
						to="contact"
						offset={-45}
						onClick={() => handleClick("Contact Us")}
					>
						Contact Us
					</Link>
				</div>
			) : (
				<BurgerMenu />
			)}
		</nav>
	);
}
