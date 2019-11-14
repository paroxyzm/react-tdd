import {FETCH_BITCOIN} from "../constants";

export function bitcoinPrice(state = {}, action) {
    switch (action.type) {
        case FETCH_BITCOIN:
            return action.payload.bpi;
        default:
            return state;
    }
}
