import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import SquareComponent from './square';
import Square from '../../game/square';

test('renders correctly', () => {
  const square = new Square(0, 0);
  const component = renderer
    .create(<SquareComponent square={square} />)
    .toJSON();
  expect(component).toMatchSnapshot();
});

test('renders with number', () => {
  const square = new Square(0, 0);
  square.setNumber(5);
  const component = renderer
    .create(<SquareComponent square={square} />)
    .toJSON();
  expect(component).toMatchSnapshot();
});

test('renders current square', () => {
  const square = new Square(0, 0);
  const component = renderer
    .create(<SquareComponent square={square} current />)
    .toJSON();
  expect(component).toMatchSnapshot();
});

test('renders destination square', () => {
  const square = new Square(0, 0);
  const component = renderer
    .create(<SquareComponent square={square} destination />)
    .toJSON();
  expect(component).toMatchSnapshot();
});

test('calls next on click', () => {
  const mockNext = jest.fn();
  const square = new Square(0, 0);
  const component = shallow(<SquareComponent square={square} next={mockNext} />);
  component.simulate('click');
  expect(mockNext.mock.calls.length).toBe(1);
  expect(mockNext.mock.calls[0][0]).toBe(square);
});
