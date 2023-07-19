import React from "react";
import '../styles/About.scss'	
import AboutCard from "../components/Card/AboutCard";
import AboutData from "../assets/data/AboutData";
import StaffData from "../assets/data/StaffData";
import StaffCard from "../components/Card/StaffCard";


const AboutPage = () => {
	return (
		<div className="about__body">
			<div className="about__body__top">
				<img className="star" src="/images/star.svg" alt="star"/>
				<div className="about__body__top__text-container">
					<h6 className="about__body__top__text-container__heading">About US</h6>
					<p className="about__body__top__text-container__text">We are Committed to Making Learning Easier for Special Needs Individuals</p>
					
				</div>
				<img className="star2" src="/images/star.svg" alt="star"/>
			</div>
			<section className="about__body__mission">
				{AboutData.map((about) => (
					<AboutCard 
						src={about.img}
						description={about.description}
						header={about.header}
						text1={about.text1}
						text2={about.text2}
					/>
				))}
			</section>
			
			<div className="about__body__founder">
				<img className="founder-img" src="/images/founder.png" alt='founder'/>
				<div className="text-container">
					<p className="quote">“Every child is special, learns differently and learns at different speeds ”.</p>
					<h6 className="founders-name">Mrs Osariemen Aluyi</h6>
					<h3 className="founders-role">FOUNDER, Roseluyi Exceptional Students Academy</h3>
				</div>
					

			</div>

			<div className="about__body__staff">
				<div className="about__body__staff__text" >
					<h3>Meet Our Dedicated Staff</h3>
					<p>Passionate Individuals who are committed to Special needs education</p>
				</div>
				<div className="about__body__staff__grid">
					{StaffData.map((staff) => (
						<StaffCard 
						src={staff.src}
						name={staff.name}
						role={staff.role}
						/>
					))}
				</div>
			</div>


		</div>
	);
};

export default AboutPage;
