import './index.css';
export const Container = (props: any): any => {
    const {children} = props;

    return (
        <div className="site-container">
            {children}
        </div>
    )


} 

export * from './'