type ScreenLayoutItem = {
    element: HTMLElement
    itemId: number
    top: number
    left: number
    width: number
    height: number
    backgroundColor?: string
    text?: string
}

const IncludedTags = new Set([
    "BUTTON",
    "A",
    "INPUT",
    "SELECT",
    "TEXTAREA"
])

function walkDOM(dom: HTMLElement, process: (child: HTMLElement) => boolean) {
    dom.childNodes.forEach(n => {
        if (n instanceof HTMLElement && process(n)) {
            walkDOM(n, process)
        }
    })
}

export function generateScreenLayout(): ScreenLayoutItem[] {
    const result: ScreenLayoutItem[] = [];
    let counter = 0;

    walkDOM(document.body, (element: HTMLElement) => {
        if (element.attributes.getNamedItem("data-isgandalf")) {
            return false
        }
        const styles = window.getComputedStyle(element)
        const cursor = styles.cursor
        if (element.checkVisibility() && (IncludedTags.has(element.tagName) || (element.onclick != null) || cursor == "pointer" || cursor == "grab")) {
            const rect = element.getBoundingClientRect()
            if (rect.width > 0 && rect.height > 0) {
                const info: ScreenLayoutItem = {
                    itemId: counter++,
                    top: Math.round(rect.top),
                    left: Math.round(rect.left),
                    width: Math.round(rect.width),
                    height: Math.round(rect.height),
                    element,
                }
                const backgroundColor = styles.backgroundColor
                if (backgroundColor && backgroundColor !== 'rgba(0, 0, 0, 0)') {
                    info.backgroundColor = backgroundColor
                }
                const text = element.textContent?.trim()
                if (text) {
                    info.text = text
                }

                result.push(info)
            }
            return false
        }
        return true
    });

    return result;
}
