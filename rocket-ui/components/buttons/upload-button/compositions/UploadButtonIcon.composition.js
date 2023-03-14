import React from 'react'
import { Grid } from '@mui/material'
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated'
import ImageSearchIcon from '@mui/icons-material/ImageSearch'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload'
import UploadButton from '../UploadButton'
import CollapseCard from '@totalsoft_oss/rocket-ui.components.surfaces.collapse-card'

export const UploadButtonIcon = () => {
  return (
    <CollapseCard
      defaultExpanded
      title='Upload Button Icon'
      content={
        <Grid container spacing={3}>
          <Grid item>
            <UploadButton tooltip='Backup (default)' />
          </Grid>
          <Grid item>
            <UploadButton Icon={BrowserUpdatedIcon} tooltip='BrowserUpdated' />
          </Grid>
          <Grid item>
            <UploadButton Icon={ImageSearchIcon} tooltip='ImageSearch' />
          </Grid>
          <Grid item>
            <UploadButton Icon={DriveFolderUploadIcon} tooltip='DriveFolderUpload' />
          </Grid>
        </Grid>
      }
    />
  )
}
