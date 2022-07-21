import React from 'react'
import { Grid } from '@mui/material'
import DateTime from '../DateTime'
import CollapseCard from '@totalsoft_oss/rocket-ui.components.surfaces.collapse-card'

export const DateTimeClearable = () => {
  return (
    <CollapseCard
      defaultExpanded
      title='Clearable Date Pickers'
      content={
        <Grid container spacing={4} justifyItems={'flex-start'}>
          <Grid item xs={4}>
            <DateTime showPicker='date' label='Date Picker' mask='__.__.____' clearable={true} />
          </Grid>
          <Grid item xs={4}>
            <DateTime showPicker='dateTime' label='Date Time Picker' mask='__.__.____ __:__' clearable={true} />
          </Grid>
          <Grid item xs={4}>
            <DateTime showPicker='time' label='Time Picker' mask='__:__' clearable={true} />
          </Grid>
        </Grid>
      }
    />
  )
}
