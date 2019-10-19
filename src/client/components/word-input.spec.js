
import React from 'react';
import { shallow, mount } from 'enzyme';
import Enhanced, * as wordInputLogix from './word-input';
import configureMockStore from 'redux-mock-store';
import * as Redux from 'redux';
import { Provider } from 'react-redux'; 
import * as ReduxForm from 'redux-form';


describe('component word input', () => {
	describe('the UI View', () => {
		it('matches the snapshot', () => {
			const wrapper = shallow(<wordInputLogix.WordInput handleSubmit={jest.fn()}/>);

			expect(wrapper).toMatchSnapshot();
		});
	});

	describe('mapDispatchToProps', () => {
		const dispatch = jest.fn();
		let map;

		beforeEach(() => {
			map = wordInputLogix.mapDispatchToProps(dispatch);
		});

		it('has an onSubmit', () => {
			expect(map.onSubmit).toEqual(expect.any(Function));
		});

		it('onSubmit calls dispatch with lookup action', () => {
			map.onSubmit({word: 'someTestWord'});

			expect(dispatch).toHaveBeenCalledWith({
			    payload: {
			        data: false,
			        error: false,
			        inProgress: true,
			        word: 'someTestWord',
			    },
			    type: 'LOOKUP_START',
			});
		});
	});

	describe('enhanced component', () => {
		it('calls compose with connect and reduxForm on the ui component', () => {
			const mockStore = configureMockStore()({}); 
			Redux.compose = jest.fn((C) => (props => <div {...props} /> ));
			ReduxForm.reduxForm = jest.fn(() => 'maloo');

			const wrapper = mount(<Provider store={mockStore} ><Enhanced p="p"/></Provider>);
			//expect(ReactRedux.connect).toHaveBeenCalledWith('maloo');
			expect(Redux.compose).toHaveBeenCalledWith('paloo', 'maloo');
		});
	})
});
