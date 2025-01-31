import React, { useState } from 'react'
import TextField from '../TextField'
import CollapseCard from '@totalsoft_oss/rocket-ui.components.surfaces.collapse-card'
import Grid from '@mui/material/Grid'

export const TextFieldStates = () => {
  const [value, setValue] = useState()
  const [errorValue, setErrorValue] = useState()

  return (
    <CollapseCard
      defaultExpanded
      title='States'
      content={
        <Grid container spacing={4} justifyItems={'flex-start'}>
          <Grid item xs={2}>
            <TextField label='Basic text field' value={value || ''} onChange={setValue} debounceBy={1000} fullWidth />
          </Grid>
          <Grid item xs={2}>
            <TextField label='Disabled' value={'cannot be modified'} disabled fullWidth />
          </Grid>
          <Grid item xs={2}>
            <TextField required label='Error' value={errorValue || ''} onChange={setErrorValue} error fullWidth />
          </Grid>
        </Grid>
      }
    />
  )
}
