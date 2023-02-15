import { Meta, Story } from '@storybook/react/types-6-0'
import { Tweet, TweetProps } from '.'

export default {
  title: 'Tweet',
  component: Tweet,
  args: {
    children: 'O texto está escuro',
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta

export const Template: Story<TweetProps> = (args) => <Tweet {...args} />
