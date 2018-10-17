import * as React from 'react';
import { shallow } from 'enzyme';

import LayoutContainer from '../layoutContainer';

describe('LayoutContainer', () => {
    it('should exist', () => {
        expect(LayoutContainer).toBeDefined();
    });

    it('should render', () => {
        const wrapper = shallow(<LayoutContainer />);
        expect(wrapper.find('.navbar-item').contains('Home')).toEqual(true);
    });
});
