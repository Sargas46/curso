import { addCountryToSidebar } from "./countries.utils";
import { CountryActionTypes } from "./country.types";

const INITIAL_STATE = {
  countriesList: [],
};

const countriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CountryActionTypes.ADD_COUNTRY:
      return {
        ...state,
        countriesList: addCountryToSidebar(state.countriesList, action.payload),
      };
    case CountryActionTypes.REMOVE_COUNTRY:
      return {
        ...state,
        countriesList: state.countriesList.filter(
          (country) => country.name != action.payload.name
        ),
      };
    default:
      return state;
  }
};

export default countriesReducer;
