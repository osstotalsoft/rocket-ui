import React from 'react'
import { screen, fireEvent, waitFor } from '@testing-library/react'
import PasswordField from './PasswordField'
import fns from '@totalsoft_oss/rocket-ui.utils.test-wrapper'

const { render, userClick } = fns

describe('PasswordField', () => {
  test('toggles show/hide icons', async () => {
    render(<PasswordField />)
    expect(screen.getByTestId('VisibilityOffIcon')).toBeInTheDocument()
    userClick(screen.getByRole('button'))
    await waitFor(() => expect(screen.getByTestId('VisibilityIcon')).toBeInTheDocument())
  })

  test('hides/displays text when toggling the show button', async () => {
    const text = 'password'
    render(<PasswordField value={text} />)
    const input = screen.getByDisplayValue(text)
    expect(input).toHaveAttribute('type', 'password')
    userClick(screen.getByRole('button'))
    await waitFor(() => expect(input).toHaveAttribute('type', 'text'))
  })

  test('displays correct tooltip', async () => {
    render(<PasswordField />)

    fireEvent.mouseOver(screen.getByTestId('VisibilityOffIcon'))
    await waitFor(() => {
      expect(screen.getByText('Show password')).toBeInTheDocument()
    })

    userClick(screen.getByRole('button'))

    fireEvent.mouseOver(screen.getByTestId('VisibilityIcon'))
    await waitFor(() => {
      expect(screen.getByText('Hide password')).toBeInTheDocument()
    })
  })

  test("doesn't display tooltip when disabled", async () => {
    render(<PasswordField disabled />)
    fireEvent.mouseOver(screen.getByTestId('VisibilityOffIcon'))
    await waitFor(() => {
      expect(screen.queryByText('Show password')).not.toBeInTheDocument()
    })
  })
})
