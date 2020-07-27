import { combineReducers } from "redux";
import apiContactsReducer from "./apiContactsReducer";
import userInputReducer from "./userInputReducer";
export const rootReducer = combineReducers({
	api: apiContactsReducer,
	user: userInputReducer,
});
