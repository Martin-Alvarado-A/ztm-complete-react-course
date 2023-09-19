import { fireEvent, screen } from '@testing-library/react';
import * as reactRedux from 'react-redux';
import { renderWithProviders } from '../../../utils/test/test.utils';

import Navigation from '../navigation.component';
import { signOutStart } from '../../../store/user/user.action';

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

  test('It should render the cart Dropdown if button is pressed', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {},
    });

    expect.assertions(1);
    const cartIconElement = screen.getByText(/0/i);
    fireEvent.click(cartIconElement);

    const emptycartElement = screen.getByText(/your cart is empty/i);
    expect(emptycartElement).toBeInTheDocument();
  });

  test('It should not render the Cart Dropdown if isCartOpen is false', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: false,
          cartItems: [],
        },
      },
    });

    expect.assertions(1);
    const dropdownTextElement = screen.queryByText(/your cart is empty/i);
    expect(dropdownTextElement).toBeNull();
  });

  test('It should render the Cart Dropdown if isCartOpen is true', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: true,
          cartItems: [],
        },
      },
    });

    expect.assertions(1);
    const dropdownTextElement = screen.getByText(/your cart is empty/i);
    expect(dropdownTextElement).toBeInTheDocument();
  });

  test('It should dispatch "signOutstart" action when clicking on the "Sign Out" link', async () => {
    const mockDispatch = jest.fn();
    jest.spyOn(reactRedux, 'useDispatch').mockReturnValue(mockDispatch);

    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {},
        },
      },
    });

    expect.assertions(3);

    const signOutLinkElement = screen.getByText(/sign out/i);
    expect(signOutLinkElement).toBeInTheDocument();

    await fireEvent.click(signOutLinkElement);
    expect(mockDispatch).toHaveBeenCalled();

    const signOutAction = signOutStart();
    expect(mockDispatch).toHaveBeenCalledWith(signOutAction);

    mockDispatch.mockClear();
  });
});
