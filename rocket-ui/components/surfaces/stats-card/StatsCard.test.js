import React from 'react'
import StatsCard from './StatsCard'
import Button from '@totalsoft_oss/rocket-ui.components.buttons.button'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import { screen } from '@testing-library/react'
import { defaultTheme } from '@totalsoft_oss/rocket-ui.themes'
import fns from '@totalsoft_oss/rocket-ui.utils.test-wrapper'

const { render } = fns
const theme = defaultTheme

describe('StatsCard', () => {
  it('renders footer', () => {
    render(<StatsCard footer={<Button />} />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('renders card header', () => {
    const title = 'StatsCard title'
    const description = 'StatsCard description'

    render(<StatsCard title={title} description={description} />)

    expect(screen.getByText(title)).toBeInTheDocument()
    expect(screen.getByText(description)).toBeInTheDocument()
  })

  it('when `icon` is received, applies a background of `iconColor`', () => {
    const iconColor = 'warning'
    render(<StatsCard icon={AttachMoneyIcon} />)
    expect(screen.getByTestId('AttachMoneyIcon').parentElement).toHaveStyle(
      `background: linear-gradient(195deg, ${theme.palette[iconColor].light}, ${theme.palette[iconColor].main})`
    )
  })

  it('has `standard` variant by default', () => {
    render(<StatsCard footer={<Button>ok</Button>} />)
    expect(screen.getByRole('button').parentElement).not.toHaveStyle(`background-color: ${theme.palette.grey[200]}`)
  })

  it('when variant is `filled`, has a grey background color', () => {
    render(<StatsCard footer={<Button>ok</Button>} variant='filled' />)
    expect(screen.getByRole('button').parentElement).toHaveStyle(`background-color: ${theme.palette.grey[200]}`)
  })

  it('has iconColor set to info by default', () => {
    render(<StatsCard icon={AttachMoneyIcon} />)
    expect(screen.getByTestId('AttachMoneyIcon').parentElement).toHaveStyle(
      `background: linear-gradient(195deg, ${theme.palette['info'].light}, ${theme.palette['info'].main})`
    )
  })
})
