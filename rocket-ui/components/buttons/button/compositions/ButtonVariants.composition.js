import React from 'react'
import Button from '../Button'
import Grid from '@mui/material/Grid'

export const ButtonVariants = () => {
  return (
    <Grid container spacing={3}>
      <Grid item>
        <Button variant='contained'>Contained</Button>
      </Grid>
      <Grid item>
        <Button variant='outlined'>Outlined</Button>
      </Grid>
      <Grid item>
        <Button variant='text'>Text</Button>
      </Grid>
    </Grid>
  )
}
