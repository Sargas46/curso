import React from "react";
import { connect } from "react-redux";
import HomePage from "../../pages/homepage/homepage.component";
import CustomButton from "../custom-button/custom-button.component";

const Country = ({ country }) => {
  return (
    <div>
      <div>{country.name}</div>
    </div>
  );
};

export default Country;
