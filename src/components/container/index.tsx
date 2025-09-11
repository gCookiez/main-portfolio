import type { ReactNode } from "react";
import './index.css'

export const SpringContainer = (props: any): ReactNode => {
    const {children} = props;
    
    return (
        <div className={'springContainer'}>
            <div className={'springInnerContainer'}> 
                {children}
            </div>
        </div>
    )
}

export * from "./"