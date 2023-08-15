import { SET_WEATHER } from "../actions/actions.types";

const initialState = {
    city: '',
    country: '',
    temp: '',
    temp_max: '',
    temp_min: '',
    general: ''
};

const currentWeather = (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER:
            return {
                city: action.city,
                country: action.country,
                temp: action.temp,
                temp_max: action.temp_max,
                temp_min: action.temp_min,
                general: action.general
            };

        default:
            return state;
    }
};

export default currentWeather;