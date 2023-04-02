import { render, screen } from '@testing-library/react';

import Button from './Button';

test('Button test', () => {
  render(<Button label='Button' onClick={() => {}} />);

  expect(screen.getByText('Button')).toHaveTextContent('Button');
});
