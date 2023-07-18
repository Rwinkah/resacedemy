import React from "react";
import props from "prop-types";
import "../../styles/ServicesCard.scss";

const ServicesCard = ({ title, description, image }) => {
	return (
		<div className="services-card">
			<img src={image} alt={title} />
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	);
};

ServicesCard.propTypes = {
	title: props.string.isRequired,
	description: props.string.isRequired,
	image: props.string.isRequired,
};

export default ServicesCard;
