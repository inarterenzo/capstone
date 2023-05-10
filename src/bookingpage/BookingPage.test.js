import React from 'react';
import { render } from '@testing-library/react';
import Main from './Main';

describe('BookingForm', () => {
  it('does render correctly', () => {
    const { getByText } = render(<Main />);
    expect(getByText('Book now')).toBeInTheDocument();
  });
});