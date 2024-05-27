import React from "react";
import { Link } from "react-router-dom";

const Schedule = () => (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat
    quam eu mauris euismod imperdiet. Nullam elementum fermentum neque a
    placerat. <span data-tour="step-page-2">Vivamus sed dui nisi.</span>{" "}
    Phasellus vel dolor interdum, accumsan eros ut, rutrum dolor. Etiam in leo
    urna. Vestibulum maximus vitae urna at congue.{" "}
    <Link data-tour="step-page-3" to="/">
      Back Home
    </Link>
  </p>
);

export default Schedule;
