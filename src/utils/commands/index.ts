import {AppendToHistory} from '../AppendToHistory'

export const textparser = (text: string): string => {
	const items = text.split('');
	return items; 
} 

export const commandparser = (text: string[]): any => {
		

}


export * from './'