import React from 'react'
import PropTypes from 'prop-types'
import Button from '@totalsoft_oss/rocket-ui.components.buttons.button'
import DialogDisplay from '../DialogDisplay'
import { title, text } from '../mocks'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'

const ActionsDialogDisplay = props => {
  return (
    <DialogDisplay
      id='actions'
      title={title}
      textContent={text}
      maxWidth='sm'
      content={
        <Grid container spacing={2} justifyContent={'center'} sx={{ pt: 3 }}>
          <Grid item xs={10}>
            <TextField label='username' fullWidth />
          </Grid>
          <Grid item xs={10}>
            <TextField label='password' type='password' fullWidth />
          </Grid>
        </Grid>
      }
      actions={
        <>
          <Button onClick={props.onClose} color='primary' variant='contained' size='small'>
            {'cancel'}
          </Button>
          <Button onClick={props.onClose} color='primary' variant='contained' size='small'>
            {'continue'}
          </Button>
        </>
      }
      showX={false}
      disableBackdropClick={true}
      disableEscapeKeyDown={true}
      {...props}
    />
  )
}

ActionsDialogDisplay.propTypes = {
  onClose: PropTypes.func
}

export default ActionsDialogDisplay
