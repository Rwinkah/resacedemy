import React from "react";
import "../../styles/StaffCard.scss";

function StaffCard(props) {
	return (
		<div className="staff-card" key={props.id}>
			<img className="portrait" src={props.src} alt="staff" />
			<span className="text">
				<h3 className="staff-card__name">{props.name}</h3>
				<h4 className="staff-card__role">{props.role}</h4>
			</span>
		</div>
	);
}

export default StaffCard;
