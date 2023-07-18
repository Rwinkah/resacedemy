import React from "react";
import ServicesCard from "../components/Card/ServicesCard";
import { ServicesData } from "../assets/data/ServicesData";
import "../styles/Services.scss";
import arrow from "../assets/images/services/arrow-right.svg";

const Services = () => {
	return (
		<section className="service_container">
			<div className="service_wrapper">
				<div className="service_header">
					<h3>Services & Programs</h3>
					<h1>Comprehensive Programs for Every Stage of Learning</h1>
				</div>

				<div className="service_content">
					{ServicesData.map((item) => (
						<ServicesCard
							key={item.id}
							image={item.img}
							title={item.title}
							description={item.description}
						/>
					))}
				</div>

				<div className="service_footer">
					<button>
						Enrollment
						<img src={arrow} alt="arrow" />
					</button>
				</div>
			</div>
		</section>
	);
};

export default Services;
