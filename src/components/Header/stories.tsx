import { Meta, Story } from '@storybook/react/types-6-0'
import { Header, HeaderProps } from '.'

export default {
  title: 'Header',
  component: Header,
  args: {
    children: 'O texto está escuro',
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta

export const Template: Story<HeaderProps> = (args) => <Header {...args} />
