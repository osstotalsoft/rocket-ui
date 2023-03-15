import React from 'react'
import LoadingFakeText from '../LoadingFakeText'
import CollapseCard from '@totalsoft_oss/rocket-ui.components.surfaces.collapse-card'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

export const FakeTextAnimations = () => {
  return (
    <CollapseCard
      defaultExpanded
      title='Loading Fake Text animations:'
      content={
        <Grid container rowSpacing={2} columnSpacing={4}>
          <Grid item sm={4}>
            <Typography textAlign={'center'}>{'wave'}</Typography>
            <LoadingFakeText variant={'text'} animation={'wave'} lines={6} />
          </Grid>
          <Grid item sm={4}>
            <Typography textAlign={'center'}>{'pulse'}</Typography>
            <LoadingFakeText variant={'text'} animation={'pulse'} lines={6} />
          </Grid>
          <Grid item sm={4}>
            <Typography textAlign={'center'}>{'false'}</Typography>
            <LoadingFakeText variant={'text'} animation={false} lines={6} />
          </Grid>
          <Grid item sm={4}>
            <Typography textAlign={'center'}>{'wave'}</Typography>
            <LoadingFakeText variant={'rectangular'} animation={'wave'} height={100} />
          </Grid>
          <Grid item sm={4}>
            <Typography textAlign={'center'}>{'pulse'}</Typography>
            <LoadingFakeText variant={'rectangular'} animation={'pulse'} height={100} />
          </Grid>
          <Grid item sm={4}>
            <Typography textAlign={'center'}>{'false'}</Typography>
            <LoadingFakeText variant={'rectangular'} animation={false} height={100} />
          </Grid>
        </Grid>
      }
    />
  )
}
