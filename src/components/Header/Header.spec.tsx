import { Header } from '.'
import { renderTheme } from '../../styles/render-theme'

describe('<Header />', () => {
  it('should render a Header', () => {
    renderTheme(<Header title='Home' />)
    // const heading = screen.getByRole('heading', {name: 'Example' })
    // expect(heading).toBeInTheDocument()
  })
})
