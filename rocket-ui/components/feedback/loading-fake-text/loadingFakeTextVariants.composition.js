import React from 'react'
import LoadingFakeText from './LoadingFakeText'
import CollapseCard from '@totalsoft_oss/rocket-ui.components.surfaces.collapse-card'
import { Grid, Typography } from '@mui/material'

export const FakeTextVariants = () => {
  return (
    <CollapseCard
      defaultExpanded
      title='Loading Fake Text variants:'
      content={
        <Grid container rowSpacing={2} columnSpacing={4}>
          <Grid item sm={4}>
            <Typography textAlign={'center'}>{'text'}</Typography>
            <LoadingFakeText lines={4} />
          </Grid>
          <Grid item sm={4} align='center'>
            <Typography textAlign={'center'}>{'circular '}</Typography>
            <LoadingFakeText variant={'circular'} width={80} height={80} />
          </Grid>
          <Grid item sm={4}>
            <Typography textAlign={'center'}>{'rectangular '}</Typography>
            <LoadingFakeText variant={'rectangular'} height={80} />
          </Grid>
        </Grid>
      }
    />
  )
}
