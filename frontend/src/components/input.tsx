import React from "react";
import styles from "./Input.module.css";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { TailSpin } from "react-loader-spinner";
import classNames from "classnames";

interface InputProps {
  open: boolean;
  query: string;
  isApiCallInProgress: boolean;
  setQuery: (query: string) => void;
  setOpen: (open: boolean) => void;
  handleSubmit: (query: string) => void;
}

export default function Input({
  open,
  query,
  isApiCallInProgress,
  setQuery,
  setOpen,
  handleSubmit,
}: InputProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleSubmit(query);
  };

  const handleClose = () => {
    setOpen(false);
    setQuery("");
  };

  return (
    <Transition show={open} appear>
      <Dialog className={styles.dialog} onClose={handleClose}>
        <form onSubmit={handleFormSubmit} data-isgandalf={true}>
          <TransitionChild
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className={styles.overlay} />
          </TransitionChild>

          <div className={styles.container}>
            <TransitionChild
              enter="ease-out duration-150"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className={styles.dialogPanel}>
                <div
                  className={classNames(styles.inputWrapper, {
                    [styles.loading]: isApiCallInProgress,
                  })}
                >
                  <FontAwesomeIcon
                    icon={faSearch}
                    className={styles.searchIcon}
                    aria-hidden="true"
                  />
                  <input
                    data-autofocus
                    type="text"
                    autoFocus={true}
                    className={styles.inputField}
                    placeholder="What do you want to do in the app?"
                    onChange={handleInputChange}
                    value={query}
                  />
                  {isApiCallInProgress && (
                    <TailSpin
                      visible={true}
                      height="20"
                      width="20"
                      color="black"
                      ariaLabel="tail-spin-loading"
                      radius="1"
                      wrapperStyle={{
                        position: "absolute",
                        right: "10px",
                        top: "14px",
                      }}
                      wrapperClass=""
                    />
                  )}
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </form>
      </Dialog>
    </Transition>
  );
}
