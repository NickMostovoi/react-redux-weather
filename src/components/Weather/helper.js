import { setDisplayContent, setSearchHistory, setWeather } from "../../redux/actions";

const api = {
    key: 'c7616da4b68205c2f3ae73df2c31d177',
    base: 'https://api.openweathermap.org/data/2.5/'
};

export const getWeather = (dispatch, cityInputValue) => {
    const request = `${api.base}weather?q=${cityInputValue}&units=metric&appid=${api.key}`;

    const xhr = new XMLHttpRequest();
    xhr.open("GET", request, false);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(JSON.parse(xhr.responseText))

            const result = JSON.parse(xhr.responseText);

            dispatch(setWeather(result))
            dispatch(setSearchHistory(result))
            dispatch(setDisplayContent({showWeather: true, errorMessage: ''}))
        } else {
            console.log('error');
            dispatch(setDisplayContent({showWeather: false, errorMessage: 'City not found'}))
        }
    };
    xhr.send();
};