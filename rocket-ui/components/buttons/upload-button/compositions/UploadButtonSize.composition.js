import React, { useState, useCallback } from 'react'
import { Grid } from '@mui/material'
import UploadButton from '../UploadButton'
import { join, map, prop } from 'ramda'
import Typography from '@totalsoft_oss/rocket-ui.components.data-display.typography'
import CollapseCard from '@totalsoft_oss/rocket-ui.components.surfaces.collapse-card'

export const UploadButtonSize = () => {
  const [error, setError] = useState()
  const handleError = useCallback(err => setError(err), [])
  const handleChoice = useCallback(() => setError(null), [])

  return (
    <CollapseCard
      defaultExpanded
      title='Upload Button Size'
      content={
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
            <UploadButton
              multiple
              maxItemSize={5000}
              onError={handleError}
              onFilesChanged={handleChoice}
              tooltip='Max item size 5000 bytes'
            />
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
            <UploadButton
              multiple
              minItemSize={5000}
              onError={handleError}
              onFilesChanged={handleChoice}
              tooltip='Min item size 5000 bytes'
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h6' color='error'>
              {error?.message}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='body1' color='error'>
              {error?.files && join('; ', map(prop('name'), error.files))}
            </Typography>
          </Grid>
        </Grid>
      }
    />
  )
}
