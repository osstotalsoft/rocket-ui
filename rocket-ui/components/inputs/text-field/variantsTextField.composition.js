import React from 'react'
import TextField from './TextField'
import CollapseCard from '@totalsoft_oss/rocket-ui.components.surfaces.collapse-card'
import { Grid } from '@mui/material'

export const TextFieldVariants = () => {
  return (
    <CollapseCard
      defaultExpanded
      title='Variants'
      content={
        <Grid container spacing={4} justifyItems={'flex-start'}>
          <Grid item xs={2}>
            <TextField label='Standard (default)' readOnly={true} fullWidth />
          </Grid>
          <Grid item xs={2}>
            <TextField label='Outlined' variant='outlined' readOnly={true} fullWidth />
          </Grid>
          <Grid item xs={2}>
            <TextField label='Filled' variant='filled' readOnly={true} fullWidth />
          </Grid>
        </Grid>
      }
    />
  )
}
