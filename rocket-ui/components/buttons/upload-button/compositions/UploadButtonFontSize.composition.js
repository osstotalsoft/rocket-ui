import React from 'react'
import { Grid } from '@mui/material'
import UploadButton from '../UploadButton'
import CollapseCard from '@totalsoft_oss/rocket-ui.components.surfaces.collapse-card'

export const UploadButtonFontSize = () => {
  return (
    <CollapseCard
      defaultExpanded
      title='Upload Button Font Size'
      content={
        <Grid container spacing={3}>
          <Grid item xs={12} container spacing={3}>
            <Grid item>
              <UploadButton fontSize='inherit' tooltip='inherit' />
            </Grid>
            <Grid item>
              <UploadButton fontSize='small' tooltip='small (default)' />
            </Grid>
            <Grid item>
              <UploadButton fontSize='medium' tooltip='medium' />
            </Grid>
            <Grid item>
              <UploadButton fontSize='large' tooltip='large' />
            </Grid>
          </Grid>
          <Grid item xs={12} container spacing={3}>
            <Grid item>
              <UploadButton disabled fontSize='inherit' tooltip='inherit' />
            </Grid>
            <Grid item>
              <UploadButton disabled fontSize='small' tooltip='small (default)' />
            </Grid>
            <Grid item>
              <UploadButton disabled fontSize='medium' tooltip='medium' />
            </Grid>
            <Grid item>
              <UploadButton disabled fontSize='large' tooltip='large' />
            </Grid>
          </Grid>
        </Grid>
      }
    />
  )
}
