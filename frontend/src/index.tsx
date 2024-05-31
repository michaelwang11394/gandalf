import React, { useState, useEffect, useRef } from "react";
import html2canvas from "html2canvas";
import { createPopper } from "@popperjs/core";

const Gandalf: React.FC = () => {
  const [product, setProduct] = useState("To do app");
  const [userInput, setUserInput] = useState("");
  const [domTree, setDomTree] = useState("");
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [popoverTarget, setPopoverTarget] = useState<HTMLElement | null>(null);
  const [popoverContent, setPopoverContent] = useState("");
  const popoverRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLElement | null>(null);

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
            const { Instructions, classname, id, href, text } = data;
            setPopoverContent(Instructions);

            // Determine the target for the popover
            let targetElement = null;
            if (
              classname &&
              document.getElementsByClassName(classname).length
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
            } else if (text) {
              targetElement = document.querySelector(
                `:contains("${text}")`
              ) as HTMLElement;
            } else {
              targetElement = document.body;
            }
            console.log("targetElement", targetElement);
            targetRef.current = targetElement;

            if (popoverRef.current) {
              createPopper(targetElement, popoverRef.current, {
                placement: "top",
              });
            }
          })
          .catch((error) => console.error("Error:", error));
      });
    });
  };

  useEffect(() => {
    if (popoverRef.current && targetRef.current) {
      createPopper(targetRef.current, popoverRef.current, {
        placement: "top",
      });
    }
  }, [popoverContent]);

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
        style={{ visibility: popoverContent ? "visible" : "hidden" }}
      >
        {popoverContent}
      </div>
    </form>
  );
};

export default Gandalf;
