import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentWeather, searchHistory, displayContent } from "../../redux/useSelectors";
import { getWeather }from "./helper";

function Weather() {
    const dispatch = useDispatch();
    const weather = useSelector(currentWeather);
    const weatherHistory = useSelector(searchHistory);
    const { showWeather, errorMessage } = useSelector(displayContent);
    const [cityInputValue, setCityInputValue] = useState('');

    const searchCity = (event) => {
        if (event.key === 'Enter') {
            getWeather(dispatch, cityInputValue);
            setCityInputValue('')
        }
    }

    const searchPresetCity = (event) => {
        getWeather(dispatch, event.target.innerText);
    }

    const onChangeCityInput = (event) => {
        setCityInputValue(event.target.value);
    }

    let listOfWeatherHistory = weatherHistory.slice(0, weatherHistory.length - 1);

    if (weatherHistory.length >= 6) {
        listOfWeatherHistory = listOfWeatherHistory.slice(listOfWeatherHistory.length - 5);
    }

    return (
        <div className='container'>

            <div className='search container__search'>
                <input
                    className='search__input'
                    placeholder='Enter your city'
                    onChange={onChangeCityInput}
                    value={cityInputValue}
                    onKeyDown={searchCity}
                />

                <div className='suggestion search__suggestions'>
                    <div className='suggestion__item' onClick={searchPresetCity}>Kyiv</div>
                    <div className='suggestion__item' onClick={searchPresetCity}>New York</div>
                    <div className='suggestion__item' onClick={searchPresetCity}>Rio de Janeiro</div>
                    <div className='suggestion__item' onClick={searchPresetCity}>London</div>
                    <div className='suggestion__item' onClick={searchPresetCity}>Barcelona</div>
                    <div className='suggestion__item' onClick={searchPresetCity}>Paris</div>
                </div>

                {showWeather && <div className='result search__result'>
                    <div className='result__city'>{weather.city}, {weather.country}</div>
                    <div className='result__temp'>{weather.temp}°</div>
                    <div className='result__general'>{weather.general}</div>
                    <div className='result__min-max-temp'>min {weather.temp_min}° / max {weather.temp_max}°</div>
                </div>}

                {errorMessage && <div className='search__error'>{errorMessage}</div>}
            </div>

            <div className='history container__history'>
                {listOfWeatherHistory.map((item, index) => {
                    return (
                        <div key={index} className='history__item'>
                            <div className='history__city'>{item.city}</div>
                            <div className='history__temp'>{item.temp}°</div>
                            <div className='history__min-max-temp'>&#8595;{item.temp_min}°   &#8593;{item.temp_max}°</div>
                        </div>
                    )
                })}
            </div>

        </div>
    );
}

export default Weather;