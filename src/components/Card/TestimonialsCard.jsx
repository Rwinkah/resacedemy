import React from "react";
import props from "prop-types";
import "../../styles/TestimonialsCard.scss";

const TestimonialsCard = ({ image, name, comment }) => {
	return (
		<div className="testimonials_card">
			<img src={image} alt="facility img" />
			<p>{comment}</p>
			<h3>{name}</h3>
		</div>
	);
};

TestimonialsCard.propTypes = {
	image: props.string.isRequired,
	name: props.string.isRequired,
	comment: props.string.isRequired,
};

export default TestimonialsCard;
