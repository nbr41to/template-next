import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Header } from '.';

export default {
  title: 'Header',
  component: Header,
} as ComponentMeta<typeof Header>;

export const HeaderComponent: ComponentStory<typeof Header> = (args) => (
  <Header {...args} />
);
