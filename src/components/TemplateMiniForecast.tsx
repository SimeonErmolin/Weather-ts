import React from "react";
import {IPropsTemplateMiniForecast} from "../helpers/models";

export function TemplateMiniForecast({date, degrees, feelsDegrees, time, weather, weatherImg}: IPropsTemplateMiniForecast) {
    return (
        <div className="forecast-wrapper-block">
            <p className="date">{date}</p>
            <p className="degrees">
                Temperature: <b className="temperature-info">{degrees}</b>
                <span className="circle-small"></span>
            </p>
            <p className="feels-degrees">
                Feels like: <b className="feels-info">{feelsDegrees}</b>
                <span className="circle-small"></span>
            </p>
            <p className="time">{time}</p>
            <p className="weather">{weather}</p>
            <span className="weather-img">
                <img src={weatherImg} alt={weatherImg}/>
            </span>
        </div>
    )
}