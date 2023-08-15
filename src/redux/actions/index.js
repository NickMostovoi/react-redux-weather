import * as TYPES from "./actions.types";

export const setWeather = (weather) => {
    return {
        type: TYPES.SET_WEATHER,
        city: weather.name,
        country: weather.sys.country,
        temp: Math.round(weather.main.temp),
        temp_max: Math.round(weather.main.temp_max),
        temp_min: Math.round(weather.main.temp_min),
        general: weather.weather[0].main
    };
};

export const setSearchHistory = (weather) => {
    return {
        type: TYPES.SET_SEARCH_HISTORY,
        city: weather.name,
        temp: Math.round(weather.main.temp),
        temp_max: Math.round(weather.main.temp_max),
        temp_min: Math.round(weather.main.temp_min)
    };
}

export const setDisplayContent = (state) => {
    return {
        type: TYPES.SET_DISPLAY_CONTENT,
        showWeather: state.showWeather,
        errorMessage: state.errorMessage
    }
};