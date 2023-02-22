import { Meta, Story } from '@storybook/react/types-6-0'
import { Sidebar, SidebarProps } from '.'

export default {
  title: 'Sidebar',
  component: Sidebar,
  args: {
    children: 'O texto está escuro',
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta

export const Template: Story<SidebarProps> = (args) => <Sidebar {...args} />
