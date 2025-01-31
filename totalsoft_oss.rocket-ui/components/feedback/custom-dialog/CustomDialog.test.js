import React from 'react'
import { screen } from '@testing-library/react'
import CustomDialog from './CustomDialog'
import { text } from './mocks'
import fns from '@totalsoft_oss/rocket-ui.utils.test-wrapper'

const { render, userClick } = fns

describe('DialogDisplay', () => {
  test('displays `yes` and `no` buttons by default', () => {
    render(<CustomDialog id='dialog' open={true} />)
    expect(screen.getByText('Yes')).toBeInTheDocument()
    expect(screen.getByText('No')).toBeInTheDocument()
  })

  test('X button is hidden by default', () => {
    render(<CustomDialog id='dialog' open={true} />)
    expect(screen.queryByLabelText('Close')).not.toBeInTheDocument()
  })

  test('calls onClose function when clicking the `no` button', () => {
    const mockOnClose = jest.fn(() => {})

    render(<CustomDialog id='dialog' open={true} content={text} onClose={mockOnClose} />)
    userClick(screen.getByText('No'))

    expect(mockOnClose).toBeCalled()
  })

  test(`doesn't close on backdrop click when disableBackdropClick = true`, () => {
    const mockOnClose = jest.fn(() => {})

    render(<CustomDialog id='dialog' open={true} content={text} onClose={mockOnClose} disableBackdropClick={true} />)
    userClick(screen.getByRole('dialog').parentElement)

    expect(mockOnClose).not.toBeCalled()
  })
})
