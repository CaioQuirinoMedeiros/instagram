import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";
import Header from "./components/Header";

function App() {
  console.log("url: ", process.env.PUBLIC_URL);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
