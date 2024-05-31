import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import html2canvas from "html2canvas";
import { usePopper } from "react-popper";

interface PopoverProps {
  content: string;
  styles: React.CSSProperties;
  attributes: { [key: string]: any };
}

const Gandalf: React.FC = () => {
  const [product, setProduct] = useState("To do app");
  const [userInput, setUserInput] = useState("");
  const [domTree, setDomTree] = useState("");
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [popoverContent, setPopoverContent] = useState("");
  const arrowRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLElement | null>(null);
  const { styles, attributes } = usePopper(
    targetRef.current,
    popoverRef.current,
    {
      placement: "top",
      modifiers: [{ name: "arrow", options: { element: arrowRef.current } }],
    }
  );

  // useEffect(() => {
  //   if (popoverRef.current && targetRef.current && popoverContent) {
  //     // Make sure the popover is visible before creating Popper
  //     popoverRef.current.style.visibility = "visible";
  //     createPopper(targetRef.current, popoverRef.current, {
  //       placement: "top",
  //     });
  //   }
  // }, [popoverContent]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Capture DOM Tree
    const domTreeString = document.documentElement.innerHTML;
    setDomTree(domTreeString);

    // Capture Screenshot
    html2canvas(document.body).then((canvas) => {
      canvas.toBlob((blob) => {
        setScreenshot(blob as File);

        const formData = new FormData();
        formData.append("user_input", userInput);
        formData.append("product", product);
        formData.append("dom_tree", domTreeString);
        if (blob) {
          formData.append("screenshot", blob, "screenshot.png");
        }

        fetch("http://localhost:8000/gandalf", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Success:", data);
            // Extract and clean the JSON string from Markdown code block
            const jsonString = data.result
              .replace(/```json\n/, "")
              .replace(/\n```/, "");

            try {
              const resultObject = JSON.parse(jsonString);
              console.log("Result Object:", resultObject);
              const { Instructions, classname, id, href, text } = resultObject;
              console.log(
                "Instructions:",
                Instructions,
                "classname:",
                classname,
                "id:",
                id,
                "href:",
                href,
                "text:",
                text
              );

              if (Instructions) {
                setPopoverContent(Instructions);
              }

              // Determine the target for the popover based on availability and document presence
              let targetElement = null;
              if (
                classname &&
                document.getElementsByClassName(classname).length > 0
              ) {
                targetElement = document.getElementsByClassName(
                  classname
                )[0] as HTMLElement;
              } else if (id && document.getElementById(id)) {
                targetElement = document.getElementById(id) as HTMLElement;
              } else if (href && document.querySelector(`[href="${href}"]`)) {
                targetElement = document.querySelector(
                  `[href="${href}"]`
                ) as HTMLElement;
              } else if (
                text &&
                document.querySelector(`:contains("${text}")`)
              ) {
                targetElement = document.querySelector(
                  `:contains("${text}")`
                ) as HTMLElement;
              }

              // Update the target reference for Popper
              targetRef.current = targetElement;
              console.log("Target Element:", targetElement);

              // If no valid target element is found, consider handling this scenario
              if (!targetElement) {
                console.warn("No valid target element found for the popover.");
              }
            } catch (error) {
              console.error("Error parsing JSON:", error);
            }
          })
          .catch((error) => console.error("Error:", error));
      });
    });
  };
  const customPopperStyles = {
    ...styles.popper,
    opacity: popoverContent ? 1 : 0.5, // Conditional styling for visibility
    backgroundColor: "#f9f9f9", // Light grey background
    color: "black", // Text color
    padding: "8px 12px", // Padding around the text
    borderRadius: "8px", // Rounded corners
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // Subtle shadow
    fontSize: "14px", // Font size
    zIndex: 1000, // Ensure it floats above other content
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="User Input"
      />
      <div
        ref={popoverRef}
        className={`popover bg-white text-black p-2 rounded shadow-lg ${
          popoverContent ? "visible" : "invisible"
        }`}
        style={customPopperStyles}
        {...attributes.popper}
      >
        {popoverContent}
        <div
          ref={arrowRef}
          className="arrow"
          data-popper-arrow
          style={{
            position: "absolute",
            width: "10px",
            height: "10px",
            background: "inherit",
            visibility: "hidden", // Hide by default, shown by Popper.js when needed
            transform: "rotate(45deg)", // Rotate to form an arrow shape
          }}
        ></div>
      </div>
    </form>
  );
};

export default Gandalf;
