import React from 'react'
import ExpandingText from '../ExpandingText'
import Typography from '@totalsoft_oss/rocket-ui.components.data-display.typography'
import Grid from '@mui/material/Grid'
import CollapseCard from '@totalsoft_oss/rocket-ui.components.surfaces.collapse-card'

const text =
  'Cards are surfaces that display content and actions on a single topic. They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy. Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information.'

export const ExpandingTextCustomizing = () => {
  return (
    <CollapseCard
      defaultExpanded
      title='Customizing and overriding'
      content={
        <Grid container rowSpacing={2}>
          <Grid item>
            <Typography variant='body2' emphasis='bold'>
              Overriding color through the sx prop
            </Typography>
            <ExpandingText text={text} sx={{ color: 'error.main' }} minLength={250} />
          </Grid>
          <Grid item>
            <Typography variant='body2' emphasis='bold'>
              Using custom variants and emphases through textProps
            </Typography>
            <ExpandingText text={text} textProps={{ variant: 'body2', emphasis: 'italic' }} minLength={220} />
          </Grid>
          <Grid item>
            <Typography variant='body2' emphasis='bold'>
              Using custom variants and emphases through buttonProps
            </Typography>
            <ExpandingText text={text} buttonProps={{ variant: 'overline', emphasis: 'bold' }} minLength={250} />
          </Grid>
        </Grid>
      }
    />
  )
}
