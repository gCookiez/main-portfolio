export const paramCheck = (params: string[], needed: number, options: string[]) => {
    
    const paramIter = params.filter((i,e) => {
            if (options.includes(i) && e == 0) {
                return i;
            }

            return false;
    })


    if (paramIter!.length < 1 ) {
        return [false, `${params[0]} is an invalid option.`]
    }
    
    if (params.length < needed) {
        console.warn(params.length)
        console.warn(needed)
        console.warn('case 4')
        return [false, `Expected ${needed} params but got ${params.length} instead`];
    }

    // if (params.find(e => e === " ") == undefined) {
    //     console.warn('case 5')
    //     return [false, `found EMPTY_STRING on params. `];
    // }

    return [true, params];

}


export * from './'