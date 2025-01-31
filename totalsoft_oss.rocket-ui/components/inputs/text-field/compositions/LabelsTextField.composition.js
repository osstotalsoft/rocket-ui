import React from 'react'
import TextField from '../TextField'
import CollapseCard from '@totalsoft_oss/rocket-ui.components.surfaces.collapse-card'
import Grid from '@mui/material/Grid'

export const TextFieldLabels = () => {
  return (
    <CollapseCard
      defaultExpanded
      title='Labels'
      content={
        <Grid container spacing={4} justifyItems={'flex-start'}>
          <Grid item xs={2}>
            <TextField label='With label' disabled fullWidth />
          </Grid>
          <Grid item xs={2}>
            <TextField label=' ' helperText="Can preserve alignment with label = ' '" disabled fullWidth />
          </Grid>
          <Grid item xs={2}>
            <TextField disabled fullWidth helperText='No label causes misalignment' />
          </Grid>
          <Grid item xs={2}>
            <TextField placeholder='With placeholder' disabled fullWidth />
          </Grid>
        </Grid>
      }
    />
  )
}
