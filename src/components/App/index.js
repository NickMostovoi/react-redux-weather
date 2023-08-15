import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../redux/reducers";
import Weather from "../Weather";

const store = createStore(rootReducer);

function App() {
    return (
        <Provider store={store}>
            <Weather />
        </Provider>
    );
}

export default App;