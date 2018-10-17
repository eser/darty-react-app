import * as React from 'react';

import * as Enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

import HomeContainer from '../homeContainer';

Enzyme.configure({ adapter: new ReactSixteenAdapter() });

describe('LayoutContainer', () => {
    it('should exist', () => {
        expect(HomeContainer).toBeDefined();
    });

    it('should render', () => {
        const wrapper = Enzyme.shallow(<HomeContainer />);
        expect(wrapper.find('h1').contains('Home')).toEqual(true);
    });
});
