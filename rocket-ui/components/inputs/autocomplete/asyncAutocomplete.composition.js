import React, { useState } from 'react'
import { Grid } from '@mui/material'
import AsyncAutocomplete from './components/AsyncAutocomplete'
import AsyncMultipleAutocomplete from './components/AsyncMultipleAutocomplete'
import ColumnHeader from './components/ColumnHeader'
import ControlledCheckbox from './components/ControlledCheckBox'
import FormattedJson from './common/FormattedJson'
import CollapseCard from '@totalsoft_oss/rocket-ui.components.surfaces.collapse-card'

export const BasicAsyncAutocomplete = () => {
  const [basicValue, setBasicValue] = useState()
  const [simpleValueBasic, setSimpleValueBasic] = useState(false)
  const [creatableBasic, setCreatableBasic] = useState(false)

  const [multiValue, setMultiValue] = useState([])
  const [simpleValueMultiple, setSimpleValueMultiple] = useState(false)
  const [creatableMultiple, setCreatableMultiple] = useState(false)

  return (
    <CollapseCard
      defaultExpanded
      title='Async Autocomplete playground'
      content={
        <Grid container spacing={2}>
          <Grid item xs={12} container spacing={4}>
            <Grid item xs={3}>
              <ColumnHeader>{'Component'}</ColumnHeader>
            </Grid>
            <Grid item xs={3}>
              <ColumnHeader>{'Type'}</ColumnHeader>
            </Grid>
            <Grid item xs={3}>
              <ColumnHeader>{'Value'}</ColumnHeader>
            </Grid>
          </Grid>
          <Grid item xs={12} container spacing={4}>
            <Grid item xs={3}>
              <AsyncAutocomplete
                simpleValue={simpleValueBasic}
                creatable={creatableBasic}
                isClearable={true}
                value={basicValue}
                onChange={setBasicValue}
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <ControlledCheckbox value={simpleValueBasic} onChange={setSimpleValueBasic} label={'simpleValue'} />
              <ControlledCheckbox value={creatableBasic} onChange={setCreatableBasic} label={'creatable'} />
            </Grid>
            <Grid item xs={3}>
              <FormattedJson>{basicValue}</FormattedJson>
            </Grid>
          </Grid>
          <Grid item xs={12} container spacing={4}>
            <Grid item xs={3}>
              <AsyncMultipleAutocomplete
                simpleValue={simpleValueMultiple}
                creatable={creatableMultiple}
                isClearable={true}
                value={multiValue}
                onChange={setMultiValue}
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <ControlledCheckbox value={simpleValueMultiple} onChange={setSimpleValueMultiple} label={'simpleValue'} />
              <ControlledCheckbox value={creatableMultiple} onChange={setCreatableMultiple} label={'creatable'} />
            </Grid>
            <Grid item xs={3}>
              <FormattedJson>{multiValue}</FormattedJson>
            </Grid>
          </Grid>
        </Grid>
      }
    />
  )
}
