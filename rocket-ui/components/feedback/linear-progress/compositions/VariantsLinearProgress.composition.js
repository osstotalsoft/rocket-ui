import React, { useEffect, useRef, useState } from 'react'
import { Grid } from '@mui/material'
import LinearProgress from '../LinearProgress'
import Typography from '@totalsoft_oss/rocket-ui.components.data-display.typography'
import CollapseCard from '@totalsoft_oss/rocket-ui.components.surfaces.collapse-card'

export const LinearProgressVariants = () => {
  const [progress, setProgress] = useState(0)
  const [buffer, setBuffer] = useState(10)

  const progressRef = useRef(() => {})

  useEffect(() => {
    progressRef.current = () => {
      if (progress === 100) {
        setProgress(0)
        setBuffer(10)
      } else {
        const diff = Math.random() * 10
        const diff2 = Math.random() * 10
        setProgress(Math.min(progress + diff, 100))
        setBuffer(Math.min(progress + diff + diff2, 100))
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
      title='Linear Progress variants'
      content={
        <Grid container rowSpacing={2} columnSpacing={4}>
          <Grid item sm={4} align='center'>
            <Typography textAlign={'center'}>{'determinate '}</Typography>
            <LinearProgress variant={'determinate'} value={progress} />
          </Grid>
          <Grid item sm={4}>
            <Typography textAlign={'center'}>{'buffer '}</Typography>
            <LinearProgress variant='buffer' value={progress} valueBuffer={buffer} />
          </Grid>
          <Grid item sm={4}>
            <Typography textAlign={'center'}>{'indeterminate'}</Typography>
            <LinearProgress />
          </Grid>
          <Grid item sm={4} align='center'>
            <Typography textAlign={'center'}>{'determinate with label'}</Typography>
            <LinearProgress variant={'determinate'} value={progress} showLabel />
          </Grid>
          <Grid item sm={4}>
            <Typography textAlign={'center'}>{'buffer with label'}</Typography>
            <LinearProgress variant='buffer' value={progress} valueBuffer={buffer} showLabel />
          </Grid>
        </Grid>
      }
    />
  )
}
