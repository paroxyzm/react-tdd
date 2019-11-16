import {MONEY_ADD, SET_BALANCE} from "../constants";

export function setBalance(amount) {
    return {
        type: SET_BALANCE,
        balance: amount
    }
}
export function addMoney(amount) {
    return {
        type: MONEY_ADD,
        balance: amount
    }
}
