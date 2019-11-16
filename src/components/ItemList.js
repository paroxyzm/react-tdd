import React, {Component} from 'react';
import {connect} from 'react-redux';
import {itemsFetchData} from '../actions/items';
import {fetchBitcoin} from "../actions/bitcoin";

class ItemList extends Component {
    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }
        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }
        return (
            <>
                <ul>
                    {this.props.items.map((item) => (
                        <li key={item.id}>
                            {item.label}
                        </li>
                    ))}
                </ul>
                <div>
                    <button onClick={() => this.props.fetchBitcoin()}>Another fetch - async</button>
                </div>
                <div>
                    {JSON.stringify(this.props.bitcoinPrice)}
                </div>
            </>
        );
    }

    componentDidMount() {
        this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading,
        bitcoinPrice: state.bitcoinPrice,
    };
};
const mapDispatchToProps = (dispatch) => {
        return {
            fetchData: (url) => dispatch(itemsFetchData(url)),
            fetchBitcoin: () => dispatch(fetchBitcoin())
        };
    }
;
export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
