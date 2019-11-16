import rootReducer from './rootReducer'

it('initialize the state', function () {
    expect(rootReducer({}, {})).toEqual({
        balance: 0,
        bitcoin: {},
        items: [],
        itemsHasErrored: false,
        itemsIsLoading: false
    });
});
