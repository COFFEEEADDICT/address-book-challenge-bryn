import { FETCH_CONTACTS_REQUEST, FETCH_CONTACTS_SUCCESS } from "../types";

export const contactsRequestAction = () => {
	return {
		type: FETCH_CONTACTS_REQUEST,
	};
};

export const contactsSuccessAction = (contacts) => {
	return {
		type: FETCH_CONTACTS_SUCCESS,
		payload: contacts,
	};
};

export const contactsFetchAction = () => {
	return (dispatch) => {
		dispatch(contactsRequestAction);
		fetch("http://localhost:3001/contacts")
			.then((res) => res.json())
			.then((data) => dispatch(contactsSuccessAction(data)));
	};
};
