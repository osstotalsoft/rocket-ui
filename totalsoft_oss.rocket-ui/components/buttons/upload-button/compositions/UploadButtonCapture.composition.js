import React from 'react'
import Grid from '@mui/material/Grid'
import UploadButton from '../UploadButton'
import Typography from '@totalsoft_oss/rocket-ui.components.data-display.typography'
import CollapseCard from '@totalsoft_oss/rocket-ui.components.surfaces.collapse-card'

export const UploadButtonCapture = () => {
  return (
    <CollapseCard
      defaultExpanded
      title='Upload Button Capture'
      content={
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant='caption'>
              Note these work better on mobile devices; if your device is a desktop computer, you&#39;ll likely get a typical file picker.
            </Typography>
          </Grid>
          <Grid item>
            <UploadButton accept='image/*' capture='environment' tooltip='Environment Camera Photo' />
          </Grid>
          <Grid item>
            <UploadButton accept='image/*' capture='user' tooltip='User Camera Photo' />
          </Grid>
          <Grid item>
            <UploadButton accept='video/*' capture='environment' tooltip='Environment Camera Video' />
          </Grid>
          <Grid item>
            <UploadButton accept='video/*' capture='user' tooltip='User Camera Video' />
          </Grid>
        </Grid>
      }
    />
  )
}
