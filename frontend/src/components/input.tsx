import React, { useEffect } from "react";
import "../index.css";
import {
  Combobox,
  ComboboxInput,
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

interface InputProps {
  open: boolean;
  query: string;
  setQuery: (query: string) => void;
  setOpen: (open: boolean) => void;
  handleSubmit: (query: string) => void;
}

export default function Input({
  open,
  query,
  setQuery,
  setOpen,
  handleSubmit,
}: InputProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the default form submission
    handleSubmit(query); // Call the passed handleSubmit function with the current query
  };

  return (
    <Transition show={open} afterLeave={() => setQuery("")} appear>
      <Dialog
        className="relative z-10"
        onClose={() => setOpen(false)}
        style={{ position: "relative", zIndex: 10 }}
      >
        <form onSubmit={handleFormSubmit}>
          <TransitionChild
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              style={{
                position: "fixed",
                inset: 0,
                backgroundColor: "rgba(75, 85, 99, 0.25)",
                transition: "opacity 0.3s ease-in-out",
              }}
            />
          </TransitionChild>

          <div
            style={{
              position: "fixed",
              inset: 0,
              width: "100vw",
              overflowY: "auto",
              padding: "16px",
              paddingTop: "24px",
              paddingBottom: "24px",
              paddingLeft: "80px",
            }}
          >
            <TransitionChild
              enter="ease-out duration-150"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel
                style={{
                  margin: "auto",
                  maxWidth: "640px",
                  transform: "scale(1)",
                  overflow: "hidden",
                  borderRadius: "16px",
                  backgroundColor: "rgba(255, 255, 255, 0.6)",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                <Combobox>
                  <div style={{ position: "relative" }}>
                    <MagnifyingGlassIcon
                      style={{
                        position: "absolute",
                        left: "16px",
                        top: "14px",
                        height: "20px",
                        width: "20px",
                        color: "#9CA3AF",
                        pointerEvents: "none",
                      }}
                      aria-hidden="true"
                    />
                    <ComboboxInput
                      autoFocus
                      style={{
                        height: "48px",
                        width: "100%",
                        border: 0,
                        backgroundColor: "rgba(229, 231, 235, 0.6)",
                        paddingLeft: "44px",
                        paddingRight: "16px",
                        color: "#374151",
                        fontSize: "0.875rem",
                        borderRadius: "16px",
                        outline: "none",
                      }}
                      placeholder="Search..."
                      onChange={handleInputChange}
                      value={query}
                    />
                  </div>
                </Combobox>
              </DialogPanel>
            </TransitionChild>
          </div>
        </form>
      </Dialog>
    </Transition>
  );
}
