import React from 'react'
import Grid from '@mui/material/Grid'
import DateTime from '../DateTime'
import CollapseCard from '@totalsoft_oss/rocket-ui.components.surfaces.collapse-card'

const value = new Date()

export const DateTimeDisabled = () => {
  return (
    <CollapseCard
      defaultExpanded
      title='Disabled Date Pickers'
      content={
        <Grid container spacing={4} justifyItems={'flex-start'}>
          <Grid item xs={4}>
            <DateTime showPicker='date' label='Date Picker' mask='__.__.____' value={value} disabled={true} />
          </Grid>
          <Grid item xs={4}>
            <DateTime showPicker='dateTime' label='Date Time Picker' mask='__.__.____ __:__' value={value} disabled={true} />
          </Grid>
          <Grid item xs={4}>
            <DateTime showPicker='time' label='Time Picker' mask='__:__' value={value} disabled={true} />
          </Grid>
          <Grid item xs={4}>
            <DateTime showPicker='date' label='Date Picker' mask='__.__.____' value={value} disabled={true} clearable={true} />
          </Grid>
          <Grid item xs={4}>
            <DateTime
              showPicker='dateTime'
              label='Date Time Picker'
              mask='__.__.____ __:__'
              value={value}
              disabled={true}
              clearable={true}
            />
          </Grid>
          <Grid item xs={4}>
            <DateTime showPicker='time' label='Time Picker' mask='__:__' value={value} disabled={true} clearable={true} />
          </Grid>
        </Grid>
      }
    />
  )
}
