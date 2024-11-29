import * as React from 'react';
import "./InfoBox.css";
import Map from './Map';

export default function InfoBox({result}) {
  let img1="https://png.pngtree.com/thumb_back/fw800/background/20241009/pngtree-lone-tree-battling-harsh-desert-climate-under-a-clear-sky-surviving-image_16335268.jpg";
  let img2="https://img.freepik.com/premium-photo/picturesque-scene-tranquil-lake-nestled-amidst-vibrant-forest-bright-sunny-day-serene-landscape-with-shimmering-lake-surrounded-by-lush-greenery_538213-85069.jpg";
  let img3="https://static.vecteezy.com/system/resources/previews/042/723/509/non_2x/field-of-flowers-with-mountain-background-photo.jpeg";
  let img4="https://s46675.pcdn.co/wp-content/uploads/2019/11/rainphotography24.jpg";
  return (
    <>
    <div className="weather-card">
      <div className="showMap">
        <Map coord={result.coord}/>
      </div>
      <div className="weather-details">
        <div className='imgBox'>
          <img src={result.humidity<=30 ? img1 : result.humidity<=60 ? img2 : result.humidity<=90 ? img3 :img4}/>
        </div>
        <div className="weather-item">
          <strong>City Name:</strong> {result.city}
        </div>
        <div className="weather-item">
          <strong>Temperature:</strong> {result.temp}°C
        </div>
        <div className="weather-item">
          <strong>Max Temp:</strong> {result.temp_max}°C
        </div>
        <div className="weather-item">
          <strong>Min Temp:</strong> {result.temp_min}°C
        </div>
        <div className="weather-item">
          <strong>Feels Like:</strong> {result.feels_like}°C
        </div>
        <div className="weather-item">
          <strong>Humidity:</strong> {result.humidity}%
        </div>
        <div className="weather-item">
          <strong>Condition:</strong> {result.weather}
        </div>
        <div className="weather-item">
          <strong>Coordinates:</strong> Lat: {result.coord.lat}, Lon: {result.coord.lon}
        </div>
      </div>
    </div>
    </>
  );
}
