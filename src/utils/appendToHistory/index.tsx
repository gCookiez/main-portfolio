import './index.css'
export const AppendToHistory = (text: String) : any => {
    if (!Boolean(text)) {
        return (<span className="console-trail">  </span> )
    }
        
    return (
        <span className="console-trail"> {text} </span> 
    )
}

export * from './'