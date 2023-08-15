import { SET_SEARCH_HISTORY } from "../actions/actions.types";

const initialState = [];

const searchHistory = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_HISTORY:
            return [...state,
                {
                    city: action.city,
                    temp: action.temp,
                    temp_max: action.temp_max,
                    temp_min: action.temp_min
                }
            ];

        default:
            return state;
    }
};

export default searchHistory;