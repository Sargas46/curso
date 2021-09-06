import { createSelector } from "reselect";

const selectCountry = (state) => state.country;

export const selectCountryList = createSelector(
  [selectCountry],
  (country) => country.countriesList
);
