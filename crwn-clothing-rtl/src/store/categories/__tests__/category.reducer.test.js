import {
  categoriesReducer,
  CATEGORIES_INITIAL_STATE,
} from '../category.reducer';
import {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from '../category.action';
import { executionAsyncId } from 'async_hooks';

describe('Category reducer Tests', () => {
  test('fetchCategoriesStart', () => {
    const expectedState = {
      ...CATEGORIES_INITIAL_STATE,
      isLoading: true,
    };

    expect.assertions(1);
    const reducerState = categoriesReducer(
      CATEGORIES_INITIAL_STATE,
      fetchCategoriesStart()
    );
    expect(reducerState).toEqual(expectedState);
  });

  test('fetchCategoriesSuccess', () => {
    const mockData = [
      {
        title: 'mens',
        imageUrl: 'test',
        items: [
          { id: 1, name: 'product 1' },
          { id: 2, name: 'product 2' },
        ],
      },
      {
        title: 'womens',
        imageUrl: 'test2',
        items: [
          { id: 3, name: 'product 3' },
          { id: 4, name: 'product 4' },
        ],
      },
    ];
    const expectedState = {
      ...CATEGORIES_INITIAL_STATE,
      categories: mockData,
    };

    expect.assertions(1);
    const reducerState = categoriesReducer(
      CATEGORIES_INITIAL_STATE,
      fetchCategoriesSuccess(mockData)
    );
    expect(reducerState).toEqual(expectedState);
  });

  test('fetchCategoriesFailed', () => {
    const mockError = Error('Error fetching categories');
    const expectedState = {
      ...CATEGORIES_INITIAL_STATE,
      error: mockError,
    };

    expect.assertions(1);
    const reducerState = categoriesReducer(
      CATEGORIES_INITIAL_STATE,
      fetchCategoriesFailed(mockError)
    );
    expect(reducerState).toEqual(expectedState);
  });
});
