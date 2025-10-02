import './style.css'
export const AppendToHistory = (text: any, mode?: any): any => {
    const regex = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g
    


    if (!Boolean(text) && mode == null) {
        return (<span className="console-trail">&nbsp;</span>)
    }

    if (mode === "node") {
        return (<div> </div>)
    }

    if (mode === "error") {
        return (
            <>
            <div>&nbsp;</div>
            <span className="console-trail error"> {text} </span>
            <div>&nbsp;</div>
            </>
        
        )
    }

    if (regex.test(String(text)) || mode == 'url') {
        return (<a target="_blank" href={String(text)}>
                    {text}
                </a>)
    }


    return (
        <span className="console-trail"> {text} </span>
    )
}

export * from './'