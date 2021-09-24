import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const ButtonComponent: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

ButtonComponent.args = {
  contain: true,
  label: 'Button',
};
