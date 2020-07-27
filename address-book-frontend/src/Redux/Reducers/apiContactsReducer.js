import { FETCH_CONTACTS_REQUEST, FETCH_CONTACTS_SUCCESS } from "../types";

const initialState = {
	loading: false,
	contacts: [],
};

const apiContactsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_CONTACTS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_CONTACTS_SUCCESS:
			return {
				loading: false,
				contacts: action.payload,
			};
		default:
			return state;
	}
};

export default apiContactsReducer;
