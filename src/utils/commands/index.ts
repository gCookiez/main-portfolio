import { AppendToHistory } from '../appendToHistory';
import CommandList from './helpCommand.tsx'

export const textparser = (text: string): string[] => {
	const items = text.split(' ');
	return items; 
} 

export const commandParser = (text: string[]): any => {
	const rootProgram = text[0]
	if (rootProgram === "linkedin") {
		return AppendToHistory('https://www.linkedin.com/in/marcus-luis-s-gajo-29462b212/');
	}
	
	if (rootProgram === "github") {
		return AppendToHistory('https://github.com/gCookiez');
	}

	if (rootProgram === "help") {
		return AppendToHistory( CommandList() )
	}


	return AppendToHistory('Invalid Command');
}

export const initCommand = (text: string):any => {
	const parsed : string[] = textparser(text);
	const response : any = commandParser(parsed);
	return response;
} 


export * from './'