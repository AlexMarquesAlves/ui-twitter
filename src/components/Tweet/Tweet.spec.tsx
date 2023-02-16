import { screen } from '@testing-library/react'
import { Tweet } from '.'
import { renderTheme } from '../../styles/render-theme'

describe('<Tweet />', () => {
  it('should render a Tweet', () => {
    renderTheme(
      <Tweet user={'Duque'} likes={0}>
        Any Tweet
        <button>Like</button>
      </Tweet>,
    )
    const strong = screen.getByText('Duque')
    const paragraph = screen.getByText('Any Tweet')
    const button = screen.getByText('Like 0')

    expect(strong).toBeInTheDocument()
    expect(paragraph).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })
})
