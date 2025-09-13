import { AppendToHistory } from '../appendToHistory';
import {CommandList, SetupUrl, Version} from './helpCommand.tsx'

export const textparser = (text: string): string[] => {
	const items = text.split(' ');
	return items; 
} 

export const commandParser = (text: string[]): any => {
	const rootProgram = text[0]
	if (rootProgram === "linkedin") {
		return SetupUrl('https://www.linkedin.com/in/marcus-luis-s-gajo-29462b212/');
	}
	
	if (rootProgram === "github") {
		return SetupUrl('https://github.com/gCookiez');
	}

	if (rootProgram === "portfolio") {
		return SetupUrl('Coming Soon');
	}

	if (rootProgram === "help") {
		return AppendToHistory( CommandList() )
	}

	if (rootProgram === "version") {
		return AppendToHistory( Version() );
	}


	return AppendToHistory(`Error: ${rootProgram.length <= 20 ? text : `${rootProgram.substring(0, 20)}...`} is not a known command`, 'error');
}

export const initCommand = (text: string):any => {
	const parsed : string[] = textparser(text);
	const response : any = commandParser(parsed);
	return response;
} 


export * from './'