import React from 'react'
import AccordionList from './AccordionList'
import { screen } from '@testing-library/react'
import fns from '@totalsoft_oss/rocket-ui.utils.test-wrapper'

const { render } = fns

const mockedContent = [{ title: 'Title', details: 'Details of the content' }]

describe('Accordion', () => {
  it('renders title content', () => {
    render(<AccordionList content={mockedContent} canExpandAll />)
    expect(screen.getByText(mockedContent[0].title)).toBeInTheDocument()
  })

  it('renders details content', () => {
    render(<AccordionList content={mockedContent} defaultExpanded={0} />)
    expect(screen.getByText(mockedContent[0].details)).toBeInTheDocument()
  })
})
