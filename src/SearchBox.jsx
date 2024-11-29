import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';

export default function SearchBox({updateInfo,updateErrMsg}){
    let [city,setCity]=useState("");
    let weatherAPI="https://api.openweathermap.org/data/2.5/weather";
    let API_URL="http://api.openweathermap.org/data/2.5/weather";
    let API_KEY="c46f2d67e6676b630d2dd3ab7e41fd75";

    let getWeather=async()=>{
        try{
            let info = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonInfo=await info.json();
            // console.log(jsonInfo);
            let result={
                city:city,
                coord:jsonInfo.coord,
                temp: jsonInfo.main.temp,
                temp_max:jsonInfo.main.temp_max,
                temp_min:jsonInfo.main.temp_min,
                feels_like:jsonInfo.main.feels_like,
                humidity:jsonInfo.main.humidity,
                weather:jsonInfo.weather[0].description
            }
            console.log(result);
            return result;
        }catch(err){
            throw err;
        }
    }

    let hendleChange=(ev)=>{
        setCity(ev.target.value);
    }
    let handleSubmit=async(ev)=>{
        try{
            ev.preventDefault();
            console.log(city);
            let result = await getWeather();
            updateInfo(result);
            setCity("");
            updateErrMsg(false);
        }catch(err){
            updateErrMsg(true);
        }
    }
    return(
        <>
        <div className='searchBox'>
            <h2>Search For The Weather </h2>
            <form onSubmit={handleSubmit} action="##">
                <TextField id="city" onChange={hendleChange} label="City Name" variant="outlined" value={city} required/>
                <br /><br />
                <Button type='submit' variant="contained">Search</Button>
            </form>
        </div>
        </>
    )
}