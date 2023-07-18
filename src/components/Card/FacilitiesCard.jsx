import React from "react";
import props from "prop-types";
import "../../styles/FacilitiesCard.scss";

const FacilitiesCard = ({ image, title, desc }) => {
	return (
		<div className="facilitiescard_card">
			<img src={image} alt="facility img" />
			<div>
				<h3>{title}</h3>
				<p>{desc}</p>
			</div>
		</div>
	);
};

FacilitiesCard.propTypes = {
	image: props.string.isRequired,
	title: props.string.isRequired,
	desc: props.string.isRequired,
};

export default FacilitiesCard;
