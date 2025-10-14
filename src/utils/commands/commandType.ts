import { AppendToHistory } from '../appendToHistory';
import { changeIdent } from '../profile-change/index.tsx';
import { CommandList, SetupUrl, Version } from './helpCommand.tsx'
import { getDateTime } from './chrono.tsx'
import { weatherReport } from '../weather/index.tsx';
import { fetchRandomImage, StackAscii } from '../ascii/imageList.ts';

export interface rootPrograms {
    programs : rootProgram[];
}

export interface rootProgram {
    name: string;
    desc: string;
    executions: executions;
}

export interface executions {
    textBased?: null | string;
    call?: null | Function;
}

export const roots: rootPrograms = {
    programs: [
        {
            name: 'linkedin',
            desc: 'Displays user profile from linkedin',
            executions: {
                textBased: null,
                call: () => {
                    return SetupUrl('Link to LinkedIn', 'https://www.linkedin.com/in/marcus-luis-s-gajo-29462b212/')
                }
            }
        },
        {
            name: 'github',
            desc: 'Displays user profile from github',
            executions: {
                textBased: null,
                call: () => {
                    return SetupUrl('Link to GitHub', 'https://github.com/gCookiez')
                }
            }
        },
        {
            name: 'indeed',
            desc: 'Displays user profile from Indeed (Currently Unavailable)',
            executions: {
                textBased: "Not Unavailable",
                call: null
            }
        },
        {
            name: 'portfolio',
            desc: "Displays link for developer's resume",
            executions: {
                textBased: null,
                call: () => {
                    return SetupUrl('Portfolio.pdf', '/main-portfolio/portfolio.pdf')
                }
            }
        },
        {
            name: 'help',
            desc: "Displays this exact page",
            executions: {
                textBased: null,
                call: () => {
                    return AppendToHistory(CommandList())
                }
            }
        },
        {
            name: 'clear',
            desc: "Clears screen",
            executions: {
                textBased: null,
                call: () => {
                    return false
                }
            }
        },
        {
            name: 'profile',
            desc: "?? <[user | env]> <name> -- Changes name or env shown post execution",
            executions: {
                textBased: null,
                call: (param: any) => {
                    const result = changeIdent(param);
                    if (!result[0]) {
                        return AppendToHistory(`Error: ${result[1]}`, 'error');
                    }
                    return (result);
                }
            }
        },
        {
            name: 'weather',
            desc: "Displays current weather (only accurate to client's ISP source)",
            executions: {
                textBased: null,
                call: async () => {
                    console.log('this is async');
                    let caughterror: any;
                    const result = weatherReport().then(report => report)
                        .catch(error => caughterror = AppendToHistory(`Error: ${error}`, 'error'))
                    
                    if (await result != false) {
                        return result;
                    }
                    return caughterror;
                    // needs fixing
                }
            }
        },
        {
            name: 'datetime',
            desc: "Displays current datetime from JavaScript Runtime",
            executions: {
                textBased: null,
                call: () => {
                    return AppendToHistory(getDateTime())
                }
            }
        },
        {
            name: 'version',
            desc: "Displays version number",
            executions: {
                textBased: null,
                call: () => {
                    return AppendToHistory(Version())
                }
            }
        },
        {
            name: 'ascii',
            desc: 'Displays ascii art (experimental)',
            executions: {
                textBased: 'Coming soon',
                call: async () => {
                    let caughterror: any;
                    const result = fetchRandomImage().then(art => {
                        return StackAscii(art)

                    }).catch(error => caughterror = AppendToHistory(`Error: ${error}`, 'error'))
                    
                    if (await result != false) {
                        return result;
                    }

                    return caughterror;
                    // console.log(uma)
                    // return AppendToHistory(StackAscii(uma))
                    // return SetupUrl(fetchRandomImage())
                }
            }
        }

    ]
}

export * from './'