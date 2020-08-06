import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import ContactDetailsCard from "./ContactDetailsCard";
import ResultNameCard from "./ResultNameCard";

import UserInputDiv from "../ui/userInput/UserInputDiv";
import TopContactsContainer from "../ui/contactCard/TopContactsContainer";

import { contactsFetchAction } from "../Redux/Actions/apiContactsActions";
import { userSearchRemoveCard } from "../Redux/Actions/userInputActions";

//filter and sort function V2.0
function displayTopMatches(array, searchTerm) {
	//sort array names alphabetically

	const sortedArray = array.sort(function (a, b) {
		if (a.name < b.name) {
			return -1;
		}
		if (a.name > b.name) {
			return 1;
		}
		return 0;
	});

	let searchResults = [];

	//turns input from caps to lowercase
	const searchTermLower = searchTerm.toLowerCase();

	//matches  searchTerm against the lower case names
	for (var i = 0; i < sortedArray.length; i++) {
		if (sortedArray[i].name.toLowerCase().startsWith(searchTermLower)) {
			searchResults.push(sortedArray[i]);
		}
	}

	return searchResults.slice(0, 5);
}

//Top Five Contact Results - Component Container
function SearchResults({
	fetchContacts,
	apiState,
	theUserSearch,
	detailsCardFlag,
	userSearchRemoveCard,
}) {
	// const [cardFlag, setFlag] = useState(false);
	const [cardSelected, setCard] = useState([]);
	const contactsArr = apiState.contacts.contacts;
	//on load/refresh it will generate 500 new contacts
	useEffect(() => {
		fetchContacts();
	}, []);

	//passed to the resultNameCard where it selects the details after map
	const clickToRenderCard = (contact) => {
		setCard(contact);
		console.log("clicked");
		userSearchRemoveCard(false);
		return;
	};
	//button on the details card to close the details card
	// const clickToCloseCardDetails = () => {
	// 	setFlag(false);
	// };
	return apiState.loading ? (
		<UserInputDiv>
			<span role="img" aria-label="Ring me hand">
				🤙
			</span>
		</UserInputDiv>
	) : (
		<TopContactsContainer>
			{detailsCardFlag ? null : (
				<ContactDetailsCard
					details={cardSelected}
					// handleCloseClick={clickToCloseCardDetails}
				/>
			)}
			{theUserSearch &&
				apiState.contacts &&
				(displayTopMatches(contactsArr, theUserSearch).length >= 1 ? (
					displayTopMatches(contactsArr, theUserSearch).map((contact) => (
						<ResultNameCard
							//key could be better
							key={contact.phone}
							name={contact.name}
							handleClick={() => clickToRenderCard(contact)}
						/>
					))
				) : (
					<p>
						Sorry no contacts found{" "}
						<span role="img" aria-label="Sad face">
							😞
						</span>
					</p>
				))}
		</TopContactsContainer>
	);
}

const mapStateToProps = (state) => {
	return {
		theUserSearch: state.user.userSearch,
		detailsCardFlag: state.user.removeFlag,
		apiState: state.api,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchContacts: () => dispatch(contactsFetchAction()),
		userSearchRemoveCard: (payload) => {
			// console.log("payload =", payload);
			dispatch(userSearchRemoveCard(payload));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
