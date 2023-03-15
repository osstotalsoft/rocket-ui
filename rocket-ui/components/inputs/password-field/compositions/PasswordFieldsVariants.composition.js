import React from 'react'
import Grid from '@mui/material/Grid'
import PasswordField from '../PasswordField'
import CollapseCard from '@totalsoft_oss/rocket-ui.components.surfaces.collapse-card'

export const PasswordFieldVariant = () => {
  return (
    <CollapseCard
      defaultExpanded
      title='Password field variants'
      content={
        <Grid container>
          <Grid item xs={12} container spacing={3}>
            <Grid item>
              <PasswordField label='Standard (default)' value='' />
            </Grid>
            <Grid item>
              <PasswordField label='Outlined' variant='outlined' value='' />
            </Grid>
            <Grid item>
              <PasswordField label='Filled' variant='filled' value='' />
            </Grid>
          </Grid>
        </Grid>
      }
    />
  )
}
