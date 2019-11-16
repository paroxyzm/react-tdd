import balance from './balance'

it('balance reducer', function () {
    const action = {type: 'SET_BALANCE', balance: 10};
    expect(balance({}, action)).toEqual(action.balance);
});
