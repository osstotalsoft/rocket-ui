import React, { useCallback, useState } from 'react'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import BasicDialogDisplay from '../components/BasicDialogDisplay'
import TextDialogDisplay from '../components/TextDialogDisplay'
import DividersDialogDisplay from '../components/DividersDialogDisplay'
import TransparentDialogDisplay from '../components/TransparentDialogDisplay'
import ActionsDialogDisplay from '../components/ActionsDialogDisplay'
import CollapseCard from '@totalsoft_oss/rocket-ui.components.surfaces.collapse-card'

export const DialogDisplayVariants = () => {
  const [basic, showBasic] = useState(false)
  const toggleBasic = useCallback(() => showBasic(current => !current), [])

  const [text, showText] = useState(false)
  const toggleText = useCallback(() => showText(current => !current), [])

  const [transparent, showTransparent] = useState(false)
  const toggleTransparent = useCallback(() => showTransparent(current => !current), [])

  const [dividers, showDividers] = useState(false)
  const toggleDividers = useCallback(() => showDividers(current => !current), [])

  const [actions, showActions] = useState(false)
  const toggleActions = useCallback(() => showActions(current => !current), [])

  return (
    <CollapseCard
      defaultExpanded
      title='Dialogs'
      content={
        <>
          <Grid container rowSpacing={2} columnSpacing={3}>
            <Grid item>
              <Button variant='outlined' onClick={toggleBasic}>
                {'basic dialog'}
              </Button>
            </Grid>
            <Grid item>
              <Button variant='outlined' onClick={toggleText}>
                {'text dialog'}
              </Button>
            </Grid>
            <Grid item>
              <Button variant='outlined' onClick={toggleTransparent}>
                {'transparent backdrop'}
              </Button>
            </Grid>
            <Grid item>
              <Button variant='outlined' onClick={toggleActions}>
                {'with actions and disabled backdrop click'}
              </Button>
            </Grid>
            <Grid item>
              <Button variant='outlined' onClick={toggleDividers}>
                {'dividers = {true}'}
              </Button>
            </Grid>
          </Grid>
          <BasicDialogDisplay open={basic} onClose={toggleBasic} />
          <TextDialogDisplay open={text} onClose={toggleText} />
          <TransparentDialogDisplay open={transparent} onClose={toggleTransparent} />
          <DividersDialogDisplay open={dividers} onClose={toggleDividers} />
          <ActionsDialogDisplay open={actions} onClose={toggleActions} />
        </>
      }
    />
  )
}
