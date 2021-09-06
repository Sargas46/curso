import React from "react";

const Details = ({ country }) => {
  let population = country.population.toString();

  return (
    <div>
      <p>Region: {country.region}</p>
      <p> Capital city: {country.capital}</p>
      <p> Population: {population.slice(0, 2)} M </p>
      <p>Timezones: {country.timezones}</p>
    </div>
  );
};

export default Details;
