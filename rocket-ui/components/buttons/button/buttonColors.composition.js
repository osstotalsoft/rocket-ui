import React from 'react'
import Button from './Button'
import { Grid } from '@mui/material'

const buttonProps = {
  capitalize: false,
  size: 'small'
}

export const ButtonColors = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} container rowSpacing={2} columnSpacing={4}>
        <Grid item xs={3} md={1}>
          <Button color='primary' size='small' {...buttonProps}>
            Primary
          </Button>
        </Grid>
        <Grid item xs={3} md={1}>
          <Button color='primary' gradient {...buttonProps}>
            Primary
          </Button>
        </Grid>
        <Grid item xs={3} md={1}>
          <Button color='primary' variant='outlined' {...buttonProps}>
            Primary
          </Button>
        </Grid>
        <Grid item xs={3} md={1}>
          <Button color='primary' variant='text' {...buttonProps}>
            Primary
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12} container rowSpacing={2} columnSpacing={4}>
        <Grid item xs={3} md={1}>
          <Button color='secondary' {...buttonProps}>
            Secondary
          </Button>
        </Grid>
        <Grid item xs={3} md={1}>
          <Button color='secondary' gradient {...buttonProps}>
            Secondary
          </Button>
        </Grid>
        <Grid item xs={3} md={1}>
          <Button color='secondary' variant='outlined' {...buttonProps}>
            Secondary
          </Button>
        </Grid>
        <Grid item xs={3} md={1}>
          <Button color='secondary' variant='text' {...buttonProps}>
            Secondary
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12} container rowSpacing={2} columnSpacing={4}>
        <Grid item xs={3} md={1}>
          <Button color='secondary' {...buttonProps} disabled>
            Secondary
          </Button>
        </Grid>
        <Grid item xs={3} md={1}>
          <Button color='secondary' gradient {...buttonProps} disabled>
            Secondary
          </Button>
        </Grid>
        <Grid item xs={3} md={1}>
          <Button color='secondary' variant='outlined' {...buttonProps} disabled>
            Secondary
          </Button>
        </Grid>
        <Grid item xs={3} md={1}>
          <Button color='secondary' variant='text' {...buttonProps} disabled>
            Secondary
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12} container rowSpacing={2} columnSpacing={4}>
        <Grid item xs={3} md={1}>
          <Button color='info' {...buttonProps}>
            Info
          </Button>
        </Grid>
        <Grid item xs={3} md={1}>
          <Button color='info' gradient {...buttonProps}>
            Info
          </Button>
        </Grid>
        <Grid item xs={3} md={1}>
          <Button color='info' variant='outlined' {...buttonProps}>
            Info
          </Button>
        </Grid>
        <Grid item xs={3} md={1}>
          <Button color='info' variant='text' {...buttonProps}>
            Info
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12} container rowSpacing={2} columnSpacing={4}>
        <Grid item xs={3} md={1}>
          <Button color='success' {...buttonProps}>
            Success
          </Button>
        </Grid>
        <Grid item xs={3} md={1}>
          <Button color='success' gradient {...buttonProps}>
            Success
          </Button>
        </Grid>
        <Grid item xs={3} md={1}>
          <Button color='success' variant='outlined' {...buttonProps}>
            Success
          </Button>
        </Grid>
        <Grid item xs={3} md={1}>
          <Button color='success' variant='text' {...buttonProps}>
            Success
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12} container rowSpacing={2} columnSpacing={4}>
        <Grid item xs={3} md={1}>
          <Button color='error' {...buttonProps}>
            Error
          </Button>
        </Grid>
        <Grid item xs={3} md={1}>
          <Button color='error' gradient {...buttonProps}>
            Error
          </Button>
        </Grid>
        <Grid item xs={3} md={1}>
          <Button color='error' variant='outlined' {...buttonProps}>
            Error
          </Button>
        </Grid>
        <Grid item xs={3} md={1}>
          <Button color='error' variant='text' {...buttonProps}>
            Error
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12} container rowSpacing={2} columnSpacing={4}>
        <Grid item xs={3} md={1}>
          <Button color='warning' {...buttonProps}>
            Warning
          </Button>
        </Grid>
        <Grid item xs={3} md={1}>
          <Button color='warning' gradient {...buttonProps}>
            Warning
          </Button>
        </Grid>
        <Grid item xs={3} md={1}>
          <Button color='warning' variant='outlined' {...buttonProps}>
            Warning
          </Button>
        </Grid>
        <Grid item xs={3} md={1}>
          <Button color='warning' variant='text' {...buttonProps}>
            Warning
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12} container rowSpacing={2} columnSpacing={4}>
        <Grid item xs={3} md={1}>
          <Button color='rose' {...buttonProps}>
            Rose
          </Button>
        </Grid>
        <Grid item xs={3} md={1}>
          <Button color='rose' gradient {...buttonProps}>
            Rose
          </Button>
        </Grid>
        <Grid item xs={3} md={1}>
          <Button color='rose' variant='outlined' {...buttonProps}>
            Rose
          </Button>
        </Grid>
        <Grid item xs={3} md={1}>
          <Button color='rose' variant='text' {...buttonProps}>
            Rose
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12} container rowSpacing={2} columnSpacing={4}>
        <Grid item xs={3} md={1}>
          <Button color='default' {...buttonProps}>
            Default
          </Button>
        </Grid>
        <Grid item xs={3} md={1}>
          <Button color='default' gradient {...buttonProps}>
            Default
          </Button>
        </Grid>
        <Grid item xs={3} md={1}>
          <Button color='default' variant='outlined' {...buttonProps}>
            Default
          </Button>
        </Grid>
        <Grid item xs={3} md={1}>
          <Button color='default' variant='text' {...buttonProps}>
            Default
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12} container rowSpacing={2} columnSpacing={4}>
        <Grid item xs={3} md={1}>
          <Button color='dark' {...buttonProps}>
            Dark
          </Button>
        </Grid>
        <Grid item xs={3} md={1}>
          <Button color='dark' gradient {...buttonProps}>
            Dark
          </Button>
        </Grid>
        <Grid item xs={3} md={1}>
          <Button color='dark' variant='outlined' {...buttonProps}>
            Dark
          </Button>
        </Grid>
        <Grid item xs={3} md={1}>
          <Button color='dark' variant='text' {...buttonProps}>
            Dark
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12} container rowSpacing={2} columnSpacing={4}></Grid>
      <Grid item xs={12} container rowSpacing={2} columnSpacing={4}>
        <Grid item xs={3} md={1}>
          <Button color='inherit' variant='contained' {...buttonProps}>
            Inherit
          </Button>
        </Grid>
        <Grid item xs={3} md={1} />
        <Grid item xs={3} md={1}>
          <Button color='inherit' variant='outlined' {...buttonProps}>
            Inherit
          </Button>
        </Grid>
        <Grid item xs={3} md={1}>
          <Button color='inherit' variant='text' {...buttonProps}>
            Inherit
          </Button>
        </Grid>
        <Grid item xs={3} md={1} />
      </Grid>
      <Grid item xs={12} container spacing={2}>
        <Grid item xs={3} md={1}>
          <Button color='white' {...buttonProps}>
            White
          </Button>
        </Grid>
        <Grid item xs={3} md={1} />
      </Grid>
    </Grid>
  )
}
