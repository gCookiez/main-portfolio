import { TerminalInput } from "../inputArea"
import { ConsoleTrail } from "../consoleTrail"

import './index.css'

export const TerminalContainer = (props: any) => {
    const { children } = props;

    return (
        <div className='terminal-style'>
            {children}
        </div>

    )
}

export const Terminal = (props: any) => {
    const { children } = props;
    return (
        <>
            <TerminalContainer>
                <ConsoleTrail>
                    {children}
                </ConsoleTrail>
                <TerminalInput></TerminalInput>
            </TerminalContainer>
        </>

    )
}


export * from './'