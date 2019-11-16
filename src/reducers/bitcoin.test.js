import bitcoin from './bitcoin'

it('bitcoin reducer', function () {
    const action = {type: 'FETCH_BITCOIN', bitcoin: {bpi: 'some text'}};
    expect(bitcoin({}, action)).toEqual(action.bitcoin);
});
