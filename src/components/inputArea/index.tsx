import { useState } from 'react';
import './index.css'
export const TerminalInput = (props: any) => {
    const {onKeyDown, updateBuffer, children} = props


    function handleKeyDown(event: any) {

        if (event.key === 'Enter') {
            onKeyDown();
            
        }
        else {
            updateBuffer();
        }
    }

    return (
        <div className="input-container">
            {/* <span className="starting-input">marcus@main-portfolio&gt;&nbsp;</span> */}
            <input onChange={()=>{updateBuffer();}} style={{position:'absolute', left:'-99999px', opacity:0}} className="input-terminal" type='text' onKeyDown={handleKeyDown} />
             {children}
        </div>
    )
}

export const TextDisplay = (props: any) => {
    const {onKeyDown,} = props;
    const [buffer, updateBuffer] = useState()
    const realFocus = document.querySelector('input.input-terminal');

    return (
        <div onClick={(() => { realFocus!.focus(); console.log(realFocus) })} className='input-sub'>
            <TerminalInput updateBuffer={() => {updateBuffer(realFocus!.value)}} onKeyDown={() => {onKeyDown();}}>
                <div className="char-disp"> <span style={{whiteSpace:'nowrap'}}>marcus@main-portfolio&gt;&nbsp;</span>{buffer}</div>
            </TerminalInput>
            
        </div>
    )
}

export * from "./"