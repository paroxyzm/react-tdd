import React from 'react';
import {fetchBitcoin} from "../actions/bitcoin";
import {connect} from "react-redux";

export class Loot extends React.Component {
    render() {
        const bitcoinBalance = this.calculateBitcoinBalance(this.props.balance, this.props.bitcoin);
        return (
            bitcoinBalance || bitcoinBalance === 0 ?
                <div>
                    <div>current bitcoin price: {this.props.bitcoin.bpi.USD.rate}</div>
                    <div id={`balance`}>Your balance in BTC: {bitcoinBalance}</div>
                </div>
                : <div>
                    Bitcoin service unavailable
                </div>
        );
    }

    componentDidMount = () => {
        this.props.fetchBitcoin();
    };

    calculateBitcoinBalance() {
        const balance = this.props.balance;
        const bitcoinPrice = this.props.bitcoin
            && this.props.bitcoin.bpi
            && this.props.bitcoin.bpi.USD
            && this.props.bitcoin.bpi.USD.rate_float;
        if (!bitcoinPrice) return null;
        return balance / bitcoinPrice;
    }
}

export default connect(
    state => ({balance: state.balance, bitcoin: state.bitcoin}),
    {fetchBitcoin: fetchBitcoin})(Loot);