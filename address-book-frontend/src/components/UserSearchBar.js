import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import UserInput from "../ui/userInput/UserInput";
import UserInputDiv from "../ui/userInput/UserInputDiv";
import { FILTER_CONTACTS_SUCCESS } from "../Redux/types";

import { useAsync } from "react-async-hook";
import useConstant from "use-constant";
import AwesomeDebouncePromise from "awesome-debounce-promise";

// Generic reusable hook

const UserSearchBar = ({ inputChanged, userState }) => {
	const useDebouncedSearch = (searchFunction) => {
		// Handle the input text state
		const [inputText, setInputText] = useState("");

		// Debounce the original search async function
		const debouncedSearchFunction = useConstant(() =>
			AwesomeDebouncePromise(searchFunction, 500)
		);

		// The async callback is run each time the text changes,
		// but as the search function is debounced, it does not
		// fire a new request on each keystroke
		const searchResults = useAsync(async () => {
			if (inputText.length === 0) {
				return [];
			} else {
				return debouncedSearchFunction(inputText);
			}
		}, [debouncedSearchFunction, inputText]);

		// Return everything needed for the hook consumer
		return {
			inputText,
			setInputText,
			searchResults,
		};
	};

	const useSearchThroughArr = () =>
		useDebouncedSearch((text) => inputChanged(text));

	const { inputText, setInputText, searchResults } = useSearchThroughArr();
	return (
		<UserInputDiv className="UserInputDiv">
			<UserInput
				className="UserInputField"
				placeholder="Search Contacts"
				value={inputText}
				type="text"
				name="userSearchInput"
				onChange={(e) => setInputText(e.target.value)}
			/>
		</UserInputDiv>
	);
};

const mapStateToProps = (state) => {
	return {
		userState: state.user.userSearch,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		inputChanged: (text) => {
			console.log("change", text);
			const inputAction = {
				type: FILTER_CONTACTS_SUCCESS,
				payload: { text: text, removeFlag: true },
			};
			dispatch(inputAction);
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSearchBar);
