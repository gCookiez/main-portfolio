import { fetchContent } from '../api';
export const weatherReport = async () : Promise <any> =>  {

    return new Promise(async (response, reject) => {
        const url = import.meta.env.VITE_WEATHER_URL;
        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        const options = {
            method: "GET",
            headers: headers,
            redirect: 'follow'
        }

        const props = {
            url: url,
            options: options
        }

        console.log(import.meta.env.VITE_WEATHER_API)

        const data = fetchContent(props).then((data) => data.json()).then(result => result);
        const transformedData = transformData(await data)
        response(await transformedData);


    })

}

export const transformData = (json: any): any => {
    console.log("from transformData: ", json);
    const condition = json.current!.condition!.text;
    const location = `${json.location.name}, ${json.location.country}`;
    const time = json.location.localtime;

    const dataExtracted = {
        condition: condition,
        location: location, 
        imgUrl: json.current!.condition!.icon,
        time: time
    }

    const layout = LayoutData(dataExtracted);

    return layout;

} 

export const LayoutData = (data: any): any => {
    return (
        <div>
            <div>&nbsp;</div>
            <div><img src={data.imgUrl} style={{width:'16px', aspectRatio:'1'}}/> {data.condition}</div>
            <div>Location: {data.location}</div>
            <div>Time: {data.time}</div>
            <div>&nbsp;</div>
        </div>
    )

}

export * from './'