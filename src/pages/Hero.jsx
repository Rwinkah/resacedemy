import React from "react";
import "../styles/Hero.scss";
// import red_periwinkle from "../assets/images/hero/periwinkle-red.svg";
// import yellow_periwinkle from "../assets/images/hero/periwinkle-yellow.svg";
// import yellow_infinity from "../assets/images/hero/infinity-yellow.svg";
// import red_infinity from "../assets/images/hero/infinity-red.svg";
// import yellow_star from "../assets/images/hero/star-yellow.svg";
// import red_star from "../assets/images/hero/star-red.svg";
// import rectangle2 from "../assets/images/hero/rectangle-7.png";
// import u_tube from "../assets/images/hero/u-tube.png";
// import reactangle1 from "../assets/images/hero/rectangle-1.png";

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

				{/* <div className="hero_bacground_images">
					<img
						src={red_periwinkle}
						alt="red_periwinkle"
						className="red_periwinkle"
					/>
					<img
						src={yellow_periwinkle}
						alt="yellow_periwinkle"
						className="yellow_periwinkle"
					/>
					<img
						src={yellow_infinity}
						alt="yellow_infinity"
						className="yellow_infinity"
					/>
					<img src={red_infinity} alt="red_infinity" className="red_infinity" />
					<img src={yellow_star} alt="yellow_star" className="yellow_star" />
					<img src={red_star} alt="red_star" className="red_star" />
					<img src={rectangle2} alt="rectangle2" className="rectangle2" />
					<img src={u_tube} alt="u_tube" className="u_tube" />
					<img src={reactangle1} alt="reactangle1" className="reactangle1" />
				</div> */}
			</div>
		</section>
	);
};

export default Hero;
