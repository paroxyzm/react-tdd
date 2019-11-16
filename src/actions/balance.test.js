import {SET_BALANCE} from "../constants";
import {setBalance} from "./balance";

it('creates an async action to fetch the bitcoin value', function () {
    const action = {type: SET_BALANCE, balance: 10};
    expect(setBalance(10)).toEqual(action)
});
