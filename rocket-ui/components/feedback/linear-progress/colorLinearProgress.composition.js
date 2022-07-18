import React, { useEffect, useRef, useState } from 'react'
import { Grid } from '@mui/material'
import LinearProgress from './LinearProgress'
import Typography from '@totalsoft_oss/rocket-ui.components.data-display.typography'
import CollapseCard from '@totalsoft_oss/rocket-ui.components.surfaces.collapse-card'

export const LinearProgressColor = () => {
  const [progress, setProgress] = useState(0)

  const progressRef = useRef(() => {})
  useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0)
      } else {
        const diff = Math.random() * 10
        setProgress(progress + diff)
      }
    }
  })

  useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current()
    }, 500)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <CollapseCard
      defaultExpanded
      title='Linear Progress colors'
      content={
        <Grid container rowSpacing={2} columnSpacing={4}>
          <Grid item sm={4}>
            <Typography textAlign={'center'}>{'primary'}</Typography>
            <LinearProgress color={'primary'} />
          </Grid>
          <Grid item sm={4}>
            <Typography textAlign={'center'}>{'warning'}</Typography>
            <LinearProgress color={'warning'} />
          </Grid>
          <Grid item sm={4}>
            <Typography textAlign={'center'}>{'error'}</Typography>
            <LinearProgress color={'error'} />
          </Grid>
          <Grid item sm={4}>
            <Typography textAlign={'center'}>{'success'}</Typography>
            <LinearProgress color={'success'} />
          </Grid>
          <Grid item sm={4}>
            <Typography textAlign={'center'}>{'info'}</Typography>
            <LinearProgress color={'info'} />
          </Grid>
          <Grid item sm={4}>
            <Typography textAlign={'center'}>{'rose'}</Typography>
            <LinearProgress color={'rose'} />
          </Grid>
          <Grid item sm={4}>
            <Typography textAlign={'center'}>{'grey'}</Typography>
            <LinearProgress color={'grey'} />
          </Grid>
        </Grid>
      }
    />
  )
}
