import React from 'react'
import { Grid } from '@mui/material'
import PasswordField from './PasswordField'
import CollapseCard from '@totalsoft_oss/rocket-ui.components.surfaces.collapse-card'

export const PasswordFieldStates = () => {
  return (
    <CollapseCard
      defaultExpanded
      title='Password field states'
      content={
        <Grid container>
          <Grid item xs={12} container spacing={3}>
            <Grid item>
              <PasswordField label='Read-only' readOnly value='password' />
            </Grid>
            <Grid item>
              <PasswordField label='Disabled' disabled />
            </Grid>
            <Grid item>
              <PasswordField label='Error' error value='' />
            </Grid>
          </Grid>
        </Grid>
      }
    />
  )
}
