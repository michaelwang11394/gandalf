import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import html2canvas from "html2canvas";
import { usePopper } from "react-popper";
import { debounce } from "lodash";
import Input from "./components/input";

// TODO: 1) Add an useEffect to listen for whether the insturction was followed.

const Gandalf: React.FC = () => {
  const [product, setProduct] = useState("To do app"); // TODO: Update after admin dashboard
  const [domTree, setDomTree] = useState("");
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [popoverContent, setPopoverContent] = useState("");
  const [hasMoreInstructions, setHasMoreInstructions] = useState(false);
  const [isApiCallInProgress, setIsApiCallInProgress] = useState(false);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

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

  // Debounce the check for more instructions to avoid excessive API calls
  const debouncedCheckForMoreInstructions = useRef(
    debounce(() => {
      if (hasMoreInstructions && !isApiCallInProgress) {
        checkForMoreInstructions();
      }
    }, 1000)
  ).current;

  // Effect to open the popover when the user presses the keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "p" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault(); // Prevent the default action of the event
        setOpen(true);
      }
    };

    // Add event listener
    document.addEventListener("keydown", handleKeyDown);

    // Remove event listener on cleanup
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Effect to check for more instructions
  // useEffect(() => {
  //   const handleUserInteraction = (event: Event) => {
  //     if (event.type === "keyup" || event.type === "click") {
  //       debouncedCheckForMoreInstructions();
  //     }
  //   };

  //   document.addEventListener("click", handleUserInteraction);
  //   document.addEventListener("keyup", handleUserInteraction);

  //   return () => {
  //     document.removeEventListener("click", handleUserInteraction);
  //     document.removeEventListener("keyup", handleUserInteraction);
  //   };
  // }, [debouncedCheckForMoreInstructions]);

  const checkForMoreInstructions = () => {
    console.log("Checking for more instructions...");
    // Trigger another handleSubmit or similar function to fetch the next set of instructions
    handleSubmit(query);
  };

  const handleSubmit = async (query: string) => {
    console.log("Submitting query from index:", query);
    if (isApiCallInProgress) {
      return;
    }
    setIsApiCallInProgress(true);

    console.log("User Input:", query);

    // Capture DOM Tree
    const domTreeString = document.documentElement.outerHTML;
    setDomTree(domTreeString);

    // Capture Screenshot
    html2canvas(document.body).then((canvas) => {
      canvas.toBlob((blob) => {
        setScreenshot(blob as File);

        const formData = new FormData();
        formData.append("user_input", query);
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
              const {
                Instructions,
                classname,
                id,
                href,
                text,
                hasMoreInstructions,
              } = resultObject;
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
                text,
                "hasMoreInstructions:",
                hasMoreInstructions
              );

              if (Instructions) {
                setPopoverContent(Instructions);
              }
              if (hasMoreInstructions) {
                setHasMoreInstructions(true);
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
              setIsApiCallInProgress(false);
              setOpen(false);
            } catch (error) {
              console.error("Error parsing JSON:", error);
            }
          })
          .catch((error) => {
            console.error("Error:", error);
            setIsApiCallInProgress(false);
          });
      });
    });
  };
  const customPopperStyles = {
    ...styles.popper,
    opacity: popoverContent ? 1 : 0.5,
    visibility: popoverContent ? ("visible" as const) : ("hidden" as const),
    backgroundColor: "#343a40", // Dark background similar to Bootstrap
    color: "white", // White text color
    padding: "8px 12px",
    borderRadius: "0.25rem", // Bootstrap's border radius
    boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)", // Bootstrap's box shadow
    fontSize: "14px",
    // zIndex: 1000,
  };

  const arrowStyles = {
    position: "absolute" as const,
    width: "1rem",
    height: "1rem",
    background: "#343a40", // Same background color as the popper
    visibility: "visible" as const, // Make the arrow visible
    transform: "rotate(45deg)",
    boxShadow: "-0.25rem -0.25rem 0.5rem rgba(0, 0, 0, 0.15)", // Add shadow to the arrow
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <Input
          open={open}
          query={query}
          isApiCallInProgress={isApiCallInProgress}
          setQuery={setQuery}
          setOpen={setOpen}
          handleSubmit={handleSubmit}
        />
      </div>
      <div
        ref={popoverRef}
        className={`popover text-white p-2 rounded shadow-lg`}
        style={customPopperStyles}
        {...attributes.popper}
      >
        {popoverContent}
        <div
          ref={arrowRef}
          className="arrow"
          data-popper-arrow
          style={arrowStyles}
        ></div>
      </div>
    </>
  );
};

export default Gandalf;
