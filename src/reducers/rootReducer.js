import {combineReducers} from 'redux';
import {items, itemsHasErrored, itemsIsLoading} from './items';
import bitcoin from "./bitcoin";
import balance from "./balance";

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading,
    bitcoin,
    balance
});
