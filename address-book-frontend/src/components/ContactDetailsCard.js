import React from "react";
import SelectedCard from "../ui/contactCard/SelectedCard";

const ContactDetailsCard = ({
	details: { name, phone, address },
	handleCloseClick,
}) => {
	return (
		<div>
			<SelectedCard>
				<p>Name: {name}</p>
				<p>Phone: {phone}</p>
				<p>Address: {address}</p>
				{/* <button onClick={handleCloseClick}>Close</button> */}
			</SelectedCard>
		</div>
	);
};

export default ContactDetailsCard;
