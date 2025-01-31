import React, { useState } from 'react'
import TextField from '../TextField'
import CollapseCard from '@totalsoft_oss/rocket-ui.components.surfaces.collapse-card'
import Grid from '@mui/material/Grid'

export const TextFieldStepper = () => {
  const [stepperValue, setStepperValue] = useState('')
  const [limitedStepperValue, setLimitedStepperValue] = useState('')
  const [customStepValue, setCustomStepValue] = useState('')

  return (
    <CollapseCard
      defaultExpanded
      title='Stepper'
      content={
        <Grid container spacing={4} justifyItems={'flex-start'}>
          <Grid item xs={2}>
            <TextField label='Basic stepper' isStepper={true} value={stepperValue ?? ''} onChange={setStepperValue} decimalScale={0} />
          </Grid>
          <Grid item xs={2}>
            <TextField
              label='Limited stepper (0 to 5)'
              isStepper={true}
              value={limitedStepperValue ?? ''}
              onChange={setLimitedStepperValue}
              decimalScale={0}
              minValue={0}
              maxValue={5}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField label='Custom step value' isStepper={true} step={0.5} value={customStepValue ?? ''} onChange={setCustomStepValue} />
          </Grid>
        </Grid>
      }
    />
  )
}
