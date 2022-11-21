import React from "react";
// import cloud from "../icons/cloud.png"
import {TEMPLATE_CITY} from "../helpers/helpers";
import {changeListCities} from "../app/redux";
import {useAppDispatch, useAppSelector} from "../app/hooks";

export function NowTab() {
    const dispatch = useAppDispatch();
    const {cityName, temperature, iconWeather, listCities} = useAppSelector(state => state.weatherApp);

    function addFavouriteCity() {
        if (cityName === TEMPLATE_CITY) return;
        if (listCities.some(task => cityName === task) === true) {
            alert('Этот город уже в избранном!');
        } else {
            dispatch(changeListCities([...listCities, cityName]));        }
    }

    return (
        <div className="info now">
            <p className="temperature">
                <span className="temperature--number">{temperature}</span>
                <span className="circle"></span>
            </p>
            <span className="cloud">
                <img src={iconWeather ? iconWeather : "../icons/cloud.png"} alt="icon" />
            </span>
            <p className="current-city--bottom">{cityName}</p>
            <span className="hearth" onClick={addFavouriteCity}></span>
        </div>
    )
}