export interface WeatherState {
    data?: WeatherInfo;
    error?: string;
}

export interface WeatherInfo {
    description: string;
    icon: string;
    temperature: number;
    windSpeed: number;
    windDirection: string;
    pressure: number;
    humidity: number;
    probabilityOfRain: number;
}

export interface WeatherForecastResponse {
    list: WeatherForecastItemResponse[];
}

export interface WeatherForecastItemResponse {
    main: WeatherForecastItemMainResponse;
    weather: WeatherForecastItemWeatherResponse[];
    wind: WeatherForecastItemWindResponse;
    pop: number;
}

export interface WeatherForecastItemMainResponse {
    temp: number;
    pressure: number;
    humidity: number;
}

export interface WeatherForecastItemWeatherResponse {
    description: string;
    icon: string;
}

export interface WeatherForecastItemWindResponse {
    speed: number;
    deg: number;
}
