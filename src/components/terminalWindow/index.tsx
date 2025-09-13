import {TextDisplay } from "../inputArea"
import { ConsoleTrail } from "../consoleTrail"
import { AppendToHistory } from "../../utils/appendToHistory"
import { useState, useEffect } from "react" 
import { Version } from "../../utils/commands/helpCommand"
import { getInput } from "../../utils/getInput"
import './index.css'

export const TerminalContainer = (props: any) => {
    const { children } = props;
    function maintainFocus() {
        const input = getInput();
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
                addHistory((): any => [AppendToHistory(Version())])
            }, 500)      
            return;
        }
        const input = getInput();
        if (input) {
            input.focus();
        }
    }, [])


    return (
        <>
            <TerminalContainer>
                <ConsoleTrail>
                    {holdhistory.map((i) => (i))}
                </ConsoleTrail>
                <TextDisplay addToHistory={(e: any):any => {addHistory((h:any):any => {return [e, ...h]})}} onKeyDown={() => { 
                    addHistory((h:any):any => {
                        const item = AppendToHistory(getInput().value as String);
                        return [item, ...h];
                    })}}>
                    
                    </TextDisplay>
            </TerminalContainer>
        </>

    )
}


export * from './'