import React from 'react';
import { render } from '@testing-library/react';
import { BasicServerError } from './server-error.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicServerError />);
  const rendered = getByText('hello from ServerError');
  expect(rendered).toBeTruthy();
});
