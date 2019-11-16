import {FETCH_BITCOIN} from "../constants";

export default function bitcoin(state = {}, action) {
    switch (action.type) {
        case FETCH_BITCOIN:
            return action.bitcoin;
        default:
            return state;
    }
}
