import { combineReducers } from "redux";
import currentWeather from "./currentWeather";
import searchHistory from "./searchHistory";
import displayContent from "./displayContent";

const rootReducer = combineReducers({
  currentWeather,
  searchHistory,
  displayContent
});

export default rootReducer;