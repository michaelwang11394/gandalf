const parseTree = () => {
  // Capture DOM Tree
  const parser = new DOMParser();
  const doc = parser.parseFromString(
    document.documentElement.outerHTML,
    "text/html"
  );

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

    // Remove deprecated tags
    if (deprecatedTags.includes(el.tagName.toLowerCase())) {
      el.replaceWith(...Array.from(el.childNodes));
    }

    // Remove empty elements
    if (!el.innerHTML.trim() && el.nodeType === Node.ELEMENT_NODE) {
      el.remove();
    }
  });

  // Serialize the cleaned document back to a string
  const serializer = new XMLSerializer();
  const cleanedHTML = serializer.serializeToString(doc);
  return cleanedHTML;
};

export default parseTree;
