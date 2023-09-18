import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/test/test.utils';

import Navigation from '../navigation.component';

describe('Navigation Tests', () => {
  test('It should render a Sign in link if there is no currentUser', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: null,
        },
      },
    });

    expect.assertions(1);
    const singInLinkElement = screen.getByText(/sign in/i);
    expect(singInLinkElement).toBeInTheDocument();
  });

  test('It should render "Sign Out" link and not "Sign In" link if there is a currentUser', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {},
        },
      },
    });

    expect.assertions(2);
    const signoutLinkElement = screen.getByText(/sign out/i);
    expect(signoutLinkElement).toBeInTheDocument();

    const signinLinkElement = screen.queryByText(/sign in/i);
    expect(signinLinkElement).toBeNull();
  });
});
