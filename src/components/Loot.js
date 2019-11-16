import React from 'react';
import {fetchBitcoin} from "../actions/bitcoin";
import {connect} from "react-redux";

export class Loot extends React.Component {
    render() {
        const bitcoinBalance = this.calculateBitcoinBalance(this.props.balance, this.props.bitcoin);
        return (
            <div>
                <span id={`balance`}>{bitcoinBalance}</span>
            </div>
        );
    }

    componentDidMount = () => {
        this.props.fetchBitcoin();
    };

    calculateBitcoinBalance() {
        return '0.01';
    }
}

export default connect(
    state => ({balance: state.balance}),
    {fetchBitcoin: fetchBitcoin})(Loot);