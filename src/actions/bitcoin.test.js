import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import fetchMock from 'fetch-mock';
import {coinDeskUri, FETCH_BITCOIN, FETCH_BITCOIN_ERROR} from "../constants";
import {fetchBitcoin} from './bitcoin';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({bitcoin: {}});
fetchMock.config.overwriteRoutes = true;

describe('Bitcoin Action Creator', function () {
    it('creates an async action to fetch the bitcoin value', function () {
        const mockResponse = {body: {bpi: 'bitcoin price index'}};
        const expectedAction = {type: FETCH_BITCOIN, bitcoin: mockResponse.body};
        fetchMock.get(coinDeskUri, mockResponse);
        return store.dispatch(fetchBitcoin()).then((r) => {
            return expect(r).toEqual(expectedAction)
        });
    });
    it('should throw an error when unable to connect', function () {
        const expectedAction = {type: FETCH_BITCOIN_ERROR};
        fetchMock.get(coinDeskUri, {
            throws: new TypeError('failed to get'),
        });
        return store.dispatch(fetchBitcoin()).then((r) => {
            return expect(r).toEqual(expectedAction)
        });
    });
});
