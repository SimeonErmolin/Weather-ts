import React from "react";
import {TABS} from "../helpers/helpers";
import {ISwitches} from "../helpers/models";

export function Switches({activeTab, onChangeActiveTab}: ISwitches) {
    function changeTab(tab: string) {
        onChangeActiveTab(tab);
    }

    return (
        <div className="switch">
            <button
                className={activeTab === TABS.NOW ? 'toggle active' : 'toggle'}
                onClick={() => changeTab(TABS.NOW)}>Now</button>
            <button
                className={activeTab === TABS.DETAILS ? 'toggle active' : 'toggle'}
                onClick={() => changeTab(TABS.DETAILS)}>Details</button>
            <button
                className={activeTab === TABS.FORECAST ? 'toggle active' : 'toggle'}
                onClick={() => changeTab(TABS.FORECAST)}>Forecast</button>
        </div>
    )
}