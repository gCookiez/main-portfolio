import { AppendToHistory } from "../appendToHistory";
import { roots } from "./commandType.ts";


export const CommandList = (): any => {
    return (
        <div>
            <div>&nbsp;</div>
            <div> Available Commands </div>
            { Object.entries(roots.programs).map(([key, value]) => {
                console.log(value.desc)
                return (<div> {value.name}{value.desc.slice(0, 2) == "??" ? value.desc.slice(2) : ` -- ${value.desc}`} </div>)
            })}
            <div>&nbsp;</div>
        </div>
    );
}
export const Version = (): any => {
    return (
        <div>
            <div>&nbsp;</div>
            <div> Mock Terminal v{__APP_VERSION__} </div>
            <div> Developed by Marcus Gajo</div>
            <div> <strong>~~ Commands are deemed non-functional and only used for aesthetics ~~</strong></div>
            <div>&nbsp;</div>
        </div>
    );
}

export const SetupUrl = (text: string) => {
    const url = AppendToHistory(text, 'url');

    return (
        AppendToHistory(url)
    )
}