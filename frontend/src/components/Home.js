import React from "react";
import { Link } from "react-router-dom";
import { useTour } from "@reactour/tour";
import { captureScreenshot, retrieveDomTree } from "../utils/DataFunctions";

const Home = () => {
  const { setIsOpen } = useTour();
  return (
    <div style={{ textAlign: "center", padding: 50 }}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        volutpat quam eu mauris euismod imperdiet. Nullam elementum fermentum
        neque a placerat. Vivamus sed dui nisi. Phasellus vel dolor interdum,
        accumsan eros ut, rutrum dolor. Etiam in leo urna. Vestibulum maximus
        vitae urna at congue.{" "}
        <Link data-tour="step-1" to="/page-1">
          Page 1
        </Link>
        Vivamus lectus nisi, pellentesque at orci a, tempor lobortis orci.
        Praesent non lorem erat. Ut augue massa, aliquam in bibendum sed,
        euismod vitae magna. Nulla sit amet sodales augue. Curabitur in nulla in
        magna luctus porta et sit amet dolor. Pellentesque a magna enim.
        Pellentesque malesuada egestas urna, et pulvinar lorem viverra suscipit.
        Duis sit amet mauris ante. Fusce at ante nunc. Maecenas ut leo eu erat
        porta fermentum.
      </p>{" "}
      <Link to="/" data-tour="step-2">
        Back Home 2
      </Link>{" "}
      <button onClick={() => setIsOpen(true)}>Open</button>
      <button onClick={captureScreenshot}>Capture Screenshot</button>
      <button onClick={retrieveDomTree}>Retrieve DOM Tree</button>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        volutpat quam eu mauris euismod imperdiet. Nullam elementum fermentum
        neque a placerat. Vivamus sed dui nisi. Phasellus vel dolor interdum,
        accumsan eros ut, rutrum dolor. Etiam in leo urna. Vestibulum maximus
        vitae urna at congue. Vivamus lectus nisi, pellentesque at orci a,
        tempor lobortis orci. Praesent non lorem erat. Ut augue massa, aliquam
        in bibendum sed, euismod vitae magna. Nulla sit amet sodales augue.
        Curabitur in nulla in magna luctus porta et sit amet dolor. Pellentesque
        a magna enim. Pellentesque malesuada{" "}
        <Link data-tour="step-3" to="/page-2">
          Page 2
        </Link>
        egestas urna, et pulvinar lorem viverra suscipit. Duis sit amet mauris
        ante. Fusce at ante nunc. Maecenas ut leo eu erat porta fermentum.
      </p>
    </div>
  );
};

export default Home;
