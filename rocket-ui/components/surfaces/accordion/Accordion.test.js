import React from 'react'
import Accordion from './Accordion'
import { screen } from '@testing-library/react'
import fns from '@totalsoft_oss/rocket-ui.utils.test-wrapper'

const { render } = fns

const mockedContent = { title: 'Title', content: 'Details of the content' }

describe('Accordion', () => {
  it('renders title content', () => {
    render(<Accordion title={mockedContent.title} expanded />)
    expect(screen.getByText(mockedContent.title)).toBeInTheDocument()
  })

  it('renders details content', () => {
    render(<Accordion content={mockedContent.content} expanded />)
    expect(screen.getByText(mockedContent.content)).toBeInTheDocument()
  })

  it('renders expand more icon', () => {
    render(<Accordion />)
    expect(screen.getByTestId('ExpandMoreIcon')).toBeInTheDocument()
  })
})
