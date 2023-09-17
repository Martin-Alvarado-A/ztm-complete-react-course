import { render, screen } from '@testing-library/react';
import Button, { BUTTON_TYPE_CLASSES } from '../button.component';

describe('button tests', () => {
  test('Should render base button when nothing is passed', () => {
    expect.assertions(1);

    render(<Button />);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveStyle('background-color: black;');
  });

  test('Should render google button when passed google button type', () => {
    expect.assertions(1);

    render(<Button buttonType={BUTTON_TYPE_CLASSES.google} />);

    const googleButtonElement = screen.getByRole('button');
    expect(googleButtonElement).toHaveStyle(
      'background-color: rgb(66, 133, 244);'
    );
  });

  test('Should render inverted button when passed inverted button type', () => {
    expect.assertions(1);

    render(<Button buttonType={BUTTON_TYPE_CLASSES.inverted} />);

    const invertedButtonElement = screen.getByRole('button');
    expect(invertedButtonElement).toHaveStyle('background-color: white;');
  });

  test('Should be disabled if isLoading is true', () => {
    expect.assertions(1);

    render(<Button isLoading={true} />);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeDisabled();
  });
});
