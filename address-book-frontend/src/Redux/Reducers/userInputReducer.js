import { FILTER_CONTACTS_SUCCESS, TEXT_REMOVE_CARD } from "../types";

const initialState = {
	userSearch: "",
	removeFlag: true,
};

const userInputReducer = (state = initialState, action) => {
	switch (action.type) {
		case FILTER_CONTACTS_SUCCESS:
			return {
				userSearch: action.payload.text,
				removeFlag: action.payload.removeFlag,
			};
		case TEXT_REMOVE_CARD:
			return {
				...state,
				removeFlag: action.payload,
			};
		default:
			return state;
	}
};

export default userInputReducer;
