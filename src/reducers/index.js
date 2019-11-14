import {combineReducers} from 'redux';
import {items, itemsHasErrored, itemsIsLoading} from './items';
import {bitcoinPrice} from "./bitcoin";

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading,
    bitcoinPrice,
});
