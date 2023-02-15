import { screen } from '@testing-library/react'
import { Tweet } from '.'
import { renderTheme } from '../../styles/render-theme'

describe('<Tweet />', () => {
  it('should render a Tweet', () => {
    renderTheme(
      <Tweet user={'Duque'} likes={0}>
        Any Tweet
      </Tweet>,
    )
    const strong = screen.getByText('Duque')
    const paragraph = screen.getByText('Any Tweet')
    const button = screen.getByRole('button')

    expect(strong).toBeInTheDocument()
    expect(paragraph).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })
})
