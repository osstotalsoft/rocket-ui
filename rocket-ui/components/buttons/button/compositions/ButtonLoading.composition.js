import React, { useCallback, useState } from 'react'
import Button from '../Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import Switch from '@mui/material/Switch'

export const ButtonLoading = () => {
  const [loading, setLoading] = useState(false)
  const toggleLoading = useCallback(() => setLoading(current => !current), [])

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <FormControlLabel control={<Switch checked={loading} onChange={toggleLoading} name='loading' color='primary' />} label='Loading' />
      </Grid>
      <Grid item>
        <Button variant='contained' loading={loading}>
          Contained
        </Button>
      </Grid>
      <Grid item>
        <Button variant='outlined' loading={loading}>
          Outlined
        </Button>
      </Grid>
      <Grid item>
        <Button variant='text' loading={loading}>
          Text
        </Button>
      </Grid>
    </Grid>
  )
}
