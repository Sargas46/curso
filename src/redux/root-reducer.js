import { combineReducers } from "redux";

import countriesReducer from "./countries/contries.reducer";

export default combineReducers({ country: countriesReducer });
