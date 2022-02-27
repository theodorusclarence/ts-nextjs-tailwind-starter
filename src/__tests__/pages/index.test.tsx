import { render } from '@testing-library/react';

import HomePage from '@/pages';

/** Mock Seo's useRouter */
jest.mock('next/router', () => ({
  useRouter() {
    return {
      asPath: '/',
    };
  },
}));

describe('Index Page', () => {
  it('renders index page', async () => {
    const { container } = render(<HomePage />);

    expect(container.firstChild?.hasChildNodes()).toBeTruthy();
  });
});
