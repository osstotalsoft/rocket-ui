/* eslint-disable react/jsx-no-bind */
import React from 'react'
import { Grid } from '@mui/material'
import useToast from './useToast'
import usePromiseToast from './usePromiseToast'
import Button from '@totalsoft_oss/rocket-ui.components.buttons.button'
import CollapseCard from '@totalsoft_oss/rocket-ui.components.surfaces.collapse-card'

export const ToastVariants = () => {
  const addToast = useToast()
  const addPromiseToast = usePromiseToast()

  const resolveAfter3Sec = () => new Promise(resolve => setTimeout(resolve, 3000))

  return (
    <CollapseCard
      defaultExpanded
      title='Variants'
      content={
        <Grid container spacing={2} justifyItems={'flex-start'}>
          <Grid item xs={2}>
            <Button size={'small'} color={'primary'} onClick={() => addToast('This is a success message!', 'success')}>
              {'Success toast'}
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button size={'small'} color={'primary'} onClick={() => addToast('This is an info message!', 'info')}>
              {'Info toast'}
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button size={'small'} color={'primary'} onClick={() => addToast('This is a warning message!', 'warning')}>
              {'Warning toast'}
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button size={'small'} color={'primary'} onClick={() => addToast('This is an error message!', 'error')}>
              {'Error toast'}
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button size={'small'} color={'primary'} onClick={() => addToast('This is a default message!')}>
              {'Default toast'}
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              size={'small'}
              color={'primary'}
              onClick={() => addPromiseToast(resolveAfter3Sec, 'Promise is pending', 'Promise resolved 👌', 'Promise rejected 🤯')}
            >
              {'Promise toast'}
            </Button>
          </Grid>
        </Grid>
      }
    />
  )
}
