import React from 'react'
import IconButton from '../IconButton'
import { Grid } from '@mui/material'
import RocketIcon from '@mui/icons-material/Rocket'

export const IconButtonSizes = () => {
  return (
    <Grid container>
      <Grid item xs={12} container spacing={3}>
        <Grid item>
          <IconButton size='small' tooltip={'small'}>
            <RocketIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton size='medium' tooltip={'medium'}>
            <RocketIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton size='large' tooltip={'large'}>
            <RocketIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  )
}
