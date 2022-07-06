import React, { useCallback, useState } from 'react'
import IconButton from './IconButton'
import { FormControlLabel, Grid, Switch } from '@mui/material'
import RocketIcon from '@mui/icons-material/Rocket'

export const IconButtonLoading = () => {
  const [loading, setLoading] = useState(false)
  const toggleLoading = useCallback(() => setLoading(current => !current), [])

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <FormControlLabel control={<Switch checked={loading} onChange={toggleLoading} name='loading' color='primary' />} label='Loading' />
      </Grid>
      <Grid item>
        <IconButton tooltip='secondary' loading={loading} size='large'>
          <RocketIcon />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton variant='text' tooltip='`text` variant' loading={loading} size='large'>
          <RocketIcon />
        </IconButton>
      </Grid>
    </Grid>
  )
}
