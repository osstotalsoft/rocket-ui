import React from 'react'
import Button from '@totalsoft_oss/rocket-ui.components.buttons.button'
import { Bounce, Flip, Slide, Zoom } from 'react-toastify'
import { screen, waitFor, fireEvent } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import { ToastContainer, useToast, usePromiseToast } from '@totalsoft_oss/rocket-ui.components.feedback.toast'
import fns from '@totalsoft_oss/rocket-ui.utils.test-wrapper'

const { render } = fns

describe('Toast', () => {
  it.each([
    {
      variant: 'success',
      transition: Slide,
      position: 'top-center',
      expectedVariant: 'Toastify__toast--success',
      expectedTransition: 'Toastify__slide-enter--top-center ',
      expectedPosition: 'Toastify__toast-container--top-center'
    },
    {
      variant: 'info',
      transition: Zoom,
      position: 'top-right',
      expectedVariant: 'Toastify__toast--info',
      expectedTransition: 'Toastify__zoom-enter ',
      expectedPosition: 'Toastify__toast-container--top-right'
    },
    {
      variant: 'warning',
      transition: Bounce,
      position: 'bottom-right',
      expectedVariant: 'Toastify__toast--warning',
      expectedTransition: 'Toastify__bounce-enter--bottom-right',
      expectedPosition: 'Toastify__toast-container--bottom-right'
    },
    {
      variant: 'error',
      transition: Flip,
      position: 'bottom-center',
      expectedVariant: 'Toastify__toast--error',
      expectedTransition: 'Toastify__flip-enter',
      expectedPosition: 'Toastify__toast-container--bottom-center'
    },
    {
      variant: null,
      transition: Slide,
      position: 'top-center',
      expectedVariant: 'Toastify__toast--default',
      expectedTransition: 'Toastify__slide-enter--top-center ',
      expectedPosition: 'Toastify__toast-container--top-center'
    }
  ])(
    'Should render a toast of type: $variant with the correct specifications',
    async ({ variant, transition, position, expectedVariant, expectedTransition, expectedPosition }) => {
      const { result } = renderHook(() => useToast())

      // eslint-disable-next-line react/jsx-no-bind
      render(
        <>
          <ToastContainer />
          <Button onClick={async () => await result.current(`This is a message!`, variant, transition, position)} />
        </>
      )
      fireEvent.click(screen.getByRole('button'))

      await waitFor(() => expect(screen.getByRole('alert').parentNode).toHaveClass(expectedVariant, expectedTransition))
      await waitFor(() => expect(screen.getByRole('alert').parentNode.parentNode).toHaveClass(expectedPosition))
    }
  )

  it('Should close the toast when click-ing the x button', async () => {
    const { result } = renderHook(() => useToast())

    // eslint-disable-next-line react/jsx-no-bind
    render(
      <>
        <ToastContainer />
        <Button onClick={async () => await result.current('This is a success message!', 'success')} />
      </>
    )

    fireEvent.click(screen.getByRole('button'))
    await waitFor(() => expect(screen.getByRole('alert')).toBeInTheDocument())

    fireEvent.click(screen.getByLabelText('close'))
    await waitFor(() => expect(screen.queryByRole('alert')).not.toBeInTheDocument())
  })

  it('Error toast should not close when click-ing on its container', async () => {
    const { result } = renderHook(() => useToast())

    // eslint-disable-next-line react/jsx-no-bind
    render(
      <>
        <ToastContainer />
        <Button onClick={async () => await result.current('This is an error message!', 'error')} />
      </>
    )

    fireEvent.click(screen.getByRole('button'))
    await waitFor(() => expect(screen.getByRole('alert')).toBeInTheDocument())

    fireEvent.click(screen.getByRole('alert'))
    await waitFor(() => expect(screen.queryByRole('alert')).toBeInTheDocument())
  })
})

describe('Promise toast', () => {
  it('Promise toast should behave as expected', async () => {
    const resolveAfter3Sec = () => new Promise((resolve, reject) => setTimeout(reject, 3000))
    const { result } = renderHook(() => usePromiseToast())

    render(
      <>
        <ToastContainer />{' '}
        <Button
          // eslint-disable-next-line react/jsx-no-bind
          onClick={async () => await result.current(resolveAfter3Sec, 'Promise is pending', 'Promise resolved 👌', 'Promise rejected 🤯')}
        />
      </>
    )
    fireEvent.click(screen.getByRole('button'))

    await waitFor(() => expect(screen.getByRole('alert')).toBeInTheDocument())
    await waitFor(() => expect(screen.getByRole('alert').parentNode).toHaveClass('Toastify__toast--default'))
    await waitFor(() => expect(screen.getByRole('alert').parentNode).toHaveClass('Toastify__toast--error'), { timeout: 4000 })
  })
})
