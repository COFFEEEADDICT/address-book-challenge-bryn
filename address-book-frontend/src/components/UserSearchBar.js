import React from "react";
import { connect } from "react-redux";

import UserInput from "../ui/userInput/UserInput";
import UserInputDiv from "../ui/userInput/UserInputDiv";
import { FILTER_CONTACTS_SUCCESS } from "../Redux/types";
import { debounce } from "lodash";

const UserSearchBar = ({ inputChanged, userState }) => {
	// const debounceHandleChange = debounce((text) => inputChanged(text), 300);

	return (
		<UserInputDiv>
			<UserInput
				placeholder="Search Contacts"
				value={userState}
				type="text"
				name="userSearchInput"
				onChange={(e) => inputChanged(e.target.value)}
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
			const inputAction = {
				type: FILTER_CONTACTS_SUCCESS,
				payload: text,
			};
			dispatch(inputAction);
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSearchBar);
