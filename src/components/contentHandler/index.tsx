import type { ReactNode } from "react";
import './index.css'
export const SpringContent = (props: any): ReactNode => {
    const { children } = props;
    return (
        <div className={'springContent'}>
            {children}
        </div>
    )
}
export const SpringHeader = (props: any): ReactNode => {
    const {children} = props;
    return (
        <div className={'springHeader'}>
            <div className="springHeaderTitle">
                {children}
            </div>
        </div>
    )
}

export * from "./"