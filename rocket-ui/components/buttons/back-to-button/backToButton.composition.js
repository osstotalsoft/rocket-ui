import React from 'react'
import { Grid } from '@mui/material'
import BackToButton from './BackToButton'

export const BasicBackToButton = () => {
  return (
    <Grid container>
      <Grid item xs={12} container spacing={3}>
        <Grid item>
          <BackToButton size='small' tooltip='small' path='https://bit.cloud/totalsoft_oss/rocket-ui' />
        </Grid>
        <Grid item>
          <BackToButton size='medium' tooltip='medium' path='https://bit.cloud/totalsoft_oss/rocket-ui' />
        </Grid>
        <Grid item>
          <BackToButton size='large' tooltip='large (default)' path='https://bit.cloud/totalsoft_oss/rocket-ui' />
        </Grid>
      </Grid>
    </Grid>
  )
}
