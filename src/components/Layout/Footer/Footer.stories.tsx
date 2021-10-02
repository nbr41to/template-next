import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

export const FooterComponent: ComponentStory<typeof Footer> = (args) => (
  <Footer {...args} />
);
