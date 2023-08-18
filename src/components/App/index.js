import React from "react";
import { Provider } from "react-redux";
import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from "redux";
import rootReducer from "../../redux/reducers";
import Weather from "../Weather";

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
    return (
        <Provider store={store}>
            <Weather />
        </Provider>
    );
}

export default App;