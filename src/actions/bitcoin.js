import {coinDeskUri, FETCH_BITCOIN, FETCH_BITCOIN_ERROR} from "../constants";

export function fetchBitcoin() {

    return (dispatch) => {
        const helper = async () =>
            fetch(coinDeskUri)
                .then((response) => {
                    if (!response.ok) {
                        throw Error(response.statusText);
                    }
                    return response;
                })
                .then((response) => response.json())
                .then((items) => {
                    return dispatch({type: FETCH_BITCOIN, bitcoin: items})
                }) // ES6 property value shorthand for { items: items }
        .catch(() => dispatch({type: FETCH_BITCOIN_ERROR}));
        return helper();
    }
}
