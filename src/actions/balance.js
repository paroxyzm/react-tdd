import {SET_BALANCE} from "../constants";

export function setBalance(amount) {
    return {
        type: SET_BALANCE,
        balance: amount
    }
}