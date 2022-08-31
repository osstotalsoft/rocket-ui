import React from 'react'
import { screen } from '@testing-library/react'
import LinearProgress from './LinearProgress'
import fns from '@totalsoft_oss/rocket-ui.utils.test-wrapper'

const { render } = fns

describe('LinearProgress', () => {
  it('renders the label', () => {
    render(<LinearProgress value={80} showLabel={true} />)
    expect(screen.getByText('80%')).toBeInTheDocument()
  })
})
