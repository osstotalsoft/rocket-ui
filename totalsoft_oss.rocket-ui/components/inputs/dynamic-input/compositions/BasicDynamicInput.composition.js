import React, { useState } from 'react'
import DynamicInput from '../DynamicInput'
import Typography from '@totalsoft_oss/rocket-ui.components.data-display.typography'
import CollapseCard from '@totalsoft_oss/rocket-ui.components.surfaces.collapse-card'
import Grid from '@mui/material/Grid'
import ColumnHeader from '../ColumnHeader'

const options = [{ value: 'first option' }, { value: 'second option' }, { value: 'third option' }]

const loadOptions = async () => {
  return new Promise(res => res(options))
}

export const BasicDynamicInput = () => {
  const [intValue, setIntValue] = useState()
  const [numValue, setNumValue] = useState()
  const [strValue, setStrValue] = useState()
  const [comboValue, setComboValue] = useState()
  const [vComboValue, setVComboValue] = useState()
  const [boolValue, setBoolValue] = useState(false)
  const [, setNoControlTypeValue] = useState()

  return (
    <CollapseCard
      defaultExpanded
      title='Dynamic Input'
      content={
        <Grid container spacing={2}>
          <Grid item xs={12} container spacing={4}>
            <Grid item xs={3}>
              <ColumnHeader>{'Component'}</ColumnHeader>
            </Grid>
            <Grid item xs={3}>
              <ColumnHeader>{'Control type'}</ColumnHeader>
            </Grid>
            <Grid item xs={3}>
              <ColumnHeader>{'Value'}</ColumnHeader>
            </Grid>
          </Grid>
          <Grid item xs={12} container spacing={4}>
            <Grid item xs={3}>
              <DynamicInput controlType={'INT'} value={intValue} onChange={setIntValue} />
            </Grid>
            <Grid item xs={3}>
              <Typography>{'INT'}</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography>{intValue}</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} container spacing={4}>
            <Grid item xs={3}>
              <DynamicInput controlType={'NUM'} value={numValue} onChange={setNumValue} />
            </Grid>
            <Grid item xs={3}>
              <Typography>{'NUM'}</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography>{numValue}</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} container spacing={4}>
            <Grid item xs={3}>
              <DynamicInput controlType={'STR'} value={strValue ?? ''} onChange={setStrValue} />
            </Grid>
            <Grid item xs={3}>
              <Typography>{'STR'}</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography>{strValue}</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} container spacing={4}>
            <Grid item xs={3}>
              <DynamicInput controlType={'CLST'} value={comboValue} onChange={setComboValue} loadOptions={loadOptions} />
            </Grid>
            <Grid item xs={3}>
              <Typography>{'CLST'}</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography>{comboValue}</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} container spacing={4}>
            <Grid item xs={3}>
              <DynamicInput controlType={'VCLST'} value={vComboValue} onChange={setVComboValue} loadOptions={loadOptions} />
            </Grid>
            <Grid item xs={3}>
              <Typography>{'VCLST'}</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography>{vComboValue}</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} container spacing={4}>
            <Grid item xs={3}>
              <DynamicInput controlType={'BOOL'} value={boolValue} onChange={setBoolValue} />
            </Grid>
            <Grid item xs={3}>
              <Typography>{'BOOL'}</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography>{boolValue?.toString()}</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} container spacing={4}>
            <Grid item xs={3}>
              <DynamicInput onChange={setNoControlTypeValue} />
            </Grid>
            <Grid item xs={3}>
              <Typography>{'-'}</Typography>
            </Grid>
          </Grid>
        </Grid>
      }
    />
  )
}
