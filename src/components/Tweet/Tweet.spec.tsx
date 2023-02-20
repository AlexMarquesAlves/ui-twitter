import { Tweet } from '.'
import { renderTheme } from '../../styles/render-theme'

describe('<Tweet />', () => {
  it('should render a Tweet', () => {
    renderTheme(
      <Tweet />,
    )
    // const strong = screen.getByText('Duque')
    // expect(strong).toBeInTheDocument()

  })
})
