import React from 'react';
import renderer from 'react-test-renderer';

import Quad from './quad';
import Game from '../../game/game';

test('renders correctly', () => {
  const game = new Game();
  const component = renderer
    .create(<Quad game={game} />)
    .toJSON();
  expect(component).toMatchSnapshot();
});

