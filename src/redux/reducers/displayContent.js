import { SET_DISPLAY_CONTENT } from "../actions/actions.types";

const initialState = {
    showWeather: false,
    errorMessage: '',
};

const displayContent = (state = initialState, action) => {
    switch (action.type) {
        case SET_DISPLAY_CONTENT:
            return {
                ...state,
                showWeather: action.showWeather,
                errorMessage: action.errorMessage
            };

        default:
            return state;
    }
};

export default displayContent;