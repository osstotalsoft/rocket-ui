import React from 'react'
import Button from '../Button'
import Grid from '@mui/material/Grid'

const tooltip = 'I have a tooltip'
const disabledButtonProps = { disabled: true, tooltip, size: 'small' }

export const ButtonFunctionalities = () => {
  return (
    <Grid container spacing={3}>
      <Grid item>
        <Button tooltip={tooltip} size='small'>
          Hover
        </Button>
      </Grid>
      <Grid item>
        <Button {...disabledButtonProps}>contained and disabled</Button>
      </Grid>
      <Grid item>
        <Button {...disabledButtonProps} variant='text'>
          text and disabled
        </Button>
      </Grid>
      <Grid item>
        <Button {...disabledButtonProps} variant='outlined'>
          outlined and disabled
        </Button>
      </Grid>
    </Grid>
  )
}
