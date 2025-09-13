import { TerminalInput } from "../inputArea"
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
        document!.querySelector('.input-terminal')!.value = null;
        console.log(holdhistory);
    }, [holdhistory])

    return (
        <>
            <TerminalContainer>
                <ConsoleTrail>
                    {holdhistory.map((i) => (i))}
                </ConsoleTrail>
                <TerminalInput onKeyDown={() => { 
                    addHistory((h:any):any => {
                        const item = AppendToHistory(document!.querySelector('.input-terminal')!.value as String);
                        return [item, ...h];

                    })}}> </TerminalInput>
            </TerminalContainer>
        </>

    )
}


export * from './'