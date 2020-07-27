import { FILTER_CONTACTS_SUCCESS } from "../types";

const initialState = {
	userSearch: "",
};

const userInputReducer = (state = initialState, action) => {
	switch (action.type) {
		case FILTER_CONTACTS_SUCCESS:
			return {
				userSearch: action.payload,
			};
		default:
			return state;
	}
};

export default userInputReducer;
