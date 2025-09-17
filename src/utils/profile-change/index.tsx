
import { AppendToHistory } from '../appendToHistory';
import { paramCheck } from '../paramsCheck'

export const changeIdent = (params: string[]) => {

    const options = ['user', 'env'];
    const checkParams : any[] = paramCheck(params, 2, options)  
    if (checkParams[0]) {
        const success = AppendToHistory(`${checkParams[1][0]} successfully changed`);
        checkParams.push(success);
    }
    return checkParams;
}



export * from './'