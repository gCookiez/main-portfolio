import { useRef, useEffect, useState, type RefObject } from 'react';
import {initCommand } from '../../utils/commands';
import './index.css'
import { caretFill } from '../../utils/caret';
export const TerminalInput = (props: any) => {
    const {pos, recall, invokeHistory, addToHistory, onKeyDown, updateBuffer, children, ref} = props


    function handleKeyDown(event: any) {
        console.log(event.key)

        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            updateBuffer(event.target.value, [ref.current!.selectionStart, ref.current!.selectionEnd]);
            return;
        }

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
            updateBuffer("", [ref.current!.selectionStart, ref.current!.selectionEnd]);
            invokeHistory(value);
            return;
            
        }
        
    }

    useEffect(() => {
        ref.current!.value = pos; 
        ref.current!.focus();
        // ref.current!.setSelectionRange(ref.current!.selectionStart, ref.current!.selectionStart);
        updateBuffer(ref.current!.value, [ref.current!.selectionStart, ref.current!.selectionEnd]);
    }, [pos])

    function handleChange(event: any) {
        updateBuffer(event.target.value, [ref.current!.selectionStart, ref.current!.selectionEnd]);
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
    const [buffer, updateBuffer] = useState<any|null>(null);

    useEffect(() => {
        inputRef.current?.focus();
        
    }, [])

    function caretChange(word: string, f:any) {
        updateBuffer(caretFill(f[0], f[1], word));
    }

    return (
        <div className='input-sub'>
            <TerminalInput 
            pos={pos}
            addToHistory={(e:any) => {addToHistory(e)}} 
            invokeHistory={(e:any) => {invokeHistory(e)}} 
            recall = {(e:string) => {recall(e)}}
            ref={inputRef}  
            updateBuffer={(e:string, f:any) => {caretChange(e,f)}}
            onKeyDown={() => {onKeyDown()}}>
                <div className="char-disp"> <span style={{whiteSpace:'nowrap'}}>marcus@main-portfolio&gt;&nbsp;</span>{buffer}</div>
            </TerminalInput>
            
        </div>
    )
}

export * from "./"