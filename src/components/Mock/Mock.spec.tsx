import { screen } from '@testing-library/react'
import { Mock } from '.'
import { renderTheme } from '../../styles/render-theme'

describe('<Mock />', () => {
  it('should render a Mock', () => {
    renderTheme(<Mock>Example</Mock>)
    const heading = screen.getByRole('heading', { name: 'Example' })
    expect(heading).toBeInTheDocument()
  })
})
