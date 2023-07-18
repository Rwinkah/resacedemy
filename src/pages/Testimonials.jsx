import React from "react";
import TestimonialsCard from "../components/Card/TestimonialsCard";
import { TestimonialsData } from "../assets/data/TestimonialsData";
import "../styles/Testimonials.scss";

const Testimonials = () => {
	return (
		<section className="testimonials_container">
			<div className="testimonials_wrapper">
				<div className="testimonials_header">
					<h3>Testimonials</h3>
					<h1>We have helped over 300 students</h1>
				</div>

				<div className="testimonials_content">
					{TestimonialsData.map((item) => (
						<TestimonialsCard
							key={item.id}
							image={item.img}
							name={item.name}
							comment={item.Comment}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
