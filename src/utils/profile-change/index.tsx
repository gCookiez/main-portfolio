import { paramCheck } from '../paramsCheck'

export const changeIdent = (params: string[]) => {
    const options = ['user', 'env'];
    const checkParams = paramCheck(params, 2, options)
    return checkParams;
}

export * from './'