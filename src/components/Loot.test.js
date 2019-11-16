import {mount, shallow} from 'enzyme';
import React from 'react';
import {Loot} from './Loot';

describe('Loot', function () {
    it('should render properly', function () {
        const props = {};
        const loot = shallow(<Loot {...props}/>, {disableLifecycleMethods: true});
        expect(loot).toMatchSnapshot();
    });
    describe('mounting', function () {
        it('should fetch current bitcoin price', function () {
            const mockFetchBitcoin = jest.fn();
            const props = {fetchBitcoin: mockFetchBitcoin};
            mount(<Loot {...props}/>);
            expect(mockFetchBitcoin).toHaveBeenCalled();
        });
    });
    describe('displaying the bitcoin value', function () {
        it('should properly display current balance as bitcoins', function () {
            const props = {balance: 10, bitcoin: {bpi: {USD: {rate: '1,000'}}}};
            const loot = shallow(<Loot {...props}/>, {disableLifecycleMethods: true});
            expect(loot.find('#balance').text()).toBe('0.01')
        });
    });
});
