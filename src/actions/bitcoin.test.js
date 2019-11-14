import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import fetchMock from 'fetch-mock';
import {coinDeskUri, FETCH_BITCOIN} from "../constants";
import {fetchBitcoin} from './bitcoin';

const createMockStore = configureMockStore([thunk]);
const mockStore = createMockStore({bitcoin: {}});
const mockResponse = {
    body: {
        bpi: {}
    }
};

fetchMock.get(coinDeskUri, mockResponse)
it('creates an async action to fetch the bitcoin value', function () {
    const expectedActions = [{bitcoin: mockResponse.body, type: FETCH_BITCOIN}];
    mockStore.dispatch(fetchBitcoin())
        .then(() => {
            const actions = mockStore.getActions();
            console.log(actions)
        })
});
