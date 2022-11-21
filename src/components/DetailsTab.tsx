import React from "react";
import {useAppSelector} from "../app/hooks";

export function DetailsTab() {
    const {cityName, temperature, feelsTemp, weather, sunrise, sunset} = useAppSelector(state => state.weatherApp)

    return (
        <div className="info details">
            <p className="current-city--top">{cityName}</p>
            <div className="info-weather">
                <p>
                    Temperature: <b className="temperature-info">{temperature}</b>
                    <span className="circle-small"></span>
                </p>
                <p>
                    Feels like: <b className="feels-info">{feelsTemp}</b>
                    <span className="circle-small"></span>
                </p>
                <p>
                    Weather: <b className="weather-info">{weather}</b>
                </p>
                <p>
                    Sunrise: <b className="sunrise-info">{sunrise}</b>
                </p>
                <p>
                    Sunset: <b className="sunset-info">{sunset}</b>
                </p>
            </div>
        </div>
    )
}