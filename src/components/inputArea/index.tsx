import { useRef, useEffect, useState, type RefObject } from 'react';
import {initCommand } from '../../utils/commands';
import './index.css'
import { getInput } from '../../utils/getInput';
export const TerminalInput = (props: any) => {
    const {addToHistory, onKeyDown, updateBuffer, children, ref} = props


    function handleKeyDown(event: any) {

        if (event.key === 'Enter') {
            const value = ref.current?.value;
            onKeyDown();
            if (typeof addToHistory == 'function')
            addToHistory(initCommand(value));
            ref.current!.value = ""; // clear after enter
            updateBuffer("");
            return;
            
        }
        
    }

    function handleChange(event: any) {
        updateBuffer(event.target.value);
    }

    return (
        <div className="input-container">
            <input ref={ref} style={{position:'absolute', left:'-99999px', opacity:0}} className="input-terminal" type='text' onKeyDown={handleKeyDown} onChange={handleChange} />
             {children}
        </div>
    )
}

export const TextDisplay = (props: any) => {
    const inputRef : RefObject<HTMLInputElement | null> = useRef<HTMLInputElement>
    (null);

    const {onKeyDown, addToHistory} = props;
    const [buffer, updateBuffer] = useState<String|null>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [])
    

    return (
        <div className='input-sub'>
            <TerminalInput addToHistory={(e:any) => {addToHistory(e)}} ref={inputRef}  updateBuffer={(e: String) => {updateBuffer(e)}} onKeyDown={() => {onKeyDown()}}>
                <div className="char-disp"> <span style={{whiteSpace:'nowrap'}}>marcus@main-portfolio&gt;&nbsp;</span>{buffer}</div>
            </TerminalInput>
            
        </div>
    )
}

export * from "./"