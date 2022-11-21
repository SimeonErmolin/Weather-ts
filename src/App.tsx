import React, {useState} from "react";
import {InputCity} from "./components/InputCity";
import {NowTab} from "./components/NowTab"
import {DetailsTab} from "./components/DetailsTab";
import {ForecastTab} from "./components/ForecastTab";
import {Switches} from "./components/Switches";
import {AddedLocations} from "./components/AddedLocations";
import {TABS} from "./helpers/helpers"

export function App() {
  const [activeTab, setActiveTab] = useState('now');

  return (
      <div className="tabs">
        <div className="tab">
          <InputCity />
          <div className="pages">
            {activeTab === TABS.NOW ? <NowTab /> : null}
            {activeTab === TABS.DETAILS ? <DetailsTab /> : null}
            {activeTab === TABS.FORECAST ? <ForecastTab /> : null}
            <Switches
                activeTab={activeTab}
                onChangeActiveTab={setActiveTab} />
            <AddedLocations />
          </div>
        </div>
      </div>
  )
}