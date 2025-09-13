import {TextDisplay } from "../inputArea"
import { ConsoleTrail } from "../consoleTrail"
import { AppendToHistory } from "../../utils/appendToHistory"
import { useState, useEffect } from "react" 

import './index.css'

export const TerminalContainer = (props: any) => {
    const { children } = props;

    return (
        <div className='terminal-style'>
            {children}
        </div>

    )
}

export const Terminal = () => {
    const [holdhistory, addHistory] = useState([]);
    
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
                    {holdhistory.length != 0 ? holdhistory.map((i) => (i)) : null}
                </ConsoleTrail>
                <TextDisplay onKeyDown={() => { 
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