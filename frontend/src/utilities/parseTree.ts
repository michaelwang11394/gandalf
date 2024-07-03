const parseTree = (html: string): Document => {
  // Capture DOM Tree
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  // Remove script tags
  doc.querySelectorAll("script").forEach((el) => el.remove());

  // Remove meta tags
  doc.querySelectorAll("meta").forEach((el) => el.remove());

  // Remove style tags
  doc.querySelectorAll("style").forEach((el) => el.remove());

  // Remove comments
  doc.querySelectorAll("*").forEach((el) => {
    el.childNodes.forEach((node) => {
      if (node.nodeType === Node.COMMENT_NODE) {
        node.remove();
      }
    });
  });

  // Remove deprecated tags and attributes, inline styles, and empty elements
  const deprecatedTags = ["font", "center", "marquee"]; // Add more as needed
  doc.querySelectorAll("*").forEach((el) => {
    // Remove inline styles
    el.removeAttribute("style");
    el.removeAttribute("class");
    el.removeAttribute("fill");
    el.removeAttribute("stroke");
    el.removeAttribute("stroke-linecap");
    el.removeAttribute("stroke-linejoin");
    el.removeAttribute("xmlns");
    el.removeAttribute("xmlns:xlink");
    el.removeAttribute("stroke-width");
    el.removeAttribute("viewBox");
    el.removeAttribute("version");
    el.removeAttribute("fill-rule");
    el.removeAttribute("transform");
    el.removeAttribute("width");
    el.removeAttribute("height");

    // Remove deprecated tags
    if (deprecatedTags.includes(el.tagName.toLowerCase())) {
      el.replaceWith(...Array.from(el.childNodes));
    }

    // Remove empty elements
    if (!el.innerHTML.trim() && el.nodeType === Node.ELEMENT_NODE) {
      if (el.tagName === "IMG") {
        el.setAttribute("src", "");
      } else if (el.tagName !== "INPUT" && el.tagName !== "TEXTAREA") {
        el.remove();
      }
    }
  });

  return doc;
};

// Serialize the cleaned document back to a string
export function serializeDocument(doc: Document) {
  const serializer = new XMLSerializer();
  const cleanedHTML = serializer.serializeToString(doc);
  return cleanedHTML;
}

export default parseTree;
