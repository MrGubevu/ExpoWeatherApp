interface TodaysWeather {
    type: string;
    currentTemperature: number;
    description: string;
    minimumTemperature: number;
    maximumTemperature: number;
  }

  interface WeatherApiResponse {
    ok: boolean;
    result: unknown;
    error: unknown;
  }

  interface WeatherForecastData {
    weather: any;
    main: {
      temp: any;
      temperature: number
    }
    dt: number;
    type: string;
    temperature: number;
    day: string;
    description: string;
    item?: {
      main: {
        temp: number;
      }
    };
  }

export type {
    TodaysWeather,
    WeatherApiResponse,
    WeatherForecastData
}