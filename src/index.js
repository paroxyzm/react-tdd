import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Deposit from "./components/Deposit";
import Loot from "./components/Loot";
const store = configureStore(); // You can also pass in an initialState here
render(
    <Provider store={store}>
        <Deposit/>
        <Loot/>
    </Provider>,
    document.getElementById('root')
);
