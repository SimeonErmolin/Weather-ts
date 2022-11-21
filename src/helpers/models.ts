export interface IState {
    cityName: string
    temperature: number
    iconWeather: string
    feelsTemp: number
    weather: string
    sunrise: string
    sunset: string
    listForecasts: object[],
    listCities: string[]
}

export interface IAction {
    payload: any
}

export interface IPropsTemplateFavCity {
    city: string
    number: number
}

export interface IPropsTemplateMiniForecast {
    date: string
    degrees: number
    feelsDegrees: number
    time: string
    weather: string
    weatherImg: string
}

export interface ISwitches {
    activeTab: string
    onChangeActiveTab: any
}