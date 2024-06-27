type ScreenLayoutItem = {
    element: HTMLElement
    itemId: number
    type: "button" | "link or button" | "text field" // TODO add dropdown?
    top: number
    left: number
    width: number
    height: number
    background: string
    text?: string
    placeholder?: string
}

export function generateScreenLayout(): ScreenLayoutItem[] {
    const result: ScreenLayoutItem[] = [];
    let counter = 0;

    [].forEach.call(document.querySelectorAll("button"), (button: HTMLElement) => {
        if (button.checkVisibility() && !button.matches("[data-isgandalf] *, [data-isgandalf]")) {
            const rect = button.getBoundingClientRect()
            const info: ScreenLayoutItem = {
                itemId: counter++,
                type: "button",
                top: rect.top,
                left: rect.left,
                width: rect.width,
                height: rect.height,
                background: window.getComputedStyle(button).background,
                element: button,
            }
            const text = button.textContent?.trim()
            if (text) {
                info.text = text
            }
            result.push(info)
        }
    });

    [].forEach.call(document.querySelectorAll(":link"), (link: HTMLElement) => {
        if (link.checkVisibility() && !link.matches("[data-isgandalf] *, [data-isgandalf]")) {
            const rect = link.getBoundingClientRect()
            const info: ScreenLayoutItem = {
                itemId: counter++,
                type: "link or button",
                top: rect.top,
                left: rect.left,
                width: rect.width,
                height: rect.height,
                background: window.getComputedStyle(link).background,
                element: link
            }
            const text = link.textContent?.trim()
            if (text) {
                info.text = text
            }
            result.push(info)
        }
    });

    // TODO: input may not always be text input
    [].forEach.call(document.querySelectorAll("textarea, input"), (field: HTMLElement) => {
        if (field.checkVisibility() && !field.matches("[data-isgandalf] *, [data-isgandalf]")) {
            const rect = field.getBoundingClientRect()
            const info: ScreenLayoutItem = {
                itemId: counter++,
                type: "text field",
                top: rect.top,
                left: rect.left,
                width: rect.width,
                height: rect.height,
                background: window.getComputedStyle(field).background,
                element: field
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
