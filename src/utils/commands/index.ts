import { AppendToHistory } from '../appendToHistory';
import { changeIdent } from '../profile-change/index.tsx';
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

	if (rootProgram === 'clear') {
		return false
	}

	if (rootProgram === 'profile') {

		const result = changeIdent(text.slice(1));
		if (!result[0]) {
			return AppendToHistory(`Error: ${result[1]}` , 'error');
		}

		return result;
		
		// if (!changes[0]) {
		// 	
		// }

	}

	if (rootProgram === "version") {
		return AppendToHistory( Version() );
	}

	let error = Boolean(text[0].trim()) ? rootProgram.length <= 20 ? text[0] : `${rootProgram.substring(0, 20)}...` : 'EMPTY_STRING';

	return AppendToHistory(`Error: ${error} is not a known command` , 'error');
}

export const initCommand = (text: string):any => {
	const parsed : string[] = textparser(text);
	const response : any = commandParser(parsed);
	return response;
} 


export * from './'