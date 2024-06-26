const queryCheck = (s: string) => document.createDocumentFragment().querySelector(s)

const isSelectorValid = (selector: string) => {
  try { queryCheck(selector) } catch { return false }
  return true
}

// this is not perfect but good enough for now
export function escapeSelector(selector: string): string {
    if (isSelectorValid(selector)) {
        return selector
    } else {
        return selector[0] + CSS.escape(selector.substring(1))
    }
}