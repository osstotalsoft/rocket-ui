import React from 'react'
import { screen, waitFor } from '@testing-library/react'
import SideMenu from './SideMenu'
import fns from '@totalsoft_oss/rocket-ui.utils.test-wrapper'

const { render, userClick } = fns

const content = 'content'

describe('SideMenu', () => {
  it("doesn't display content by default", () => {
    render(<SideMenu content={content} />)
    expect(screen.getByText(content)).not.toBeVisible()
  })

  it('display content when the button is clicked', async () => {
    render(<SideMenu content={content} />)
    userClick(screen.getByTestId('MenuOpenIcon').parentElement)
    await waitFor(() => expect(screen.getByText(content)).toBeVisible())
  })

  it('hides content when clicked outside', async () => {
    render(<SideMenu content={content} />)
    const button = screen.getByTestId('MenuOpenIcon').parentElement
    userClick(button)
    await waitFor(() => expect(screen.getByText(content)).toBeVisible())
    userClick(button.parentElement.parentElement)
    await waitFor(() => expect(screen.getByText(content)).not.toBeVisible())
  })
})
