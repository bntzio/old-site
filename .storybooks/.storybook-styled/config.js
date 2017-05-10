import { configure, addDecorator, setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';
import backgroundColor from 'react-storybook-decorator-background';

// Global decorators
addDecorator(backgroundColor(['#1d2637', '#fff', '#000']));

// Global addons
setAddon(infoAddon);

// Stories loader
function loadStories() {
  require('../../stories/styled');
}

// Configure stories
configure(loadStories, module);
