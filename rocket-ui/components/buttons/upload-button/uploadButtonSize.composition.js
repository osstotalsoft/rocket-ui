import React from 'react'
import { Grid } from '@mui/material'
import UploadButton from './UploadButton'
import { join, map, prop } from 'ramda'
import Typography from '@totalsoft_oss/rocket-ui.components.data-display.typography'

export const UploadButtonSize = () => {
  const [error, setError] = useState()
  const handleError = useCallback(err => setError(err), [])
  const handleChoice = useCallback(() => setError(null), [])

  return (
    <Grid container spacing={3}>
      <Grid item>
        <UploadButton onFilesChanged={handleChoice} tooltip='All files (default)' />
      </Grid>
      <Grid item>
        <UploadButton
          multiple
          maxTotalSize={5000}
          onError={handleError}
          onFilesChanged={handleChoice}
          tooltip='Max total size 5000 bytes'
        />
      </Grid>
      <Grid item>
        <UploadButton multiple maxItemSize={5000} onError={handleError} onFilesChanged={handleChoice} tooltip='Max item size 5000 bytes' />
      </Grid>
      <Grid item>
        <UploadButton
          multiple
          minTotalSize={5000}
          onError={handleError}
          onFilesChanged={handleChoice}
          tooltip='Min total size 5000 bytes'
        />
      </Grid>
      <Grid item>
        <UploadButton multiple minItemSize={5000} onError={handleError} onFilesChanged={handleChoice} tooltip='Min item size 5000 bytes' />
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h6' color='error'>
          {error?.message}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='body1' color='error'>
          {error?.files && (error.files |> map(prop('name')) |> join('; '))}
        </Typography>
      </Grid>
    </Grid>
  )
}
