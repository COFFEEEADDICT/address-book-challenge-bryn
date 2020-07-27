import React from "react";
import TopContactsCards from "../ui/contactCard/TopContactsCards";

function ResultNameCard({ name, handleClick }) {
	return (
		<TopContactsCards onClick={handleClick}>
			<p>{name}</p>
		</TopContactsCards>
	);
}

export default ResultNameCard;
