import './index.css'
export const AppendToHistory = (text: any): any => {
    const regex = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g


    if (!Boolean(text)) {
        return (<span className="console-trail">  </span>)
    }

    if (regex.test(String(text))) {
        return (
            <span className="console-trail">
                <a href={String(text)}>
                    {text}
                </a>
            </span>)
    }


    return (
        <span className="console-trail"> {text} </span>
    )
}

export * from './'