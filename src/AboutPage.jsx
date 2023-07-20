import React from "react";
import '../styles/About.scss'	

const AboutPage = () => {
	return (
		<div className="about__body">
			<div className="about__body__top">
				<img className="star" src="/src/logo.svg" alt="star"/>
				<div className="about__body__top__text-container">
					<h6 className="about__body__top__text-container__heading">About US</h6>
					<p className="about__body__top__text-container__text">We are Committed to Making Learning Easier for Special Needs Individuals</p>
					<img className="star" />
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
