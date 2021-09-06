import React, { useState } from "react";


const Regions = ({selectRegion}) => {

  
  return (
    <div>
      <button onClick={() => {selectRegion('Americas')}}>Americas</button>
      <button onClick={() => {selectRegion('Africa')}}>Africa</button>
      <button onClick={() => {selectRegion('Asia')}}>Asia</button>
      <button onClick={() => {selectRegion('Europe')}}>Europe</button>
      <button onClick={() => {selectRegion('Oceania')}}>Oceania</button>
    </div>
  );
};

export default Regions;
