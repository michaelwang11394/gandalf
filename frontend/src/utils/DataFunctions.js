import html2canvas from 'html2canvas';

export const captureScreenshot = () => {
    const element = document.body;
    html2canvas(element).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = imgData;
        link.download = 'screenshot.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }).catch((error) => {
        console.error('Screenshot capture failed:', error);
    });
};

export const retrieveDomTree = () => {
    const domContent = document.documentElement.outerHTML;
    const blob = new Blob([domContent], { type: 'text/plain' });
    const domLink = document.createElement('a');
    domLink.href = URL.createObjectURL(blob);
    domLink.download = 'dom-tree.txt';
    document.body.appendChild(domLink);
    domLink.click();
    document.body.removeChild(domLink);
};
