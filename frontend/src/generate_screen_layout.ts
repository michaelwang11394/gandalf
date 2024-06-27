type ScreenLayoutItem = {
    type: "button" | "link or button" | "text field" // TODO add dropdown?
    top: number
    left: number
    width: number
    height: number
    background: string
    text?: string
    placeholder?: string
    html: string
}

function generateScreenLayoutInner(): ScreenLayoutItem[] {
    const result: ScreenLayoutItem[] = [];

    [].forEach.call(document.querySelectorAll("button"), (button: Element) => {
        if (button.checkVisibility() && !button.matches("[data-isgandalf] *, [data-isgandalf]")) {
            const rect = button.getBoundingClientRect()
            const info: ScreenLayoutItem = {
                type: "button",
                top: rect.top,
                left: rect.left,
                width: rect.width,
                height: rect.height,
                background: window.getComputedStyle(button).background,
                html: button.outerHTML
            }
            const text = button.textContent?.trim()
            if (text) {
                info.text = text
            }
            result.push(info)
        }
    });

    [].forEach.call(document.querySelectorAll(":link"), (link: Element) => {
        if (link.checkVisibility() && !link.matches("[data-isgandalf] *, [data-isgandalf]")) {
            const rect = link.getBoundingClientRect()
            const info: ScreenLayoutItem = {
                type: "link or button",
                top: rect.top,
                left: rect.left,
                width: rect.width,
                height: rect.height,
                background: window.getComputedStyle(link).background,
                html: link.outerHTML
            }
            const text = link.textContent?.trim()
            if (text) {
                info.text = text
            }
            result.push(info)
        }
    });

    // TODO: input may not always be text input
    [].forEach.call(document.querySelectorAll("textarea, input"), (field: Element) => {
        if (field.checkVisibility() && !field.matches("[data-isgandalf] *, [data-isgandalf]")) {
            const rect = field.getBoundingClientRect()
            const info: ScreenLayoutItem = {
                type: "text field",
                top: rect.top,
                left: rect.left,
                width: rect.width,
                height: rect.height,
                background: window.getComputedStyle(field).background,
                html: field.outerHTML
            }
            const placeholder = (field as HTMLTextAreaElement).placeholder
            if (placeholder) {
                info.placeholder = placeholder
            }
            result.push(info)
        }
    });

    return result;
}

export function generateScreenLayout(): string {
    return JSON.stringify(generateScreenLayoutInner(), null, 2)
}