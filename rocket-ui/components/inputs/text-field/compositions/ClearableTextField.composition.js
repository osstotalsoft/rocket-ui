import React, { useState } from 'react'
import TextField from '../TextField'
import Grid from '@mui/material/Grid'
import CollapseCard from '@totalsoft_oss/rocket-ui.components.surfaces.collapse-card'

export const TextFieldClearable = () => {
  const [clearableValue, setClearableValue] = useState('can be cleared')

  return (
    <CollapseCard
      defaultExpanded
      title='Clearable'
      content={
        <Grid container spacing={4} justifyItems={'flex-start'}>
          <Grid item xs={2}>
            <TextField label='Standard (default)' fullWidth value={clearableValue || ''} onChange={setClearableValue} isClearable={true} />
          </Grid>
          <Grid item xs={2}>
            <TextField
              label='Outlined'
              variant='outlined'
              fullWidth
              value={clearableValue || ''}
              onChange={setClearableValue}
              isClearable={true}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              label='Filled'
              variant='filled'
              fullWidth
              value={clearableValue || ''}
              onChange={setClearableValue}
              isClearable={true}
            />
          </Grid>
        </Grid>
      }
    />
  )
}
