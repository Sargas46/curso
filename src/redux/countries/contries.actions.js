import { CountryActionTypes } from "./country.types";

export const addCountry = (country) => ({
  type: CountryActionTypes.ADD_COUNTRY,
  payload: country,
});

export const removeCountry = (country) => ({
  type: CountryActionTypes.REMOVE_COUNTRY,
  payload: country,
});
