import React from 'react'
import { Grid } from '@mui/material'
import Card from './Card'
import Typography from '@totalsoft_oss/rocket-ui.components.data-display.typography'

const text =
  'Cards are surfaces that display content and actions on a single topic. They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy. Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information.'

export const CardColors = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={4}>
        <Typography variant='subtitle1'>{`<Card color='danger'/>`}</Typography>
        <Card color='danger'>
          <Typography>{text}</Typography>
        </Card>
      </Grid>
      <Grid item xs={6} md={4}>
        <Typography variant='subtitle1'>{`<Card color='info'/>`}</Typography>
        <Card color='info'>
          <Typography>{text}</Typography>
        </Card>
      </Grid>
      <Grid item xs={6} md={4}>
        <Typography variant='subtitle1'>{`<Card color='primary'/>`}</Typography>
        <Card color='primary'>
          <Typography>{text}</Typography>
        </Card>
      </Grid>
      <Grid item xs={6} md={4}>
        <Typography variant='subtitle1'>{`<Card color='rose'/>`}</Typography>
        <Card color='rose'>
          <Typography>{text}</Typography>
        </Card>
      </Grid>
      <Grid item xs={6} md={4}>
        <Typography variant='subtitle1'>{`<Card color='success'/>`}</Typography>
        <Card color='success'>
          <Typography>{text}</Typography>
        </Card>
      </Grid>
      <Grid item xs={6} md={4}>
        <Typography variant='subtitle1'>{`<Card color='warning'/>`}</Typography>
        <Card color='warning'>
          <Typography>{text}</Typography>
        </Card>
      </Grid>
    </Grid>
  )
}
