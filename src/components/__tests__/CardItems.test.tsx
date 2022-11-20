import renderer from 'react-test-renderer';
import {
  render,
  screen,
  fireEvent
} from '@testing-library/react';
import { CardItems } from '../CardItems/CardItems';

const mockItems = [
  {
    name: 'bulbasaur',
    image: 'string',
    url: 'test'
  },
  {
    name: 'ivysaur',
    image: 'string',
    url: 'test'
  },
  {
    name: 'venusaur',
    image: 'string',
    url: 'test'
  },
  {
    name: 'charmander',
    image: 'string',
    url: 'test'
  },
  {
    name: 'charmeleon',
    image: 'string',
    url: 'test'
  },
  {
    name: 'charizard',
    image: 'string',
    url: 'test'
  },
];

describe('Carditem', () => {
  const component = renderer.create(<CardItems items={mockItems} />);

  it('Should render correctly', () => {
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should have the correct number of card items', () => {
    render(<CardItems items={mockItems} />);

    const items = screen.getAllByTestId('card', {});

    expect(items).toHaveLength(6);
  });

  it('updates search input on change', () => {
    render(<CardItems items={mockItems} />);

    const searchInput = screen.queryByPlaceholderText('Search Pokemon');

    fireEvent.change(searchInput as HTMLInputElement, {target: {value: 'test'}});

    expect((searchInput as HTMLInputElement).value).toBe('test');
  })

});