import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { addCountry } from "../../redux/countries/contries.actions";
import Regions from "../../components/regions/regions.component";
import Country from "../../components/country/country.component";
import Search from "../../components/search/search.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import SidebarComponent from "../sidebar/sidebar.component";

const HomePage = () => {
  const [countries, setCountry] = useState([]);
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/all`)
      .then((res) => res.json())
      .then((result) => {
        setCountry(result);
      });
  }, []);

  const dispatch = useDispatch();

  const selectRegion = (newRegion) => {
    setRegion(newRegion);
  };

  const selectSearch = (newSearch) => {
    setSearch(newSearch);
  };

  return (
    <div>
      <Search key={selectSearch} selectSearch={selectSearch}></Search>
      <Regions key={selectRegion} selectRegion={selectRegion} />{" "}
      {countries
        .filter((country) => country.region == region || region == "")
        .filter((country) =>
          country.name.toUpperCase().startsWith(search.toUpperCase())
        )
        .map((country, index) => (
          <div key={index.toString()}>
            <Country key={index} country={country} />
            <CustomButton
              onClick={() => {
                dispatch(addCountry(country));
              }}
            >
              Add to Sidebar
            </CustomButton>
          </div>
        ))}
    </div>
  );
};

export default HomePage;
