import React from 'react'
import { Grid } from '@mui/material'
import { BrowserUpdated, ImageSearch, DriveFolderUpload } from '@mui/icons-material'
import UploadButton from './UploadButton'

export const UploadButtonIcon = () => {
  return (
    <Grid container spacing={3}>
      <Grid item>
        <UploadButton tooltip='Backup (default)' />
      </Grid>
      <Grid item>
        <UploadButton Icon={BrowserUpdated} tooltip='BrowserUpdated' />
      </Grid>
      <Grid item>
        <UploadButton Icon={ImageSearch} tooltip='ImageSearch' />
      </Grid>
      <Grid item>
        <UploadButton Icon={DriveFolderUpload} tooltip='DriveFolderUpload' />
      </Grid>
    </Grid>
  )
}
