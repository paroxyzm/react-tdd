import React from 'react';
import {connect} from "react-redux";
import {addMoney} from '../actions/balance'

export class Deposit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            balance: 0
        }
    }

    render() {
        return (
            <>
                <div>
                    <input type="text" onChange={this.handleLocalChange} value={this.state.balance}/>
                    <button onClick={this.handleDeposit}>Deposit</button>
                </div>
                <div>Local Balance: {this.state.balance}</div>
                <div>Balance: {this.props.balance}</div>
            </>
        );
    }

    handleDeposit = () => {
        const balance = this.state.balance;
        this.setState(() => {
            return {
                balance: 0
            };
        });
        this.props.addMoney(balance);
    };

    handleLocalChange = (e) => {
        const value = e.target.value;
        this.setState(() => {
            return {
                balance: value
            };
        });
    };
}

export default connect(state => ({balance: state.balance}), {addMoney: addMoney})(Deposit);