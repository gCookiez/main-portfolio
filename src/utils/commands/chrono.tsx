export const getDateTime = () => {
	const dateTime = new Date();
	const formatted = `${dateTime.toString()}`;
	console.log(formatted)
	console.log(typeof formatted)
	return formatted;
} 

export * from "."