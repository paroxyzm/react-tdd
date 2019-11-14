import {coinDeskUri, FETCH_BITCOIN} from "../constants";

export function fetchBitcoin() {
    return (dispatch) => {
        const helper = async () => {
            fetch(coinDeskUri)
                .then((response) => {
                    if (!response.ok) {
                        throw Error(response.statusText);
                    }
                    return response;
                })
                .then((response) => response.json())
                .then((items) => dispatch(
                    {
                        type: FETCH_BITCOIN,
                        payload: items
                    }
                )) // ES6 property value shorthand for { items: items }
                   // .catch(() => dispatch(itemsHasErrored(true)));
        };
        return helper();
    }
}
