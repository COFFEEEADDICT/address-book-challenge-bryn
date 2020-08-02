import { FILTER_CONTACTS_SUCCESS, TEXT_REMOVE_CARD } from "../types";

export const userSearchAction = (userSearch) => {
	return {
		type: FILTER_CONTACTS_SUCCESS,
	};
};
export const userSearchRemoveCard = (payload) => {
	return {
		type: TEXT_REMOVE_CARD,
		payload: payload,
	};
};
