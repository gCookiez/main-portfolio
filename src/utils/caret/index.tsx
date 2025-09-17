import './index.css'
export const caretFill = (start: number, end: number, word: string) => {
    const partition = word.substring(start, end + 1);
    const left = word.substring(0, start);
    const right = word.substring(end + 1, word.length);

    return (
        <>
        {left.length > 0 ? left : null}<span className="caret-blink">{Boolean(partition) ? partition : ` `}</span>{right}
        </>
    )
}