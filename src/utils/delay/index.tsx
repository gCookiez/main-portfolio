import { gsap } from 'gsap'
import { useState, useEffect} from 'react';
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

type DelayProps = {
    children: React.ReactNode;
    toggle: Boolean;
}

export const Delayed = ({ children, toggle = false}: DelayProps) => {
    const [isShown, setisShown] = useState(false);
    useEffect(() => {
        if (toggle)
            setisShown(true);
    }, [toggle])

    return isShown ? children : null;
}

export const PreAnimation = (props: any) => {
    const {children, Parent, animation, toggle} = props;
    const [display, toggleDisplay] = useState(false)
    const {properties} = Parent;

    useGSAP(() => {
        animation((bool: any) => {
            if (!toggle) {
                toggleDisplay(bool);
            }
            
        })
    })

    return (
        <>
            <Parent props={properties}>
                <Delayed toggle={toggle ? toggle: display}>
                    {children}
                </Delayed>
            </Parent>
        </>
    )

}

export * from '.'