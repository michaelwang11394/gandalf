import React, { useState, useEffect, useRef, useCallback } from "react";
import ReactDOM from "react-dom";
import Input from "./components/input";

import gandalfStyles from "./Gandalf.module.css";
import { useFloating, offset, flip, shift, arrow } from "@floating-ui/react";
import { sendUserRequest } from "./agent/sendUserRequest";
import cx from "classnames";
import { SmartButton, SmartButtonRef } from "./components/SmartButton";
import { getUniqueId } from "./utilities/getUniqueId";

function detectNodeRemoval(node: Element, callback: () => void) {
  const observer = new MutationObserver((record) => {
    if (record.some((r) => r.removedNodes.length > 0)) {
      if (!document.contains(node)) {
        observer.disconnect();
        callback();
      }
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  return observer;
}

interface GandalfProps {
  productName: string;
  isWidgetVisible?: boolean;
  apiUrl: string;
}

function isTarget(cur: Element, target: Element): boolean {
  return target === cur || target.contains(cur);
}

function useCallbackRef<T>(callback: () => T): () => T {
  const ref = useRef(callback);

  ref.current = callback;

  return useCallback(() => {
    return ref.current();
  }, []);
}

function useElementRemovalObserver() {
  const observerRef = useRef<MutationObserver | null>(null);

  return {
    observe(node: Element, callback: () => void) {
      this.disconnect();
      observerRef.current = detectNodeRemoval(node, callback);
    },
    disconnect() {
      const observer = observerRef.current;
      if (observer) {
        observer.disconnect();
      }
    },
  };
}

export type State = "idle" | "waitingForUser" | "loading";

const Gandalf: React.FC<GandalfProps> = ({
  productName,
  isWidgetVisible,
  apiUrl,
}) => {
  const [popoverContent, setPopoverContent] = useState("");
  const currentQueryRef = useRef<{
    query: string;
    completedSteps: string[];
    hasMoreInstructions: boolean;
    actionType: "click" | "fill";
  } | null>(null);
  const [state, setState] = useState<State>("idle");
  const [isOpenInput, setIsOpenInput] = useState(false);
  const [query, setQuery] = useState("");
  const idRef = useRef<number | null>(0);
  const observer = useElementRemovalObserver();

  const arrowRef = useRef<HTMLDivElement>(null);

  const smartButtonRef = useRef<SmartButtonRef>(null);

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

  const advanceGuide = useCallbackRef(() => {
    const currentQuery = currentQueryRef.current;
    if (!currentQuery) {
      return;
    }
    if (!currentQuery.hasMoreInstructions) {
      setState("idle");
      setQuery("");
      setPopoverContent("");
      currentQueryRef.current = null;
      idRef.current = null;
      smartButtonRef.current?.showComplete();
      return;
    }
    const query = currentQuery.query;
    if (!query) {
      return;
    }
    setState("loading");
    setTimeout(() => {
      handleSubmit(query, false);
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
      if (
        event.target instanceof Element &&
        currentQueryRef.current?.actionType === "click"
      ) {
        if (
          refs.domReference.current &&
          refs.domReference.current instanceof Element &&
          isTarget(event.target, refs.domReference.current)
        ) {
          advanceGuide();
        }
      }
    };

    const handleInput = (event: Event) => {
      if (
        event.target instanceof Element &&
        currentQueryRef.current?.actionType === "fill"
      ) {
        if (
          refs.domReference.current &&
          refs.domReference.current instanceof Element &&
          isTarget(event.target, refs.domReference.current)
        ) {
          advanceGuide();
        }
      }
    };

    document.addEventListener("click", handleClick, true);
    document.addEventListener("input", handleInput);

    // Remove event listener on cleanup
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClick);
      document.removeEventListener("input", handleInput);
    };
  }, []);

  const handleSubmit = async (query: string, showOption: boolean) => {
    console.log("Submitting query from index:", query);
    if (state === "loading") {
      return;
    }

    setState("loading");
    if (showOption) {
      smartButtonRef.current?.showOption();
    }

    const id = getUniqueId();
    idRef.current = id;

    try {
      const { Instructions, targetElement, hasMoreInstructions, actionType } =
        await sendUserRequest({
          query,
          previousSteps: currentQueryRef.current?.completedSteps ?? [],
          product: productName,
          apiUrl,
        });
      if (idRef.current !== id) {
        return;
      }
      if (Instructions) {
        setPopoverContent(Instructions);
      }
      currentQueryRef.current = {
        query,
        completedSteps: [
          ...(currentQueryRef.current?.completedSteps ?? []),
          Instructions,
        ],
        hasMoreInstructions,
        actionType,
      };
      console.log(targetElement);
      refs.setReference(targetElement);
      if (targetElement) {
        observer.observe(targetElement, () => {
          setPopoverContent("");
        });
      } else {
        observer.disconnect();
      }
      setState(hasMoreInstructions ? "waitingForUser" : "idle");
      setIsOpenInput(false);
    } catch (e) {
      console.error(e);
      setState("idle");
    }
  };

  return (
    <>
      <div className={gandalfStyles.container} data-isGandalf={true}>
        <Input
          open={isOpenInput}
          query={query}
          isApiCallInProgress={state === "loading"}
          setQuery={setQuery}
          setOpen={setIsOpenInput}
          handleSubmit={(query) => handleSubmit(query, true)}
        />
      </div>
      {popoverContent !== "" && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          data-isgandalf={true}
        >
          <div className={gandalfStyles.floatingPopover}>
            {popoverContent}
            {state === "loading" && (
              <div className={gandalfStyles.popoverLoadingOuter}>
                <div className={gandalfStyles.popoverLoading}></div>
              </div>
            )}
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
        </div>
      )}

      {isWidgetVisible && (
        <SmartButton
          ref={smartButtonRef}
          state={state}
          onActivate={() => {
            setIsOpenInput(true);
          }}
          onCacnel={() => {
            setState("idle");
            setQuery("");
            setPopoverContent("");
            currentQueryRef.current = null;
            idRef.current = null;
          }}
          currentQuery={query}
        />
      )}
    </>
  );
};

// uncomment this, comment out the export, then comment out the external options in vite.config.js to build a standalone injectable js bundle
const mountNode = document.createElement("div");
mountNode.className = gandalfStyles.outerContainer;
document.body.appendChild(mountNode);
const product = (window as any).__gandalf_product ?? "demo";
const apiUrl = (window as any).__gandalf_api_url ?? "http://localhost:8000";
// const apiUrl =
//   (window as any).__gandalf_api_url ??
//   "https://pu34tzbmgb.execute-api.us-west-2.amazonaws.com/default/gandalf_api/gandalf";
ReactDOM.render(
  <Gandalf productName={product} isWidgetVisible={true} apiUrl={apiUrl} />,
  mountNode
);

// export default Gandalf;
