import React from 'react';
import { storiesOf } from '@kadira/storybook';

storiesOf('Button', module).add(
  'Normal button',
  () => <button>Press me!</button>,
  { inline: false, propTables: false }
);
