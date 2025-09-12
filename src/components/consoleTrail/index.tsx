import './index.css'
export const ConsoleTrail = (props: any) => {
    const {children} = props;
    return (
        <div className="history-area"> 
            {children};
        </div>
    )
}


export * from './'