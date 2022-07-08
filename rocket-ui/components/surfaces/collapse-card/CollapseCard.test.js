import React from 'react'
import { screen, waitFor } from '@testing-library/react'
import CollapseCard from './CollapseCard'
import Button from '@totalsoft_oss/rocket-ui.components.buttons.button'
import fns from '@totalsoft_oss/rocket-ui.utils.test-wrapper'

const { render, userClick } = fns
const text =
  'Cards are surfaces that display content and actions on a single topic. They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy. Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information.'

describe('CollapseCard', () => {
  test('is collapsed by default', () => {
    const { container } = render(<CollapseCard content={<div>{text}</div>} />)
    const collapses = container.getElementsByClassName('MuiCollapse-hidden')
    expect(collapses.length).toBe(1)
    expect(screen.getByTestId('ExpandMoreIcon')).toBeInTheDocument()
  })

  test('if `defaultExpanded` is true, is expanded by default', () => {
    const { container } = render(<CollapseCard content={<div>{text}</div>} defaultExpanded={true} />)
    const collapses = container.getElementsByClassName('MuiCollapse-hidden')

    expect(collapses.length).toBe(0)
    expect(screen.getByTestId('ExpandLessIcon')).toBeInTheDocument()
  })

  test('when actions is an array, renders the items and the expand button', () => {
    render(<CollapseCard actions={[<Button key='button'>OK</Button>]} />)
    expect(screen.getByText('OK')).toBeInTheDocument()
    expect(screen.getByTestId('ExpandMoreIcon')).toBeInTheDocument()
  })

  test('when actions is a node, renders the node and the expand button', () => {
    render(<CollapseCard actions={<Button key='button'>OK</Button>} />)
    expect(screen.getByText('OK')).toBeInTheDocument()
    expect(screen.getByTestId('ExpandMoreIcon')).toBeInTheDocument()
  })

  test('expands the card when the button is clicked', async () => {
    const { container } = render(<CollapseCard />)
    expect(container.getElementsByClassName('MuiCollapse-hidden').length).toBe(1)

    userClick(screen.getByTestId('ExpandMoreIcon').parentElement)

    await waitFor(() => {
      expect(container.getElementsByClassName('MuiCollapse-hidden').length).toBe(0)
    })
  })

  test('calls onToggle when the button is pressed', async () => {
    const mockOnToggle = jest.fn()
    render(<CollapseCard onToggle={mockOnToggle} />)
    userClick(screen.getByTestId('ExpandMoreIcon').parentElement)
    await waitFor(() => {
      expect(mockOnToggle).toBeCalled()
    })
  })

  test('displays summary', () => {
    render(<CollapseCard summary={text} />)
    expect(screen.getByText(text)).toBeInTheDocument()
  })
})
