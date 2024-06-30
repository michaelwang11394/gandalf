import html2canvas from "html2canvas";
import parseTree, { serializeDocument } from "../utilities/parseTree";
import { generateScreenLayout } from "../generate_screen_layout";

type SendUserRequestArgs = {
  product: string;
  query: string;
  previousSteps: string[];
};

export async function sendUserRequest({
  product,
  query,
  previousSteps,
}: SendUserRequestArgs) {
  const domTreeString = serializeDocument(
    parseTree(document.documentElement.outerHTML)
  );
  const screenLayout = generateScreenLayout();

  // Capture Screenshot
  const canvas = await html2canvas(document.body, {
    ignoreElements: (element) => {
      return element.hasAttribute("data-isgandalf");
    },
  });
  const blob = await new Promise<Blob | null>((resolve) =>
    canvas.toBlob((b) => resolve(b))
  );
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

    console.log(domTreeString);
  }

  const backendScreenLayout = JSON.stringify(
    screenLayout.map((item) => {
      const { element, ...rest } = item;
      return {
        ...rest,
        html: parseTree(element.outerHTML).body.innerHTML,
      };
    }),
    null,
    2
  );

  const formData = new FormData();
  formData.append("user_input", query);
  formData.append("product", product);
  formData.append("previous_steps_json", JSON.stringify(previousSteps));
  formData.append("screen_layout", backendScreenLayout);
  console.log(backendScreenLayout);
  if (blob) {
    formData.append("screenshot", blob, "screenshot.png");
  }

  console.log(formData);

  const response = await fetch("http://localhost:8000/gandalf", {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  console.log("Success:", data);
  // Extract and clean the JSON string from Markdown code block
  const jsonString = data.result.replace(/```json\n/, "").replace(/\n```/, "");

  const resultObject = JSON.parse(jsonString);
  console.log("Result Object:", resultObject);
  const { Instructions, itemId, hasMoreInstructions } = resultObject;
  console.log(
    "Instructions:",
    Instructions,
    "itemId:",
    itemId,
    "hasMoreInstructions:",
    hasMoreInstructions
  );

  // Determine the target for the popover based on availability and document presence
  const targetElement =
    screenLayout.find((item) => item.itemId === itemId)?.element ?? null;

  if (!targetElement) {
    console.warn("No valid target element found for the popover.");
  }

  return {
    Instructions,
    targetElement,
    hasMoreInstructions,
  };
}
