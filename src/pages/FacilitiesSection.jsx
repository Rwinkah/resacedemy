import React from "react";
import FacilitiesCard from "../components/Card/FacilitiesCard";
import FacilitiesData from "../assets/data/FacilitiesData";
import "../styles/FacilitiesSection.scss";

const FacilitiesSection = () => {
	return (
		<section id="facilities" className="facilities_container">
			<div className="facilities_wrapper">
				<div className="facilities_header">
					<h3>Facilities</h3>
					<h1>Enabling Growth and Learning.</h1>
				</div>

				<div className="facilities_content">
					{FacilitiesData.map((facility) => (
						<FacilitiesCard
							key={facility.id}
							image={facility.img}
							title={facility.title}
							desc={facility.description}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default FacilitiesSection;
