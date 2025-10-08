export const fetchContent = async (props: any): Promise<any> =>  {
    return new Promise((resolve, reject) => {
        fetch(props.url, props.options).then((data) => {
            if(!data.ok) {
                return data.json().then(errordata => {
                    reject(`${data.status} - ${errordata.error.message}`)
                });
            }
            resolve(data)
        }).catch((error) => {
            // console.log(error.message);
            reject(error);
        })

    })
}


export * from "./"