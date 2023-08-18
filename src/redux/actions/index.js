import * as TYPES from "./actions.types";
import axios from "axios";

const api = {
    key: 'c7616da4b68205c2f3ae73df2c31d177',
    base: 'https://api.openweathermap.org/data/2.5/'
};

export const getWeather = (city) => {
    return function(dispatch) {
        const request = `${api.base}weather?q=${city}&units=metric&appid=${api.key}`;

        axios.get(request)
            .then(response => {
                const weather = response.data;

                console.log(weather);

                dispatch(setWeather(weather));
                dispatch(setSearchHistory(weather));
                dispatch(setDisplayContent({showWeather: true, errorMessage: ''}));
            })
            .catch(error => {
                console.log(error);
                dispatch(setDisplayContent({showWeather: false, errorMessage: 'City not found'}));
            });
    };
};

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
};

export const setDisplayContent = (state) => {
    return {
        type: TYPES.SET_DISPLAY_CONTENT,
        showWeather: state.showWeather,
        errorMessage: state.errorMessage
    };
};