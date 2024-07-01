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
  onClick: () => void;
};

export type SmartButtonRef = {
  showComplete: () => void;
};

export const SmartButton = forwardRef<SmartButtonRef, SmartButtonProps>(
  ({ state, onClick }, ref) => {
    const [withComplete, setWithComplete] = useState(false);
    const completeTimerRef = useRef<NodeJS.Timeout>();

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
    }));

    return (
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
          onClick();
        }}
        aria-label="Toggle chat"
        data-isgandalf={true}
      >
        <div className={gandalfStyles.buttonContentWrapper}>
          <div className={gandalfStyles.buttonContent}>💬</div>
          <div className={gandalfStyles.buttonContent}>✅</div>
        </div>
      </button>
    );
  }
);
