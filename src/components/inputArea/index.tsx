import './index.css'
export const TerminalInput = (props: any) => {
    const {onKeyDown} = props


    function handleKeyDown(event: any) {
        if (event.key === 'Enter') {
            onKeyDown();
        }
    }

    return (
        <div className="input-container" style={{display:'flex', gap: '10px'}}>
            <span className="starting-input"> &gt; </span>
            <input className="input-terminal" type='text' onKeyDown={handleKeyDown} />
        </div>
    )
}

export * from "./"