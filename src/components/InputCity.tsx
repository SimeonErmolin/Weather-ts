import React, {useState} from "react";
import {getCityData, getForecastData} from "../helpers/network";
import {useAppDispatch} from "../app/hooks";

export function InputCity() {
    const dispatch = useAppDispatch();
    const [currentCity, setCurrentCity] = useState('');

    function onSubmitValue(e: any) {
        e.preventDefault();

        if (currentCity === '') return;

        dispatch(getCityData(currentCity))
        dispatch(getForecastData(currentCity))

        setCurrentCity('')
    }

    return (
        <form className="input" onSubmit={onSubmitValue}>
            <input type="text" placeholder="Enter the name of the city" className="field" value={currentCity} onChange={(e) => setCurrentCity(e.target.value)} />
            <input type="submit" className="btn" value="🔍" />
        </form>
    )
}