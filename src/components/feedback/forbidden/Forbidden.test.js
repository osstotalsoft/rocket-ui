import React from 'react'
import { screen } from '@testing-library/react'
import Forbidden from './Forbidden'
import fns from '@totalsoft_oss/rocket-ui.utils.test-wrapper'

const { render } = fns

const forbiddenTextValue = 'You are banned from viewing this page!'
const forbiddenTextDefault = 'Not allowed to see this page!'
const forbiddenButtonTextValue = 'Go to page'
const forbiddenButtonTextDefault = 'Go to main page'

describe('Forbidden', () => {
  test('displays the text received through the forbiddenText prop', () => {
    render(<Forbidden forbiddenText={forbiddenTextValue} />)

    expect(screen.getByText(forbiddenTextValue)).toBeInTheDocument()
  })

  test('displays the text received through the forbiddenButtonText prop', () => {
    render(<Forbidden forbiddenButtonText={forbiddenButtonTextValue} />)

    expect(screen.getByText(forbiddenButtonTextValue)).toBeInTheDocument()
  })

  test('default text and default text of the button are in screen', async () => {
    render(<Forbidden />)
    const forbiddenText = await screen.findByText(forbiddenTextDefault)
    const forbiddenButtonText = await screen.findByText(forbiddenButtonTextDefault)

    expect(forbiddenText).toBeDefined()
    expect(forbiddenButtonText).toBeDefined()
  })

  test('displays image on the screen', async () => {
    render(<Forbidden />)
    const forbiddenImage = screen.getByRole('img')

    expect(forbiddenImage).toHaveAttribute('alt', 'ForbiddenImage')
  })
})
