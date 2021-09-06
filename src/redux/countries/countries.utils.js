export const addCountryToSidebar = (sidebarCountries, countryToAdd) => {
  const existingCountry = sidebarCountries.find(
    (country) => country.name === countryToAdd.name
  );
  if (existingCountry) {
    return [...sidebarCountries];
  }
  return [...sidebarCountries, { ...countryToAdd }];
};
