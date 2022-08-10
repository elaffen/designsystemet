import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ActionButton } from '@skatteetaten/designsystem-buttons';

export default {
  component: ActionButton,
  title: 'ActionButton',
} as ComponentMeta<typeof ActionButton>;

const Template: ComponentStory<typeof ActionButton> = (args) => (
  <ActionButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
