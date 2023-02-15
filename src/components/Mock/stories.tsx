import { Meta, Story } from '@storybook/react/types-6-0'
import { Mock, MockProps } from '.'

export default {
  title: 'Mock',
  component: Mock,
  args: {
    children: 'O texto está escuro',
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta

export const Template: Story<MockProps> = (args) => <Mock {...args} />
