import { AppendToHistory } from "../appendToHistory";


export const CommandList = (): any => {
    return (
        <div>
            <div>&nbsp;</div>
            <div> Available Commands </div>
            <div> datetime -- Displays current datetime from JavaScript Runtime</div>
            <div> linkedin -- Displays user profile from linkedin </div>
            <div> github -- Displays user profile from github </div>
            <div> help -- Displays this exact page </div>
            <div> clear -- Clears screen </div>
            <div> version -- Displays version number </div>
            <div> portfolio -- Displays link for developer's resume </div>
            <div> weather -- Displays current weather (only accurate to client's ISP source) </div>
            <div> profile &lt;[user | env]&gt; &lt;name&gt; -- Changes name or env shown after </div>
            <div> pressing enter for command</div>
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