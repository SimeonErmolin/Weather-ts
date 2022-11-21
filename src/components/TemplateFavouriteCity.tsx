import React from "react";
import {changeListCities} from "../app/redux";
import {getCityData, getForecastData} from "../helpers/network";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {IPropsTemplateFavCity} from "../helpers/models";

export function TemplateFavouriteCity({city, number}: IPropsTemplateFavCity) {
    const listCities = useAppSelector(state => state.weatherApp.listCities);
    const dispatch = useAppDispatch();

    function deleteCity() {
        dispatch((changeListCities([...listCities.slice(0, number), ...listCities.slice(number + 1)])))
    }

    return (
        <span className="favourite-city">
            <p className="city--name" onClick={() => {
                dispatch(getCityData(city))
                dispatch(getForecastData(city))
            }}>{city}</p>
            <button className="btnDelete" onClick={deleteCity}>×</button>
        </span>
    )
}