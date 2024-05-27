import React from "react";
import { Link } from "react-router-dom";

const Roster = () => (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat
    quam eu mauris euismod imperdiet. Nullam elementum fermentum neque a
    placerat. Vivamus sed dui nisi. Phasellus vel dolor interdum, accumsan eros
    ut, rutrum dolor. Etiam in leo urna. Vestibulum maximus vitae urna at
    congue.{" "}
    <Link data-tour="step-page" to="/">
      Back Home
    </Link>
  </p>
);

export default Roster;
