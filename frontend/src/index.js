import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { TourProvider } from "@reactour/tour";
import App from "./components/App";
import steps from "./steps";

render(
  <BrowserRouter>
    <TourProvider steps={steps}>
      <App />
    </TourProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
