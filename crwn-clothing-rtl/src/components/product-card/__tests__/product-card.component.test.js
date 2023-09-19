import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/test/test.utils';
import ProductCard from '../product-card.component';

describe('Product card tests', () => {
  test('It should add the product item when the Product Card Button is clicked', async () => {
    const mockProduct = {
      id: 1,
      imageUrl: 'test',
      name: 'Item A',
      price: 10,
    };

    const { store } = renderWithProviders(
      <ProductCard product={mockProduct} />,
      {
        preloadedState: {
          cart: {
            cartItems: [],
          },
        },
      }
    );

    expect.assertions(1);
    const addToCartButtonEl = screen.getByText(/add to cart/i);
    await fireEvent.click(addToCartButtonEl);

    expect(store.getState().cart.cartItems.length).toBe(1);
  });
});
