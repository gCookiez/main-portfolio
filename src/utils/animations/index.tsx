import { gsap } from "gsap/gsap-core"

export const TerminalOpen = (callback: Function) => {
    let timeline = gsap.timeline()
    timeline.fromTo('.terminal-style', { y: -3000, width: 0 }, { y: "revert", duration: 1.5 });
    timeline.fromTo('.terminal-style', { width: 0 }, { width: "800px", duration: 0.5, onComplete: () => { callback(true) } });
    timeline.to('.terminal-style', { onComplete: () => {
         document.querySelector('.terminal-style')!.removeAttribute('style');
    }});
}

export const TerminalAppear = (callback: Function) => {
    let timeline = gsap.timeline()
    timeline.fromTo('.input-sub', { opacity: 0 }, { opacity: 1, duration: 1.5, onComplete: () => { callback(true) } });
}

export const HistoryAppear = (callback: Function) => {
    let timeline = gsap.timeline()
    timeline.fromTo('.history-area', { opacity: 0 }, { opacity: 1, duration: 1.5, onComplete: () => { callback(true) } });
}

export const ErrorShake = () : any => {
    let timeline = gsap.timeline();


    function call() {
        timeline.fromTo('.terminal-style',
            {
                onInterrupt: () => { timeline.revert() },
                borderColor: "red",
                x: "-50px",
                duration: 0.1,
                repeat: 1,
            },
            {
                onInterrupt: () => { timeline.revert() },
                borderColor: "red",
                x: "50px",
                duration: 0.1,
                repeat: 1
            }
        ).to('.terminal-style',
            {
                onInterrupt: () => { timeline.revert() },
                x: 0,
                duration: 0.1
            }
        ).to('.terminal-style',
            {
                onInterrupt: () => { timeline.revert() },
                borderColor: "#09d602",
                duration: 0.5,
                onComplete: () => {
                    timeline.clear(true)
                    timeline.kill()
                    timeline.invalidate()
                    document.querySelector('.terminal-style')!.removeAttribute('style');
                }
            }
        )
    }


    return call;
}

export * from './'