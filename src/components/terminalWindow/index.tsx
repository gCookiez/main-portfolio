import {TextDisplay } from "../inputArea"
import { ConsoleTrail } from "../consoleTrail"
import { AppendToHistory } from "../../utils/appendToHistory"
import { useState, useEffect } from "react" 

import './index.css'
import { Version } from "../../utils/commands/helpCommand"

export const TerminalContainer = (props: any) => {
    const { children } = props;
    function maintainFocus() {
        const input = document.querySelector('input.input-terminal');
        input.focus();
    }

    return (
        <div className='terminal-style' onClick={()=> {maintainFocus()}}>
            {children}
        </div>

    )
}

export const Terminal = () => {
    const [holdhistory, addHistory] = useState([]);
    
    useEffect(() => {
        if (holdhistory.length === 0) {
            setTimeout(() => {
                addHistory((e: any): any => [AppendToHistory(Version())])
            }, 500)      
            return;
        }
        const input = document.querySelector('input.input-terminal');
        if (input) {
            input.focus();
        }
    }, [])


    useEffect(() => {
        const changeEvent = new Event('change', { bubbles: true }); 
        const input = document!.querySelector('input.input-terminal')
        input!.value = null;
        input!.dispatchEvent(changeEvent);
    }, [holdhistory])

    return (
        <>
            <TerminalContainer>
                <ConsoleTrail>
                    {holdhistory.map((i) => (i))}
                </ConsoleTrail>
                <TextDisplay addToHistory={(e: any):any => {addHistory((h:any):any => {return [e, ...h]})}} onKeyDown={() => { 
                    addHistory((h:any):any => {
                        const item = AppendToHistory(document!.querySelector('.input-terminal')!.value as String);
                        return [item, ...h];
                    })}}>
                    
                    </TextDisplay>
            </TerminalContainer>
        </>

    )
}


export * from './'