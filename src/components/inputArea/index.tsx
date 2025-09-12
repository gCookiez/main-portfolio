import './index.css'
export const TerminalInput = (props: any) => {
    const {onChange} = props
    return (
        <>
            <input className="input-terminal" type="text" onChange={() => onChange()} />
        </>
    )
}

export * from "./"