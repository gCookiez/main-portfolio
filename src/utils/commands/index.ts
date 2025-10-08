import { AppendToHistory } from '../appendToHistory';
import { roots }  from './commandType.ts';


export const textparser = (text: string): string[] => {
	const items = text.split(' ');
	return items;
}

export const commandParser_Proto = async (text: string[]): Promise<any> => {
	return new Promise(async (resolve, reject) => {
		const rootProgram = text[0];

		let program = roots.programs.filter(i => i.name === rootProgram);

		if (program.length == 1) {
			console.warn('help')
			let result = program[0].executions.call ? program[0].executions.call(text.slice(1)) : AppendToHistory(program[0].executions.textBased); 
			resolve(result);
			return; 
		}

		let error = Boolean(text[0].trim()) ? rootProgram.length <= 20 ? text[0] : `${rootProgram.substring(0, 20)}...` : 'EMPTY_STRING';

		reject(AppendToHistory(`Error: ${error} is not a known command`, 'error'));

	})
}

//legacy command parser 2
// export const commandParser = async (text: string[]): Promise<any> => {
// 	return new Promise(async (resolve, reject) => {
// 		const rootProgram = text[0]
// 		if (rootProgram === "linkedin") {
// 			resolve(SetupUrl('https://www.linkedin.com/in/marcus-luis-s-gajo-29462b212/'));
// 			return;
// 		}

// 		if (rootProgram === "github") {
// 			resolve(SetupUrl('https://github.com/gCookiez'));
// 			return;
// 		}

// 		if (rootProgram === "portfolio") {
// 			resolve(SetupUrl('/main-portfolio/portfolio.pdf'));
// 			return;
// 		}

// 		if (rootProgram === "help") {
// 			resolve(AppendToHistory(CommandList()));
// 			return;
// 		}

// 		if (rootProgram === 'clear') {
// 			resolve(false);
// 			return;
// 		}

// 		if (rootProgram === 'profile') {

// 			const result = changeIdent(text.slice(1));
// 			if (!result[0]) {
// 				resolve(AppendToHistory(`Error: ${result[1]}`, 'error'));
// 				return;
// 			}

// 			resolve(result)
// 			return;

// 		}

// 		if (rootProgram === 'weather') {
// 			weatherReport().then(report => {
// 				resolve(report);
// 			}).catch(error => {
// 				reject(AppendToHistory(`Error: ${error}`, 'error'));
// 			});
// 			return;
// 		}

// 		if (rootProgram === 'datetime') {
// 			resolve(AppendToHistory(getDateTime()));
// 			return;
// 		}

// 		if (rootProgram === "version") {
// 			resolve(AppendToHistory(Version()));
// 			return;
// 		}

// 		let error = Boolean(text[0].trim()) ? rootProgram.length <= 20 ? text[0] : `${rootProgram.substring(0, 20)}...` : 'EMPTY_STRING';

// 		reject(AppendToHistory(`Error: ${error} is not a known command`, 'error'));

// 	})
// }



export const initCommand = async (text: string): Promise<any> => {

	return new Promise((resolve, reject) => {
		const parsed: string[] = textparser(text);
		// const response: any = commandParser(parsed);
		commandParser_Proto(parsed).then((item) => { resolve(item) })
			.catch(error => reject(error));
	})


	// return response;
}


export * from './'