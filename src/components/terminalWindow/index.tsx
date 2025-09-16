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
    const [hiddenhistory, appendHistory] = useState([]);
    const [name, changeName] = useState('marcus');
    const [env, changeEnvName] = useState('main-portfolio');
    const [pos, changePos] = useState(-1);
    
    function recall(move: string) {

        if (move == 'reset') {
            changePos(-1);
        }

        if (hiddenhistory.length == 0) {
            return;
        }

        if (move == '-' && !((hiddenhistory.length - 1) < pos + 1 )) {
            changePos((e:any) => e + 1);
        }

        if (move == '+' && !(-1 >= pos)) {
            changePos((e:any) => e - 1);
        }

    }

    
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

    useEffect(() => {
        console.log(hiddenhistory[pos])
        console.log(pos)
    }, [pos])


    return (
        <>
            <TerminalContainer>
                <ConsoleTrail>
                    {holdhistory.map((i) => (i))}
                </ConsoleTrail>
                <TextDisplay 
                    recall={(e:string):any => recall(e)}
                    pos={pos >= 0 ? hiddenhistory[pos] : null}
                    addToHistory={(e: any):any => {addHistory((h:any):any => {return [e, ...h]})}} 
                    invokeHistory={(e: any): any => {appendHistory((h:any):any => {return [e, ...h]})}} 
                    clearHistory={() => {addHistory([])}}
                    onKeyDown={() => { 
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