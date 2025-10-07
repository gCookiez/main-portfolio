import { fetchContent } from '../api';
import { SetupUrl } from '../commands/helpCommand';
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

        const data = fetchContent(props).then((data) => data.json()).then(result => result)
                                        .catch(error => {
                                            reject(error);
                                        });
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
    const source = SetupUrl('https://www.weatherapi.com');
    return (
        <div>
            <div>&nbsp;</div>
            <div> Weather data provided by {source}</div>
            <div>&nbsp;</div>
            <div><img src={data.imgUrl} style={{width:'18px', aspectRatio:'1', verticalAlign:'sub'}}/> {data.condition}</div>
            <div>Location: {data.location} (Only accurate based on ISP location)</div>
            <div>Time taken: {data.time}</div>
            <div>&nbsp;</div>
        </div>
    )

}

export * from './'