import {combineReducers} from "redux";
import {usersAuthReducer} from "./usersAuthReducer";

export const reducers = combineReducers({
	dataAuth: usersAuthReducer,
});
