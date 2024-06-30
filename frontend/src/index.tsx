import React, { useState, useEffect, useRef, useCallback } from "react";
import ReactDOM from "react-dom";
import Input from "./components/input";

import gandalfStyles from "./Gandalf.module.css";
import { useFloating, offset, flip, shift, arrow } from "@floating-ui/react";
import { sendUserRequest } from "./agent/sendUserRequest";

interface GandalfProps {
  productName: string;
  isWidgetVisible?: boolean;
  widgetColor?: string;
}

function isTarget(cur: HTMLElement, target: HTMLElement) {
  return target === cur || target.contains(cur);
}

function useCallbackRef<T>(callback: () => T): () => T {
  const ref = useRef(callback);

  ref.current = callback;

  return useCallback(() => {
    return ref.current();
  }, []);
}

const Gandalf: React.FC<GandalfProps> = ({
  productName,
  isWidgetVisible,
  widgetColor,
}) => {
  const [popoverContent, setPopoverContent] = useState("");
  const currentQueryRef = useRef<{
    query: string;
    completedSteps: string[];
  } | null>(null);
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

  const advanceGuide = useCallbackRef(() => {
    refs.setReference(null);
    setPopoverContent("");
    setTimeout(() => {
      handleSubmit(query);
    }, 100);
  });

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

    const handleClick = (event: MouseEvent) => {
      if (event.target instanceof HTMLElement) {
        if (
          refs.domReference.current &&
          isTarget(event.target, refs.domReference.current as HTMLElement)
        ) {
          advanceGuide();
        }
      }
    };
    document.addEventListener("click", handleClick);

    // Remove event listener on cleanup
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const handleSubmit = async (query: string) => {
    console.log("Submitting query from index:", query);
    if (isApiCallInProgress) {
      return;
    }
    setIsApiCallInProgress(true);

    try {
      const { Instructions, targetElement, hasMoreInstructions } =
        await sendUserRequest({
          query,
          previousSteps: currentQueryRef.current?.completedSteps ?? [],
          product: productName,
        });
      if (Instructions) {
        setPopoverContent(Instructions);
      }
      if (!hasMoreInstructions) {
        currentQueryRef.current = null;
      } else {
        currentQueryRef.current = {
          query,
          completedSteps: [
            ...(currentQueryRef.current?.completedSteps ?? []),
            Instructions,
          ],
        };
      }
      refs.setReference(targetElement);
    } catch (e) {
      console.error(e);
    } finally {
      setIsApiCallInProgress(false);
      setIsOpenInput(false);
    }
  };

  return (
    <>
      <div className={gandalfStyles.container} data-isGandalf={true}>
        <Input
          open={isOpenInput}
          query={query}
          isApiCallInProgress={isApiCallInProgress}
          setQuery={setQuery}
          setOpen={setIsOpenInput}
          handleSubmit={handleSubmit}
        />
      </div>
      {popoverContent !== "" && (
        <div
          ref={refs.setFloating}
          style={customFloatingStyles}
          data-isgandalf={true}
        >
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
      )}

      {isWidgetVisible && (
        <button
          className={gandalfStyles.widgetButton}
          style={{ backgroundColor: widgetColor || "#007bff" }}
          disabled={!isWidgetVisible}
          onMouseDown={(e) => {
            e.stopPropagation();
          }}
          onPointerDown={(e) => {
            e.stopPropagation();
          }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsOpenInput(!isOpenInput);
          }}
          aria-label="Toggle chat"
          data-isgandalf={true}
        >
          {isApiCallInProgress ? "<Cool animation>" : "💬"}
        </button>
      )}
    </>
  );
};

// uncomment this, comment out the export, then comment out the external options in vite.config.js to build a standalone injectable js bundle
const mountNode = document.createElement("div");
mountNode.style.zIndex = "100000";
mountNode.style.position = "fixed";
mountNode.style.pointerEvents = "auto";
document.body.appendChild(mountNode);
const product = (window as any).__gandalf_product ?? "demo";
ReactDOM.render(
  <Gandalf productName={product} isWidgetVisible={true} widgetColor="pink" />,
  mountNode
);

// export default Gandalf;
