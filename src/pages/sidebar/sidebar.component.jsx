import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useSelector, useDispatch } from "react-redux";

import { selectCountryList } from "../../redux/countries/countries.selectors";
import Country from "../../components/country/country.component";
import Search from "../../components/search/search.component";
import { removeCountry } from "../../redux/countries/contries.actions";
import Details from "../../components/details/details.component";

const SidebarComponent = () => {
  const [search, setSearch] = useState("");

  const selectSearch = (newSearch) => {
    setSearch(newSearch);
  };

  const countriesList = useSelector(selectCountryList);

  const dispatch = useDispatch();

  return (
    <div>
      <Search key={selectSearch} selectSearch={selectSearch}></Search>
      Sidebar:
      {countriesList
        .filter((country) =>
          country.name.toUpperCase().startsWith(search.toUpperCase())
        )
        .map((country, index) => (
          <div key={index.toString()}>
            <Country key={country.name} country={country}></Country>
            <Details key={country.topLevelDomain} country={country}></Details>
            Remove? :{" "}
            <div onClick={() => dispatch(removeCountry(country))}>&#10005;</div>
            _____________________________________________
          </div>
        ))}
    </div>
  );
};

export default SidebarComponent;
