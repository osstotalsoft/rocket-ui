import React from 'react'
import { fireEvent, screen } from '@testing-library/react'
import ExpandingText from './ExpandingText'
import { defaultTheme } from '@totalsoft_oss/rocket-ui.themes'
import fns from '@totalsoft_oss/rocket-ui.utils.test-wrapper'

const { render } = fns
const theme = defaultTheme
const text =
  'Cards are surfaces that display content and actions on a single topic. They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy. Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information.'

const showMoreText = 'Show more'
const showLessText = 'Show less'

describe('ExpandingText', () => {
  test('uses the link color from the theme', () => {
    render(<ExpandingText text={text} minLength={250} showMoreText={showMoreText} />)
    expect(screen.getByText(showMoreText)).toHaveStyle(`color: ${theme.palette.link.main}`)
  })

  test('displays correct items when collapsed', () => {
    const minLength = 250
    render(<ExpandingText text={text} minLength={minLength} showMoreText={showMoreText} />)

    expect(screen.getByText(showMoreText)).toBeDefined()
    expect(screen.getByText(`${text.substring(0, minLength)}...`)).toBeDefined()
  })

  test('displays correct items when expanded', () => {
    render(<ExpandingText text={text} minLength={250} showMoreText={showMoreText} showLessText={showLessText} />)
    fireEvent.click(screen.getByText(showMoreText))

    expect(screen.getByText(showLessText)).toBeDefined()
    expect(screen.getByText(text)).toBeDefined()
  })

  test('displays full text when minLength is greater than text length', () => {
    render(<ExpandingText text={text} minLength={1000} />)

    expect(screen.getByText(text)).toBeDefined()
  })

  test('applies the value received for display prop to text and button', () => {
    render(<ExpandingText text={text} minLength={250} showMoreText={showMoreText} display='inline-block' />)

    expect(screen.getByText(showMoreText)).toHaveStyle('display: inline-block')
  })

  test('button text color can be overridden through the sx prop', () => {
    const color = 'red'
    render(<ExpandingText text={text} sx={{ color }} minLength={250} showMoreText={showMoreText} />)

    expect(screen.getByText(showMoreText)).toHaveStyle(`color: ${color}`)
  })

  test('typography wrapping the text is customizable', () => {
    render(<ExpandingText text={text} minLength={250} textProps={{ variant: 'body2' }} expanded={true} />)

    expect(screen.getByText(text)).toHaveClass('MuiTypography-body2')
  })

  test('typography wrapping the button text is customizable', () => {
    render(
      <ExpandingText text={text} minLength={250} showMoreText={showMoreText} buttonProps={{ variant: 'overline', emphasis: 'bold' }} />
    )

    expect(screen.getByText(showMoreText)).toHaveClass('MuiTypography-overline')
    expect(screen.getByText(showMoreText)).toHaveStyle('font-weight: bold')
  })
})
