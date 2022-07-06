import React from 'react'
import ExpandingText from './ExpandingText'
import Typography from '@totalsoft_oss/rocket-ui.components.data-display.typography'
import { Grid } from '@mui/material'

const text =
  'Cards are surfaces that display content and actions on a single topic. They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy. Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information.'

export const ExpandingTextDisplay = () => {
  return (
    <Grid container rowSpacing={2}>
      <Grid item>
        <Typography variant='body2' emphasis='bold'>
          display: inline-block
        </Typography>
        <ExpandingText text={text} display='inline-block' minLength={250} />
      </Grid>
      <Grid item>
        <Typography variant='body2' emphasis='bold'>
          display: block
        </Typography>
        <ExpandingText text={text} display='block' minLength={250} />
      </Grid>
      <Grid item>
        <Typography variant='body2' emphasis='bold'>
          display: flex; justify-content: flex-end
        </Typography>
        <ExpandingText text={text} display='flex' justifyContent='flex-end' minLength={300} />
      </Grid>
    </Grid>
  )
}
