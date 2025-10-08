import { AppendToHistory } from '../appendToHistory';
import { changeIdent } from '../profile-change/index.tsx';
import { CommandList, SetupUrl, Version } from './helpCommand.tsx'
import { getDateTime } from './chrono.tsx'
import { weatherReport } from '../weather/index.tsx';
// import { resolve } from 'path';

export const textparser = (text: string): string[] => {
	const items = text.split(' ');
	return items;
}

export const commandParser_Proto = async (text: string[]): Promise<any> => {
	return new Promise(async (resolve, reject) => {
		const rootProgram = text[0]
		if (rootProgram === "linkedin") {
			resolve(SetupUrl('https://www.linkedin.com/in/marcus-luis-s-gajo-29462b212/'));
			return;
		}

		if (rootProgram === "github") {
			resolve(SetupUrl('https://github.com/gCookiez'));
			return;
		}

		if (rootProgram === "portfolio") {
			resolve(SetupUrl('/main-portfolio/portfolio.pdf'));
			return;
		}

		if (rootProgram === "help") {
			resolve(AppendToHistory(CommandList()));
			return;
		}

		if (rootProgram === 'clear') {
			resolve(false);
			return;
		}

		if (rootProgram === 'profile') {

			const result = changeIdent(text.slice(1));
			if (!result[0]) {
				resolve(AppendToHistory(`Error: ${result[1]}`, 'error'));
				return;
			}

			resolve(result)
			return;

		}

		if (rootProgram === 'weather') {
			weatherReport().then(report => {
				resolve(report);
			}).catch(error => {
				reject(AppendToHistory(`Error: ${error}`, 'error'));
			});
			return;
		}

		if (rootProgram === 'datetime') {
			resolve(AppendToHistory(getDateTime()));
			return;
		}

		if (rootProgram === "version") {
			resolve(AppendToHistory(Version()));
			return;
		}

		let error = Boolean(text[0].trim()) ? rootProgram.length <= 20 ? text[0] : `${rootProgram.substring(0, 20)}...` : 'EMPTY_STRING';

		reject(AppendToHistory(`Error: ${error} is not a known command`, 'error'));

	})
}

/* make this async for better callback on api calls*/
// export const commandParser = (text: string[]): any => {
// 	const rootProgram = text[0]
// 	if (rootProgram === "linkedin") {
// 		return SetupUrl('https://www.linkedin.com/in/marcus-luis-s-gajo-29462b212/');
// 	}

// 	if (rootProgram === "github") {
// 		return SetupUrl('https://github.com/gCookiez');
// 	}

// 	if (rootProgram === "portfolio") {
// 		return SetupUrl('/main-portfolio/portfolio.pdf');
// 	}

// 	if (rootProgram === "help") {
// 		return AppendToHistory(CommandList())
// 	}

// 	if (rootProgram === 'clear') {
// 		return false
// 	}

// 	if (rootProgram === 'profile') {

// 		const result = changeIdent(text.slice(1));
// 		if (!result[0]) {
// 			return AppendToHistory(`Error: ${result[1]}`, 'error');
// 		}

// 		return result;


// 	}

// 	if (rootProgram === 'weather') {
// 		return AppendToHistory('Coming soon');
// 	}

// 	if (rootProgram === 'datetime') {
// 		return AppendToHistory(getDateTime())
// 	}

// 	if (rootProgram === "version") {
// 		return AppendToHistory(Version());
// 	}

// 	let error = Boolean(text[0].trim()) ? rootProgram.length <= 20 ? text[0] : `${rootProgram.substring(0, 20)}...` : 'EMPTY_STRING';

// 	return AppendToHistory(`Error: ${error} is not a known command`, 'error');
// }

export const initCommand = async (text: string): Promise<any> => {

	return new Promise((resolve, reject) => {
		const parsed: string[] = textparser(text);
	// const response: any = commandParser(parsed);
		commandParser_Proto(parsed).then((item) => {resolve(item)})
														.catch(error => reject(error));
	})
	
	
	// return response;
}


export * from './'