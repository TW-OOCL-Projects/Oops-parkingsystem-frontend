import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import reducers from './reducers'
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom";
const store = createStore(reducers)
const rootEl = document.getElementById('root')

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    rootEl
)
