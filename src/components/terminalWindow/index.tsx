import { TextDisplay } from "../inputArea"
import { ConsoleTrail } from "../consoleTrail"
import { AppendToHistory } from "../../utils/appendToHistory"
import { useState, useEffect } from "react"
import { Version } from "../../utils/commands/helpCommand"
import { getInput } from "../../utils/getInput"
import { PreAnimation } from "../../utils/delay"
import { TerminalOpen, TerminalAppear, HistoryAppear } from "../../utils/animations"
// import { changeEnv, changeUser} from '../../utils/profile-change'
import './index.css'

export const TerminalContainer = (props: any) => {
    const { children } = props;
    function maintainFocus() {
        const input = getInput();
        input.focus();
    }

    return (
        <div className='terminal-style' onClick={() => { maintainFocus() }}>
            {children}
        </div>

    )
}

export const Terminal = () => {
    const [holdhistory, addHistory] = useState([]);
    const [hiddenhistory, appendHistory] = useState([]);
    const [pos, changePos] = useState(-1);
    const [currname, changeName] = useState('marcus');
    const [currenv, changeEnvName] = useState('main-portfolio');
    const [inputVisibility, switchVisibility] = useState<Boolean | null>(true)

    function changeProfile(params: any) {
        if (params[0] == 'env') {
            changeEnvName(params[1])
        }

        if (params[0] == 'user') {
            changeName(params[1])
        }

    }

    function recall(move: string) {

        if (move == 'reset') {
            changePos(-1);
        }

        if (hiddenhistory.length == 0) {
            return;
        }

        if (move == '-' && !((hiddenhistory.length - 1) < pos + 1)) {
            changePos((e: any) => e + 1);
        }

        if (move == '+' && !(-1 >= pos)) {
            changePos((e: any) => e - 1);
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


   

    function TextDisplayDelay() {
        return (
            <TextDisplay
                changeProfile={(e: any) => { changeProfile(e) }}
                recall={(e: string): any => recall(e)}
                pos={pos >= 0 ? hiddenhistory[pos] : null}
                addToHistory={(e: any): any => { addHistory((h: any): any => { return [e, ...h] }) }}
                invokeHistory={(e: any): any => { appendHistory((h: any): any => { return [e, ...h] }) }}
                clearHistory={() => { addHistory([]) }}
                inputVisibility = {inputVisibility}
                changeVisibility = {(bool: Boolean) => switchVisibility(bool)}
                onKeyDown={() => {
                    addHistory((h: any): any => {
                        const item = AppendToHistory(`${currname}@${currenv}> ${getInput().value as String}`);
                        return [item, ...h];
                    })
                }}>
            </TextDisplay>
        )
    }

    return (
        <PreAnimation Parent={TerminalContainer} animation={TerminalOpen} toggle={false}>
            <PreAnimation Parent={ConsoleTrail} animation={HistoryAppear} toggle={true}>
                <PreAnimation Parent={TextDisplayDelay} animation={TerminalAppear} toggle={true}>
                </PreAnimation>
                {holdhistory.map((i) => (i))}
            </PreAnimation>
        </PreAnimation>



    )
}


export * from './'