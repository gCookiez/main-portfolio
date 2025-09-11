import type { ReactNode } from "react";
import './index.css'
export const SpringCard = (props: any): ReactNode => {
    const {children, title = 'card', link = undefined, onClick} = props;

    function attachLink() {
        return (
            <a href={link} className="link" onClick={() => {typeof onClick === 'function' ? onClick() : null}}> {title} </a>
        ) 
    }

    function checkChild() {
        if (!children) return (<></>);
        return (
            <div className="springCardContent">
                {children}
            </div>
        )
    }

    return (
        <div className={'springCard'}>
            <div className="springCardHeaderTitle">
                <h2> {link != undefined ? attachLink() : title} </h2>
            </div>
            {checkChild()}
        </div>
    )
}

export * from "."