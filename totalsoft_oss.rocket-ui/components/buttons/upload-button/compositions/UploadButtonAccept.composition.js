import React, { useCallback, useState } from 'react'
import Grid from '@mui/material/Grid'
import UploadButton from '../UploadButton'
import Typography from '@totalsoft_oss/rocket-ui.components.data-display.typography'
import CollapseCard from '@totalsoft_oss/rocket-ui.components.surfaces.collapse-card'

export const UploadButtonAccept = () => {
  const [error, setError] = useState()
  const handleError = useCallback(err => setError(err), [])
  const handleChoice = useCallback(() => setError(null), [])

  return (
    <CollapseCard
      defaultExpanded
      title='Upload Button Accept'
      content={
        <Grid container spacing={3}>
          <Grid item>
            <UploadButton onFilesChanged={handleChoice} tooltip='All files (default)' />
          </Grid>
          <Grid item>
            <UploadButton accept='image/*' onError={handleError} onFilesChanged={handleChoice} tooltip='Images' />
          </Grid>
          <Grid item>
            <UploadButton accept='video/*' onError={handleError} onFilesChanged={handleChoice} tooltip='Videos' />
          </Grid>
          <Grid item>
            <UploadButton accept='audio/*' onError={handleError} onFilesChanged={handleChoice} tooltip='Audios' />
          </Grid>
          <Grid item>
            <UploadButton accept='.pdf,.txt' onError={handleError} onFilesChanged={handleChoice} tooltip='Custom (*.pdf, *.txt)' />
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h6' color='error'>
              {error?.message}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='body1' color='error'>
              {error?.files?.[0]?.name}
            </Typography>
          </Grid>
        </Grid>
      }
    />
  )
}
