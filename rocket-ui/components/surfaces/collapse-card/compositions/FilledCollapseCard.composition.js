import React from 'react'
import CollapseCard from '../CollapseCard'
import Button from '@totalsoft_oss/rocket-ui.components.buttons.button'
import IconButton from '@totalsoft_oss/rocket-ui.components.buttons.icon-button'
import Typography from '@totalsoft_oss/rocket-ui.components.data-display.typography'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark'
import { Box, Grid } from '@mui/material'

export const FilledCollapseCard = () => {
  return (
    <CollapseCard
      title='Delivery information'
      variant='filled'
      actions={
        <IconButton key='1' color='info' variant='text' size='small'>
          <QuestionMarkIcon />
        </IconButton>
      }
      content={
        <>
          <Grid container rowSpacing={3} justifyContent='center'>
            <Grid item xs={8}>
              <Typography variant='body1'>Please, fill in with your personal information.</Typography>
            </Grid>
          </Grid>
          <Box mt={3}>
            <Button variant='contained' size='small' color='info'>
              SUBMIT
            </Button>
          </Box>
        </>
      }
    />
  )
}
