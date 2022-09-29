import { render } from '@testing-library/react';

import { Button } from '..';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button>{'Klikk meg'}</Button>);
    expect(baseElement).toBeTruthy();
  });
});
