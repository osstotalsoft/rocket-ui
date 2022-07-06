import React, { useState, useCallback } from 'react'
import { Grid } from '@mui/material'
import UploadButton from './UploadButton'
import Typography from '@totalsoft_oss/rocket-ui.components.data-display.typography'
import { head, join, prop, map } from 'ramda'

export const UploadButtonMultiple = () => {
  const [file, setFile] = useState('')
  const [files, setFiles] = useState([])

  const handleFileSelected = useCallback(files => setFile(prop('name', head(files))), [])
  const handleFilesSelected = useCallback(files => setFiles(join('; ', map(prop('name'), files))), [])

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} container spacing={3}>
        <Grid item>
          <UploadButton onFilesChanged={handleFileSelected} tooltip='Select one file (default)' />
        </Grid>
        <Grid item>
          <Typography variant='body1'>{file}</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} container spacing={3}>
        <Grid item>
          <UploadButton multiple onFilesChanged={handleFilesSelected} tooltip='Select multiple files' />
        </Grid>
        <Grid item>
          <Typography variant='body1'>{files}</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
