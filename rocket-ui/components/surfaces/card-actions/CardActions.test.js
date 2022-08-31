import React from 'react'
import { screen } from '@testing-library/react'
import Button from '@totalsoft_oss/rocket-ui.components.buttons.button'
import CardActions from './CardActions'
import { defaultTheme } from '@totalsoft_oss/rocket-ui.themes'
import fns from '@totalsoft_oss/rocket-ui.utils.test-wrapper'

const { render } = fns
const theme = defaultTheme

describe('CardActions', () => {
  it('when variant is `filled`, has a grey background color', () => {
    render(
      <CardActions variant='filled'>
        <Button>ok</Button>
      </CardActions>
    )
    expect(screen.getByRole('button').parentElement).toHaveStyle(`background-color: ${theme.palette.grey[200]}`)
  })

  it('has `standard` variant by default', () => {
    render(
      <CardActions>
        <Button>ok</Button>
      </CardActions>
    )
    expect(screen.getByRole('button').parentElement).not.toHaveStyle(`background-color: ${theme.palette.grey[200]}`)
  })

  it('displays actions on the left by default', () => {
    render(
      <CardActions>
        <Button>ok</Button>
      </CardActions>
    )
    expect(screen.getByRole('button').parentElement).toHaveStyle(`justify-content: flex-start`)
  })

  it('displays actions on the right when `align` is set to `right`', () => {
    render(
      <CardActions align='right'>
        <Button>ok</Button>
      </CardActions>
    )
    expect(screen.getByRole('button').parentElement).toHaveStyle(`justify-content: flex-end`)
  })
})
