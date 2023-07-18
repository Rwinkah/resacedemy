import React from "react";
import "../styles/Hero.scss";
import mini_shapes from "../assets/images/hero/mini-floating-shapes.svg";
import heroimages from "../assets/images/hero/hero-images.svg";

const Hero = () => {
	return (
		<section id="hero" className="hero_container">
			<div className="hero_wrapper">
				<div className="hero_heading">
					<h1>
						Educating Individuals <span>with Special Needs.</span>
					</h1>

					<p>
						We provide inclusive education and support for students with special
						needs of all ages. Our tailored programs foster growth,
						independence, and meet the unique needs our student.
					</p>

					<button>Primary CTA</button>
				</div>

				<div className="hero_bacground_images">
					<img src={mini_shapes} alt="mini floating shapes" />
				</div>

				<div className="hero_background_shapes">
					<img src={heroimages} alt="hero images" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
