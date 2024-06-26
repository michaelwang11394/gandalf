import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import ReactDOM from "react-dom";
import html2canvas from "html2canvas";
import { debounce } from "lodash";
import Input from "./components/input";
import parseTree from "./utilities/parseTree";

import gandalfStyles from "./Gandalf.module.css";
import { useFloating, offset, flip, shift, arrow } from "@floating-ui/react";

interface GandalfProps {
  productName: string;
  isWidgetVisible?: boolean;
  widgetColor?: string;
}

function useCallbackRef<T>(callback: () => T): () => T {
  const ref = useRef(callback);

  ref.current = callback;

  return useCallback(() => {
    return ref.current();
  }, []);
}

function useDebounce(callback: () => void, duration: number) {
  const inner = useCallbackRef(callback);
  return useMemo(() => {
    return debounce(inner, duration);
  }, [inner]);
}

const Gandalf: React.FC<GandalfProps> = ({
  productName,
  isWidgetVisible,
  widgetColor,
}) => {
  const [product, setProduct] = useState(productName);
  const [domTree, setDomTree] = useState("");
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [popoverContent, setPopoverContent] = useState("");
  const hasMoreInstructionsRef = useRef(false);
  const [isApiCallInProgress, setIsApiCallInProgress] = useState(false);
  const [isOpenInput, setIsOpenInput] = useState(false);
  const [query, setQuery] = useState("");

  const arrowRef = useRef<HTMLDivElement>(null);

  const { refs, floatingStyles, middlewareData, placement } = useFloating({
    middleware: [offset(10), flip(), shift(), arrow({ element: arrowRef })],
  });

  // Custom styles for the floating element
  const staticSide =
    {
      top: "bottom",
      right: "left",
      bottom: "top",
      left: "right",
    }[placement.split("-")[0] as "top" | "right" | "bottom" | "left"] || "top";

  const customFloatingStyles = {
    ...floatingStyles,
    backgroundColor: "rgba(250, 250, 250, 0.95)",
    color: "#000000",
    border: "none",
    borderRadius: "13px",
    padding: "16px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    zIndex: 1000,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontSize: "14px",
    lineHeight: "1.4",
    overflow: "visible",
  };

  // Debounce the check for more instructions to avoid excessive API calls
  const debouncedCheckForMoreInstructions = useDebounce(() => {
    if (hasMoreInstructionsRef.current && !isApiCallInProgress) {
      checkForMoreInstructions();
    }
  }, 1000);

  // Effect to open the popover when the user presses the keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "p" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault(); // Prevent the default action of the event
        setIsOpenInput(true);
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
  useEffect(() => {
    const handleUserInteraction = (event: Event) => {
      if (event.type === "keyup" || event.type === "click") {
        debouncedCheckForMoreInstructions();
      }
    };

    document.addEventListener("click", handleUserInteraction);
    document.addEventListener("keyup", handleUserInteraction);

    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keyup", handleUserInteraction);
    };
  }, [debouncedCheckForMoreInstructions]);

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

    // Capture DOM Tree
    const domTreeString = parseTree();
    setDomTree(domTreeString);

    // Capture Screenshot
    html2canvas(document.body).then((canvas) => {
      canvas.toBlob((blob) => {
        if (location.hash) {
          const a = document.createElement("a");
          document.body.appendChild(a);
          const url = window.URL.createObjectURL(blob!);
          a.href = url;
          a.download = "screenshot.png";
          a.click();
          setTimeout(() => {
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
          }, 0);

          console.log(domTreeString)
        }

        setScreenshot(blob as File);

        const formData = new FormData();
        formData.append("user_input", query);
        formData.append("product", "supabase");
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
              const { Instructions, selector, hasMoreInstructions } =
                resultObject;
              console.log(
                "Instructions:",
                Instructions,
                "selector:",
                selector,
                "hasMoreInstructions:",
                hasMoreInstructions
              );

              if (Instructions) {
                setPopoverContent(Instructions);
              }
              if (hasMoreInstructions) {
                hasMoreInstructionsRef.current = true;
              }

              // Determine the target for the popover based on availability and document presence
              let targetElement = document.querySelector(selector);

              // Update the target reference for Popper
              // targetRef.current = targetElement;

              refs.setReference(targetElement);

              console.log("Target Element:", targetElement);

              // If no valid target element is found, consider handling this scenario
              if (!targetElement) {
                console.warn("No valid target element found for the popover.");
              }
              setIsApiCallInProgress(false);
              setIsOpenInput(false);
            } catch (error) {
              console.error("Error parsing JSON:", error);
              setIsApiCallInProgress(false);
              setIsOpenInput(false);
            }
          })
          .catch((error) => {
            console.error("Error:", error);
            setIsApiCallInProgress(false);
            setIsOpenInput(false);
          });
      });
    });
  };

  return (
    <>
      <div className={gandalfStyles.container}>
        <Input
          open={isOpenInput}
          query={query}
          isApiCallInProgress={isApiCallInProgress}
          setQuery={setQuery}
          setOpen={setIsOpenInput}
          handleSubmit={handleSubmit}
        />
      </div>
      <div ref={refs.setFloating} style={customFloatingStyles}>
        {popoverContent}
        <div
          ref={arrowRef}
          className={gandalfStyles.arrow}
          style={{
            [staticSide]: "-6px",
            ...(middlewareData.arrow?.x != null && {
              left: `${middlewareData.arrow.x}px`,
            }),
            ...(middlewareData.arrow?.y != null && {
              top: `${middlewareData.arrow.y}px`,
            }),
          }}
        />
      </div>

      {isWidgetVisible && (
        <button
          className={gandalfStyles.widgetButton}
          style={{ backgroundColor: widgetColor || "#007bff" }}
          disabled={!isWidgetVisible}
          onClick={() => setIsOpenInput(!isOpenInput)}
          aria-label="Toggle chat"
        >
          💬
        </button>
      )}
    </>
  );
};

// uncomment this, comment out the export, then comment out the external options in vite.config.js to build a standalone injectable js bundle
// const mountNode = document.createElement("div");
// document.body.appendChild(mountNode);
// ReactDOM.render(
//   <Gandalf productName="Todo App" isWidgetVisible={true} widgetColor="pink" />,
//   mountNode
// );

export default Gandalf;
