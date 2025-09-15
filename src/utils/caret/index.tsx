import './index.css'
export const caretFill = (start: number, end: number, word: string) => {
    const nbsp = (<>&nbsp;</>)
    const partition = word.substring(start, end + 1);
    const left = word.substring(0, start);
    const right = word.substring(end + 1, word.length);
    

    console.log("start:", start);
    console.log("start:", end);
    console.log("left:", left)
    console.log("part :", partition)
    console.log("right:", right)
    return (
        <>
        {left}<span className="caret-blink">{Boolean(partition) ? partition : nbsp}</span>{right}
        </>
    )
}