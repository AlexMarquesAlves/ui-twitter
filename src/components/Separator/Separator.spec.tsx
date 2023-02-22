import { Separator } from '.'
import { renderTheme } from '../../styles/render-theme'

describe('<Separator />', () => {
  it('should render a Separator', () => {
    renderTheme(<Separator>Example</Separator>)
    // const heading = screen.getByRole('heading', { name: 'Example' })
    // expect(heading).toBeInTheDocument()
  })
})
