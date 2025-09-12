import './index.css'
export const AppendToHistory = (text: String) : any => {
    return (
        <span className="console-trail"> {text} </span>
    )
}

export * from './'