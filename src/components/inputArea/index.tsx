import './index.css'
export const TerminalInput = (props: any) => {
    const {onKeyDown} = props


    function handleKeyDown(event: any) {
        if (event.key === 'Enter') {
            onKeyDown();
        }
    }

    return (
        <>
            <input className="input-terminal" type="text" onKeyDown={handleKeyDown} />
        </>
    )
}

export * from "./"