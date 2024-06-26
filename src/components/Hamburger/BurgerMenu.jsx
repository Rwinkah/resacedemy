import React, { useState } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { Turn as Hamburger } from "hamburger-react";
import "../../styles/BurgerMenu.scss";

const BurgerMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setOpen(false);
    navigate("/");
  };
  return (
    <div>
      <Hamburger
        className="hamburger_button"
        toggled={isOpen}
        toggle={setOpen}
        direction="right"
        duration={0.8}
        color="#e99815"
      />

      <div className={`panel ${isOpen ? "open" : "close"}`}>
        <ul>
          <li>
            <Link
              activeclass="active"
              smooth={true}
              spy={true}
              to="home"
              offset={-45}
              onClick={handleClick}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeclass="active"
              smooth={true}
              spy={true}
              to="about"
              offset={-45}
              onClick={handleClick}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeclass="active"
              smooth={true}
              spy={true}
              to="services"
              offset={-45}
              onClick={handleClick}
            >
              Services
            </Link>
          </li>{" "}
          <li>
            <Link
              activeclass="active"
              smooth={true}
              spy={true}
              offset={-45}
              to="contact"
              onClick={handleClick}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
