import React from "react";
import {TemplateMiniForecast} from "./TemplateMiniForecast";
import {useAppSelector} from "../app/hooks";

export function ForecastTab() {
    const {cityName, listForecasts} = useAppSelector(state => state.weatherApp)

    const forecastList = listForecasts.map((item: any, index: number) => {
        return <TemplateMiniForecast key={index} {...item} />
    })

    return (
        <div className="info forecast">
            <p className="current-city--top">{cityName}</p>
            <div className="forecast-wrapper">
                {forecastList}
            </div>
        </div>
    )
}