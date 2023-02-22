import { Meta, Story } from '@storybook/react/types-6-0'
import { Separator, SeparatorProps } from '.'

export default {
  title: 'Separator',
  component: Separator,
  args: {
    children: 'O texto está escuro',
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta

export const Template: Story<SeparatorProps> = (args) => <Separator {...args} />
