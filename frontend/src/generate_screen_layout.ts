type ScreenLayoutItem = {
  element: HTMLElement;
  itemId: number;
  top: number;
  left: number;
  backgroundColor?: string;
  text?: string;
  checked?: boolean;
};

const IncludedTags = new Set(["BUTTON", "A", "INPUT", "SELECT", "TEXTAREA"]);

function walkDOM(dom: HTMLElement, process: (child: HTMLElement) => boolean) {
  dom.childNodes.forEach((n) => {
    if (n instanceof HTMLElement && process(n)) {
      walkDOM(n, process);
    }
  });
}

function elementToInfo(
  element: HTMLElement,
  rect: DOMRect,
  styles: CSSStyleDeclaration,
  id: number
): ScreenLayoutItem {
  const info: ScreenLayoutItem = {
    itemId: id,
    top: Math.round(rect.top),
    left: Math.round(rect.left),
    element,
  };
  const backgroundColor = styles.backgroundColor;
  if (backgroundColor && backgroundColor !== "rgba(0, 0, 0, 0)") {
    info.backgroundColor = backgroundColor;
  }
  const text = element.textContent?.trim();
  if (text) {
    info.text = text;
  }

  const checked = (() => {
    if (element instanceof HTMLInputElement) {
      return element.checked;
    }
    const innerCheckbox = element.querySelector('input[type="checkbox"]');
    if (innerCheckbox) {
      return (innerCheckbox as HTMLInputElement).checked;
    }
    return null;
  })();
  if (checked !== null) {
    info.checked = checked;
  }

  let cur = element.parentElement;
  while (cur && cur !== document.body && cur.childElementCount === 1) {
    const curRect = cur.getBoundingClientRect();
    if (
      curRect.left !== rect.left ||
      curRect.right !== rect.right ||
      curRect.top !== rect.top ||
      curRect.bottom !== rect.bottom
    ) {
      break;
    }
    if (!info.backgroundColor) {
      const backgroundColor = window.getComputedStyle(cur).backgroundColor;
      if (backgroundColor && backgroundColor !== "rgba(0, 0, 0, 0)") {
        info.backgroundColor = backgroundColor;
      }
    }
    info.element = cur;
    cur = cur.parentElement;
  }

  return info;
}

export function generateScreenLayout(): ScreenLayoutItem[] {
  const result: ScreenLayoutItem[] = [];
  let counter = 0;

  walkDOM(document.body, (element: HTMLElement) => {
    if (element.attributes.getNamedItem("data-isgandalf")) {
      return false;
    }
    const styles = window.getComputedStyle(element);
    if (styles.opacity === "0") {
      return false;
    }
    const cursor = styles.cursor;
    if (
      element.checkVisibility() &&
      (IncludedTags.has(element.tagName) ||
        (element.onclick && !element.onclick.toString().endsWith("(){}")) ||
        cursor == "pointer" ||
        cursor == "grab")
    ) {
      const rect = element.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        result.push(elementToInfo(element, rect, styles, counter++));
      }
      return false;
    }
    return true;
  });

  return result;
}
