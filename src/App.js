import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router";
import HomePage from "./pages/homepage/homepage.component";


import "./App.css";
import SidebarComponent from "./pages/sidebar/sidebar.component";

const App = () => {
  const [user, setUser] = useState("");

  return (
    <div>
      <HomePage />
      <SidebarComponent />
    </div>
  );
};

export default App;
