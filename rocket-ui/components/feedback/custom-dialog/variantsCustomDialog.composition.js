import React, { useCallback, useState } from 'react'
import { Grid, Button } from '@mui/material'
import BasicCustomDialog from './components/BasicCustomDialog'
import TextCustomDialog from './components/TextCustomDialog'
import TransparentCustomDialog from './components/TransparentCustomDialog'
import DividersCustomDialog from './components/DividersCustomDialog'
import CollapseCard from '@totalsoft_oss/rocket-ui.components.surfaces.collapse-card'

export const CustomDialogVariants = () => {
  const [basic, showBasic] = useState(false)
  const toggleBasic = useCallback(() => showBasic(current => !current), [])

  const [text, showText] = useState(false)
  const toggleText = useCallback(() => showText(current => !current), [])

  const [transparent, showTransparent] = useState(false)
  const toggleTransparent = useCallback(() => showTransparent(current => !current), [])

  const [dividers, showDividers] = useState(false)
  const toggleDividers = useCallback(() => showDividers(current => !current), [])

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
              <Button variant='outlined' onClick={toggleDividers}>
                {'dividers = {true}'}
              </Button>
            </Grid>
          </Grid>
          <BasicCustomDialog open={basic} onClose={toggleBasic} />
          <TextCustomDialog open={text} onClose={toggleText} />
          <TransparentCustomDialog open={transparent} onClose={toggleTransparent} />
          <DividersCustomDialog open={dividers} onClose={toggleDividers} />
        </>
      }
    />
  )
}
