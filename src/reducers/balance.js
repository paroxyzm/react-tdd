import {MONEY_ADD, SET_BALANCE} from "../constants";

export default function balance(state = 0, action) {
    switch (action.type) {
        case SET_BALANCE:
            return action.balance;
        case MONEY_ADD:
            return parseInt(action.balance, 10) + state;
        default:
            return state;
    }
}
