import React from 'react';
import { shallow, render } from '@testing-library/react';

import Home from '../index';

describe('Layout', () => {
    it('should exist', () => {
        expect(Home).toBeDefined();
    });

    it('should render', () => {
        shallow(<Home />);
    });

    it('should be properly rendered', () => {
        const wrapper = render(<Home />);

        expect(wrapper.find('h1').contains('Darty React App')).toEqual(true);
    });
});
