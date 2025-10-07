export const fetchContent = async (props: any): Promise<any> =>  {
    return new Promise((resolve, reject) => {
        fetch(props.url, props.options).then((data) => {
            resolve(data)
        }).catch((error) => {
            reject(error);
        })

    })
}


export * from "./"