import {SET_BALANCE} from "../constants";

export default function balance(state = 0, action) {
    switch (action.type) {
        case SET_BALANCE:
            return action.balance;
        default:
            return state;
    }
}
