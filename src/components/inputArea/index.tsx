import { useRef, useEffect, useState } from 'react';
import './index.css'
export const TerminalInput = (props: any) => {
    const {onKeyDown, updateBuffer, children, ref} = props


    function handleKeyDown(event: any) {

        if (event.key === 'Enter') {
            onKeyDown();
            
        }
        else {
            updateBuffer();
        }
    }

    return (
        <div className="input-container">
            {/* <span className="starting-input">marcus@main-portfolio&gt;&nbsp;</span> */}
            <input ref={ref} onChange={()=>{updateBuffer();}} style={{position:'absolute', left:'-99999px', opacity:0}} className="input-terminal" type='text' onKeyDown={handleKeyDown} />
             {children}
        </div>
    )
}

export const TextDisplay = (props: any) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [])
    const {onKeyDown,} = props;
    const [buffer, updateBuffer] = useState()

    return (
        <div className='input-sub'>
            <TerminalInput ref={inputRef} updateBuffer={() => {updateBuffer(inputRef.current?.value)}} onKeyDown={() => {onKeyDown();}}>
                <div className="char-disp"> <span style={{whiteSpace:'nowrap'}}>marcus@main-portfolio&gt;&nbsp;</span>{buffer}</div>
            </TerminalInput>
            
        </div>
    )
}

export * from "./"