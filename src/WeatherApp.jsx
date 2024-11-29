import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react";
import ErrorMsg from "./Error";

export default function WeatherApp(){
    let [result,setResult]=useState({
        city:"London",
        coord: { lat: 51.5074, lon: -0.1278 },
        temp: 15,
        temp_max: 18,
        temp_min: 12,
        feels_like: 14,
        humidity: 80,
        weather: "clear sky",
    });
    let [error,setError]=useState(false);

    let updateInfo=(info)=>{
        setResult(info);
    }

    let updateErrMsg=(bool)=>{
        setError(bool);
    }

    return(
        <>
        {error && <ErrorMsg/>}
        <SearchBox updateInfo={updateInfo} updateErrMsg={updateErrMsg}/>
        <h2>Weather Information With Map</h2>
        <InfoBox result={result}/>
        </>
    )
}