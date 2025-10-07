import { useRef, useEffect, useState, type RefObject } from 'react';
import { initCommand } from '../../utils/commands';
import './index.css'
import { caretFill } from '../../utils/caret';


export const TerminalInput = (props: any) => {
    const { changeProfile, clearHistory, ctrl, ctrlCheck, shift, holdCheck, pos, recall, invokeHistory, addToHistory, onKeyDown, updateBuffer, children, ref } = props;
    const [shiftReleased, stateChange] = useState(false);
    const [ctrlReleased, ctrlChange] = useState(false);


    useEffect(() => {
        if (!shift) {
            stateChange(true)
        }

        if (shift) {
            stateChange(false)
        }

    }, [shift])

    useEffect(() => {
        if (!ctrl) {
            ctrlChange(true)
        }

        if (ctrl) {
            ctrlChange(false)
        }

    }, [ctrl])

    function handleKeyUp(event: any) {
        if (event.key === "Shift") {
            holdCheck(false);
            return;
        }

        if (event.key === "Control") {
            ctrlCheck(false);
            return;
        }
    }

    async function handleKeyDown(event: any) {


        if (event.key === "Shift") {
            holdCheck(true);
            return;
        }

        if (event.key === "Control") {
            ctrlCheck(true);
            return;
        }

        if (event.key == 'a' && ctrl) {
            updateBuffer(event.target.value, [0, event.target.value.length]);
            return
        }


        if (event.key === "ArrowLeft") {
            if (shift) {
                updateBuffer(event.target.value, [ref.current!.selectionStart > 0 ? ref.current!.selectionStart - 1 : ref.current!.selectionStart, ref.current!.selectionEnd]);
                return;
            }
            if ((shiftReleased || ctrlReleased) && (ref.current!.selectionEnd - ref.current!.selectionStart != 0)) {
                updateBuffer(event.target.value, [ref.current!.selectionStart, ref.current!.selectionStart]);
                stateChange(false)
                ctrlChange(false)
                return;
            }
            updateBuffer(event.target.value, [ref.current!.selectionStart > 0 ? ref.current!.selectionStart - 1 : ref.current!.selectionStart, ref.current!.selectionStart > 0 ? ref.current!.selectionEnd - 1 : ref.current!.selectionStart]);
            return;
        }
        if (event.key === "ArrowRight") {
            if (shift) {
                updateBuffer(event.target.value, [ref.current!.selectionStart, ref.current!.selectionEnd + 1]);
                return
            }
            if ((shiftReleased || ctrlReleased) && (ref.current!.selectionEnd - ref.current!.selectionStart != 0)) {
                updateBuffer(event.target.value, [ref.current!.selectionEnd, ref.current!.selectionEnd]);
                stateChange(false)
                ctrlChange(false)
                return;
            }
            updateBuffer(event.target.value, [ref.current!.selectionStart + 1, ref.current!.selectionEnd + 1]);
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
            if (typeof addToHistory == 'function') {
                initCommand(value).then((command) => {

                    if (typeof command == 'object' && command[0] === true) {
                        changeProfile(command[1])
                        addToHistory(command[2])
                    }
                    else if (command) {
                        addToHistory(command);
                    }
                    else {
                        clearHistory();
                    }

                }).catch(error => {
                    addToHistory(error);
                }).finally(() => {

                    ref.current!.value = "";
                    recall("reset");
                    // // clear after enter
                    updateBuffer("", [ref.current!.selectionStart, ref.current!.selectionEnd]);
                    invokeHistory(value);
                    return;

                });

            }



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
            <input ref={ref} className="input-terminal" type='text' onKeyUp={handleKeyUp} onKeyDown={handleKeyDown} onChange={handleChange} />
            {children}
        </div>
    )
}

export const TextDisplay = (props: any) => {
    const inputRef: RefObject<HTMLInputElement | null> = useRef<HTMLInputElement>
        (null);

    const { changeProfile, clearHistory, onKeyDown, addToHistory, invokeHistory, recall, pos } = props;
    const [buffer, updateBuffer] = useState<any | null>(null);
    const [caretpos, changecaret] = useState<any | null>([0, 0]);
    const [shift, holdCheck] = useState(false)
    const [ctrl, ctrlCheck] = useState(false)

    useEffect(() => {
        inputRef.current?.focus();

    }, [])

    useEffect(() => {
        changecaret((e: any) => [...e]);

    }, [shift])

    function caretChange(word: string, f: any) {
        updateBuffer(word);
        changecaret(() => [...f, word]);
        // updateBuffer(word);
        // updateBuffer(caretFill(f[0], f[1], word));
    }

    // useEffect(() => {
    //     updateBuffer(() => caretFill(caretpos[0], caretpos[1], caretpos[2]))
    // }, [caretpos])

    return (
        <div className='input-sub'>
            <TerminalInput
                changeProfile={(e: any) => { changeProfile(e) }}
                pos={pos}
                shift={shift}
                ctrl={ctrl}
                clearHistory={() => clearHistory()}
                holdCheck={(e: any) => holdCheck(e)}
                ctrlCheck={(e: any) => ctrlCheck(e)}
                addToHistory={(e: any) => { addToHistory(e) }}
                invokeHistory={(e: any) => { invokeHistory(e) }}
                recall={(e: string) => { recall(e) }}
                ref={inputRef}
                updateBuffer={(e: string, f: any) => { caretChange(e, f) }}
                onKeyDown={() => { onKeyDown() }}>
                {/* <div className="char-disp"><span style={{whiteSpace:'nowrap'}}>marcus@main-portfolio&gt;&nbsp;</span>{buffer != undefined ? caretFill(caretpos[0], caretpos[1], buffer) : caretFill(0, 1, ' ')}</div> */}
                <div className="char-disp"><span style={{ whiteSpace: 'nowrap' }}>$ &gt;&nbsp;</span>{buffer != undefined ? caretFill(caretpos[0], caretpos[1], buffer) : caretFill(0, 1, ' ')}</div>
            </TerminalInput>

        </div>
    )
}

export * from "./"