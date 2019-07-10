
import React from 'react';
import { shallow } from 'enzyme';
import { WordInput } from './word-input';

describe('component word input', () => {
	it('matches the snapshot', () => {
		const wrapper = shallow(<WordInput/>);

		expect(wrapper).toMatchSnapshot();
	});
});