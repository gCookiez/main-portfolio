export const paramCheck = (params: string[], needed: number, options: string[]) => {
    if (params.filter(e => options.includes(e))!.length < 1) {
        return [false, `${params[0]} is an invalid option.`]
    }
    
    if (params.length < needed) {
        console.warn(params.length)
        console.warn(needed)
        console.warn('case 4')
        return [false, `Expected ${needed} params but got ${params.length} instead`];
    }

    if (params.find(e => e === " ")!.length >= 1) {
        console.warn('case 5')
        return [false, `found EMPTY_STRING on params. `];
    }

    return [true, params];

}


export * from './'