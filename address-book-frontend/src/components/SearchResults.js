import React, { useEffect, useState } from "react";
import UserInputDiv from "../ui/userInput/UserInputDiv";
import { connect } from "react-redux";
import { contactsFetchAction } from "../Redux/Actions/apiContactsActions";
import ResultNameCard from "../components/ResultNameCard";
import TopContactsContainer from "../ui/contactCard/TopContactsContainer";
import { ContactDetailsCard } from "./ContactDetailsCard";

//filter and sort function
function displayTopMatches(array, searchTerm) {
	let searchResults = [];
	if (array.length) {
		for (var i = 0; i < array.length; i++) {
			if (array[i].name.toLowerCase().indexOf(searchTerm) > -1) {
				searchResults.push(array[i]);
			}
		}
		return searchResults.slice(0, 5).sort(function (a, b) {
			var nameA = a.name.toUpperCase(); // ignore upper and lowercase
			var nameB = b.name.toUpperCase(); // ignore upper and lowercase
			if (nameA < nameB) {
				return -1;
			}
			if (nameA > nameB) {
				return 1;
			}
			return 0;
		});
	} else {
		console.log("broken");
	}
	return null;
}

//Top Five Contact Results - Component Container
function SearchResults({ fetchContacts, apiState, userState, detailsFlag }) {
	const [cardFlag, setFlag] = useState(false);
	const [cardSelected, setCard] = useState([]);
	//on load/refresh it will generate 500 new contacts
	useEffect(() => {
		fetchContacts();
	}, []);

	//passed to the resultNameCard where it selects the details after map
	const clickToRenderCard = (contact) => {
		setCard(contact);
		setFlag(true);
		return;
	};
	//button on the details card to close the details card
	const clickToCloseCardDetails = () => {
		setFlag(false);
	};
	return apiState.loading ? (
		<UserInputDiv>🤙</UserInputDiv>
	) : (
		<TopContactsContainer>
			{cardFlag ? (
				<ContactDetailsCard
					details={cardSelected}
					handleCloseClick={clickToCloseCardDetails}
				/>
			) : null}
			{userState &&
				apiState.contacts &&
				(displayTopMatches(apiState.contacts.contacts, userState).length > 0 ? (
					displayTopMatches(apiState.contacts.contacts, userState).map(
						(contact) => (
							<ResultNameCard
								//key could be better
								key={contact.phone}
								name={contact.name}
								handleClick={() => clickToRenderCard(contact)}
							/>
						)
					)
				) : (
					<p>Sorry no contacts found 😞</p>
				))}
		</TopContactsContainer>
	);
}

const mapStateToProps = (state) => {
	return {
		userState: state.user.userSearch,
		detailsFlag: state.user.detailsFlag,
		apiState: state.api,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchContacts: () => dispatch(contactsFetchAction()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
