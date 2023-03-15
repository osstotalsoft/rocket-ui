import React from 'react'
import Button from '../Button'
import Grid from '@mui/material/Grid'
import RocketIcon from '@mui/icons-material/Rocket'

export const IconButton = () => {
  return (
    <Grid container spacing={3}>
      <Grid item>
        <Button startIcon={<RocketIcon />}>start icon</Button>
      </Grid>
      <Grid item>
        <Button endIcon={<RocketIcon />}>end icon</Button>
      </Grid>
      <Grid item>
        <Button startIcon={<RocketIcon />} endIcon={<RocketIcon />}>
          both icons
        </Button>
      </Grid>
      <Grid item>
        <Button tooltip="justIcon={true} size='tiny'" size='tiny' justIcon>
          <RocketIcon />
        </Button>
      </Grid>
      <Grid item>
        <Button tooltip="justIcon={true} size='small'" size='small' justIcon>
          <RocketIcon />
        </Button>
      </Grid>
      <Grid item>
        <Button tooltip="justIcon={true} size='medium'" size='medium' justIcon>
          <RocketIcon />
        </Button>
      </Grid>
      <Grid item>
        <Button tooltip="justIcon={true} size='large'" size='large' justIcon>
          <RocketIcon />
        </Button>
      </Grid>
      <Grid item>
        <Button tooltip="justIcon={true} size='large'" size='large' justIcon disabled>
          <RocketIcon />
        </Button>
      </Grid>
    </Grid>
  )
}
