import React, { useState, useEffect } from "react";

const Search = ({ selectSearch }) => {
  return (
    <div>
      <input onChange={(e) => selectSearch(e.target.value)}></input>
    </div>
  );
};

export default Search;
