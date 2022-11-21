import React from "react";
import {TemplateFavouriteCity} from "./TemplateFavouriteCity";
import {useAppSelector} from "../app/hooks";

export function AddedLocations() {
    const listCities = useAppSelector(state => state.weatherApp.listCities);

    const locationsList = listCities.map((item, index) => {
        return <TemplateFavouriteCity
            key={item.toString()}
            number={index} city={item}
        />
    })

    return (
        <div className="locations">
            <p className="title-locations">Added Locations:</p>
            <div className="cities">
                {locationsList}
            </div>
        </div>
    )
}