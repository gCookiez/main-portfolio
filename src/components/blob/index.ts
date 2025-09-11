export const downloadFile = (fileName: any) => {
    fetch(`../public/${fileName}`,  {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/pdf',
        }, 
    })
    .then((response) => response.blob())
    .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute(
            'download',
            'portfolio.pdf'
        )

        link.click();
    })
}

export * from './'