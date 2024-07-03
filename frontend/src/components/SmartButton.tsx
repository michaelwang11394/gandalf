import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

import gandalfStyles from "../Gandalf.module.css";
import cx from "classnames";
import { State } from "..";

type SmartButtonProps = {
  state: State;
  currentQuery: string;
  onActivate: () => void;
  onCacnel: () => void;
  onAdvance: () => void;
};

export type SmartButtonRef = {
  showComplete: () => void;
  showOption: () => void;
};

export const SmartButton = forwardRef<SmartButtonRef, SmartButtonProps>(
  ({ state, currentQuery, onActivate, onCacnel, onAdvance }, ref) => {
    const [withComplete, setWithComplete] = useState(false);
    const completeTimerRef = useRef<NodeJS.Timeout>();
    const [showOption, setShowOption] = useState(false);

    useImperativeHandle(ref, () => ({
      showComplete: () => {
        setWithComplete(true);
        if (completeTimerRef.current) {
          clearTimeout(completeTimerRef.current);
        }
        completeTimerRef.current = setTimeout(() => {
          setWithComplete(false);
        }, 1000);
      },
      showOption: () => {
        setShowOption(true);
      },
    }));

    return (
      <>
        <button
          className={cx(gandalfStyles.widgetButton, {
            [gandalfStyles.loading]: state === "loading",
            [gandalfStyles.waitingForUser]: state === "waitingForUser",
            [gandalfStyles.withComplete]: withComplete,
          })}
          onMouseDown={(e) => {
            e.stopPropagation();
          }}
          onPointerDown={(e) => {
            e.stopPropagation();
          }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (state === "idle") {
              onActivate();
            } else {
              setShowOption((s) => !s);
            }
          }}
          aria-label="Toggle chat"
          data-isgandalf={true}
        >
          <div className={gandalfStyles.buttonContentWrapper}>
            <div className={gandalfStyles.buttonContent}>💬</div>
            <div className={gandalfStyles.buttonContent}>✅</div>
          </div>
        </button>
        {showOption && state !== "idle" && (
          <div
            className={gandalfStyles.options}
            data-isGandalf={true}
            onMouseDown={(e) => {
              e.stopPropagation();
            }}
            onPointerDown={(e) => {
              e.stopPropagation();
            }}
          >
            <div className={gandalfStyles.optionPane}>{currentQuery}</div>
            <div className={gandalfStyles.optionPane}>
              <div className={gandalfStyles.stateText}>
                {state === "loading"
                  ? "Loading..."
                  : "Waiting for user action..."}
                {state === "waitingForUser" && (
                  <button
                    className={gandalfStyles.nextButton}
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      onAdvance();
                    }}
                  >
                    ▶
                  </button>
                )}
              </div>
              <button
                className={gandalfStyles.optionsButton}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onCacnel();
                  setShowOption(false);
                }}
              >
                Cancel
              </button>
              <button
                className={gandalfStyles.optionsButton}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setShowOption(false);
                }}
              >
                Hide
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
);
