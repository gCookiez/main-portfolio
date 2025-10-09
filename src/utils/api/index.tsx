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


export const asciiImage = async (link: any) : Promise<string> => {
    return new Promise((resolve, reject) => {
        //find api for making ascii art
        // maybe create a lambda function to get list of uma horse img and convert them to ascii
    })
}


export * from "./"