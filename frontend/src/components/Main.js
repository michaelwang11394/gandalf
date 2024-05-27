import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { useTour } from "@reactour/tour";
import Home from "./Home";
import Page1 from "./Page1";
import Page2 from "./Page2";
import steps from "../steps";

const Main = () => {
  let location = useLocation();
  const { setSteps, setCurrentStep } = useTour();
  useEffect(() => {
    setCurrentStep(0);
    if (location.pathname === "/page-1") {
      setSteps([
        {
          selector: '[data-tour="step-page"]',
          content: "text page"
        }
      ]);
    } else if (location.pathname === "/page-2") {
      setSteps([
        {
          selector: '[data-tour="step-page-2"]',
          content: "text page 2"
        },
        {
          selector: '[data-tour="step-page-3"]',
          content: "text page 3"
        }
      ]);
    } else {
      setSteps(steps);
    }
  }, [location.pathname, setCurrentStep, setSteps]);
  return (
    <main>
      <Switch>
        <Route path="/page-1">
          <Page1 />
        </Route>
        <Route path="/page-2">
          <Page2 />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </main>
  );
};

export default Main;
