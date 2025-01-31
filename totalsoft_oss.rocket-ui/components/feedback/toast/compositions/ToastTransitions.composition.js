/* eslint-disable react/jsx-no-bind */
import React from 'react'
import Grid from '@mui/material/Grid'
import useToast from '../useToast'
import Button from '@totalsoft_oss/rocket-ui.components.buttons.button'
import CollapseCard from '@totalsoft_oss/rocket-ui.components.surfaces.collapse-card'
import { Bounce, Flip, Slide, Zoom } from 'react-toastify'
import ToastContainer from '../ToastContainer'

export const ToastTransitions = () => {
  const addToast = useToast()

  return (
    <CollapseCard
      defaultExpanded
      title='Transitions'
      content={
        <>
          <Grid container spacing={2} justifyItems={'flex-start'}>
            <Grid item xs={2}>
              <Button size={'small'} color={'primary'} onClick={() => addToast('This is a success message!', 'success', Slide)}>
                {'Slide transition'}
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button size={'small'} color={'primary'} onClick={() => addToast('This is an info message!', 'info', Zoom)}>
                {'Zoom transition'}
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button size={'small'} color={'primary'} onClick={() => addToast('This is a warning message!', 'warning', Bounce)}>
                {'Bounce transition'}
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button size={'small'} color={'primary'} onClick={() => addToast('This is an error message!', 'error', Flip)}>
                {'Flip transition'}
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button size={'small'} color={'primary'} onClick={() => addToast('This is a default message!')}>
                {'Default transition'}
              </Button>
            </Grid>
          </Grid>
          <ToastContainer theme='colored' />
        </>
      }
    />
  )
}
