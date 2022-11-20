
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Card } from '../Card/Card';

describe('Card', () => {
  let mockName = 'charmander';
  let mockURL = 'image url';
  let mockImgURL = 'image test url';

  const component = renderer.create(<Card
    name={mockName}
    url={mockURL}
    image={mockImgURL}
  />);

  it('Should render correctly', () => {
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
  
  it('should render the header with the correct name', () => {
    render(<Card
      name={mockName}
      url={mockURL}
      image={mockImgURL}
    />);

    const header: HTMLElement = screen.getByTestId('cardTitle', {});

    expect(header).toHaveTextContent(mockName);
  });

  it('should render a button with text More', () => {
    render(<Card
      name={mockName}
      url={mockURL}
      image={mockImgURL}
    />);

    const button: HTMLButtonElement = screen.getByRole('button', {});

    expect(button).toBeTruthy();
    expect(button).toHaveTextContent("More");
  });
});
