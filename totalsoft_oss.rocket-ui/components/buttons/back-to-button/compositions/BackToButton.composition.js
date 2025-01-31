import React from 'react'
import Grid from '@mui/material/Grid'
import BackToButton from '../BackToButton'
import CollapseCard from '@totalsoft_oss/rocket-ui.components.surfaces.collapse-card'
import { BrowserRouter } from 'react-router-dom'

export const BasicBackToButton = () => {
  return (
    <CollapseCard
      defaultExpanded
      title='Back-to Button'
      content={
        <Grid container>
          <Grid item xs={12} container spacing={3}>
            <Grid item>
              <BrowserRouter>
                <BackToButton size='small' tooltip='small' path='https://bit.cloud/totalsoft_oss/rocket-ui' />
              </BrowserRouter>
            </Grid>
            <Grid item>
              <BrowserRouter>
                <BackToButton size='medium' tooltip='medium' path='https://bit.cloud/totalsoft_oss/rocket-ui' />
              </BrowserRouter>
            </Grid>
            <Grid item>
              <BrowserRouter>
                <BackToButton size='large' tooltip='large (default)' path='https://bit.cloud/totalsoft_oss/rocket-ui' />
              </BrowserRouter>
            </Grid>
          </Grid>
        </Grid>
      }
    />
  )
}
