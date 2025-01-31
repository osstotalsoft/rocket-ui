/* eslint-disable react/jsx-no-bind */
import React from 'react'
import Grid from '@mui/material/Grid'
import useToast from '../useToast'
import Button from '@totalsoft_oss/rocket-ui.components.buttons.button'
import CollapseCard from '@totalsoft_oss/rocket-ui.components.surfaces.collapse-card'
import { Slide, toast } from 'react-toastify'
import ToastContainer from '../ToastContainer'

export const ToastPositions = () => {
  const addToast = useToast()

  return (
    <CollapseCard
      defaultExpanded
      title='Positions'
      content={
        <>
          <Grid container spacing={2} justifyItems={'flex-start'}>
            <Grid item xs={2}>
              <Button
                size={'small'}
                color={'primary'}
                onClick={() => addToast('This is a success message!', toast.TYPE.SUCCESS, Slide, toast.POSITION.TOP_LEFT)}
              >
                {'Top Left Position'}
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                size={'small'}
                color={'primary'}
                onClick={() => addToast('This the default position!', toast.TYPE.INFO, Slide, toast.POSITION.TOP_CENTER)}
              >
                {'Top Center Position'}
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                size={'small'}
                color={'primary'}
                onClick={() => addToast('This is a warning message!', toast.TYPE.WARNING, Slide, toast.POSITION.TOP_RIGHT)}
              >
                {'Top Right Position'}
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                size={'small'}
                color={'primary'}
                onClick={() => addToast('This is an error message!', toast.TYPE.ERROR, Slide, toast.POSITION.BOTTOM_RIGHT)}
              >
                {'Bottom Right Position'}
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                size={'small'}
                color={'primary'}
                onClick={() => addToast('This is a default message!', toast.TYPE.SUCCESS, Slide, toast.POSITION.BOTTOM_CENTER)}
              >
                {'Bottom Center Position'}
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                size={'small'}
                color={'primary'}
                onClick={() => addToast('This is a default message!', toast.TYPE.WARNING, Slide, toast.POSITION.BOTTOM_LEFT)}
              >
                {'Bottom Left Position'}
              </Button>
            </Grid>
          </Grid>
          <ToastContainer theme='colored' />
        </>
      }
    />
  )
}
