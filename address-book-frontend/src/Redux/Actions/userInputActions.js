import { FILTER_CONTACTS_SUCCESS } from "../types";

export const userSearchAction = (userSearch) => {
	return {
		type: FILTER_CONTACTS_SUCCESS,
	};
};
