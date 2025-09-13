import { useRef, useEffect, useState, type RefObject } from 'react';
import {initCommand } from '../../utils/commands';
import './index.css'
export const TerminalInput = (props: any) => {
    const {pos, recall, invokeHistory, addToHistory, onKeyDown, updateBuffer, children, ref} = props


    function handleKeyDown(event: any) {
        console.log(event.key)

        if (event.key === 'ArrowDown') {
            event.preventDefault();
            recall('+');
            return;
        }

        if (event.key === 'ArrowUp') {
            event.preventDefault();
            recall('-');
            return;
        }

        if (event.key === 'Enter') {
            const value = ref.current?.value;
            onKeyDown();
            if (typeof addToHistory == 'function')
            addToHistory(initCommand(value));
            ref.current!.value = ""; 
            recall("reset");
            // // clear after enter
            updateBuffer("");
            invokeHistory(value);
            return;
            
        }
        
    }

    useEffect(() => {
        ref.current!.value = pos; 
        ref.current!.focus();
        ref.current!.setSelectionRange(ref.current!.selectionStart, ref.current!.selectionStart);
        updateBuffer(ref.current!.value);
    }, [pos])

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

    const {onKeyDown, addToHistory, invokeHistory, recall, pos} = props;
    const [buffer, updateBuffer] = useState<String|null>(null);

    useEffect(() => {
        inputRef.current?.focus();
        
    }, [])

    

    return (
        <div className='input-sub'>
            <TerminalInput 
            pos={pos}
            addToHistory={(e:any) => {addToHistory(e)}} 
            invokeHistory={(e:any) => {invokeHistory(e)}} 
            recall = {(e:string) => {recall(e)}}
            ref={inputRef}  
            updateBuffer={(e: String) => {updateBuffer(e)}} 
            onKeyDown={() => {onKeyDown()}}>
                <div className="char-disp"> <span style={{whiteSpace:'nowrap'}}>marcus@main-portfolio&gt;&nbsp;</span>{buffer}</div>
            </TerminalInput>
            
        </div>
    )
}

export * from "./"