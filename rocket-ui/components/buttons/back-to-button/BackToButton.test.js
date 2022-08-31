import React from 'react'
import BackToButton from './BackToButton'
import { screen, waitFor } from '@testing-library/react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import fns from '@totalsoft_oss/rocket-ui.utils.test-wrapper'

const { render, userClick } = fns

describe('BackToButton', () => {
  test('redirects to the path received', async () => {
    render(
      <BrowserRouter>
        <BackToButton path='/back' />
        <Switch>
          <Route path='/back'>
            <div>{'redirected'}</div>
          </Route>
        </Switch>
      </BrowserRouter>
    )
    userClick(screen.getByRole('button'))
    await waitFor(() => {
      expect(screen.getByText('redirected')).toBeInTheDocument()
    })
  })
})
