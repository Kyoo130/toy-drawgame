import React from "react";
import "./App.css";
import { Reset } from "styled-reset";

import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Reset />
      <Home />
    </div>
  );
}

export default App;
