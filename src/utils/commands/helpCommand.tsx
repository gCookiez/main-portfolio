import { AppendToHistory } from "../appendToHistory";

export const CommandList = (): any => {
    return (
        <div>
            <div>&nbsp;</div>
            <div> Available Commands </div>
            <div> linkedin -- Displays user profile from linkedin </div>
            <div> github -- Displays user profile from github </div>
            <div> help -- Displays this exact page </div>
            <div>&nbsp;</div>
        </div>
    );
}

export const SetupUrl = (text: string) => {
    const url = AppendToHistory(text);

    return (
        AppendToHistory(url)
    )
}