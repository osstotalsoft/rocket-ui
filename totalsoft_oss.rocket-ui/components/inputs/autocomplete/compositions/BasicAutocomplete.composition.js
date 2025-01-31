import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import ControlledCheckbox from '../components/ControlledCheckBox'
import BasicAutocomplete from '../components/BasicAutocomplete'
import PrimitiveAutocomplete from '../components/PrimitiveAutocomplete'
import NumericAutocomplete from '../components/NumericAutocomplete'
import FormattedJson from '../common/FormattedJson'
import ColumnHeader from '../components/ColumnHeader'
import { options, primitiveOptions, numericOptions } from '../common/mocks'
import CollapseCard from '@totalsoft_oss/rocket-ui.components.surfaces.collapse-card'

export const Autocomplete = () => {
  const [simpleValueBasic, setSimpleValueBasic] = useState(false)
  const [creatableBasic, setCreatableBasic] = useState(false)
  const [basicValue, setBasicValue] = useState()

  const [simpleValuePrimitive, setSimpleValuePrimitive] = useState(false)
  const [creatablePrimitive, setCreatablePrimitive] = useState(false)
  const [primitiveValue, setPrimitiveValue] = useState()

  const [simpleValueNumeric, setSimpleValueNumeric] = useState(false)
  const [creatableNumeric, setCreatableNumeric] = useState(false)
  const [numericValue, setNumericValue] = useState()

  useEffect(() => setBasicValue(null), [creatableBasic, simpleValueBasic])
  useEffect(() => setPrimitiveValue(null), [simpleValuePrimitive, creatablePrimitive])
  useEffect(() => setNumericValue(null), [simpleValueNumeric, creatableNumeric])

  return (
    <CollapseCard
      defaultExpanded
      title='Single-value Autocomplete playground'
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
              <BasicAutocomplete
                value={basicValue}
                onChange={setBasicValue}
                creatable={creatableBasic}
                simpleValue={simpleValueBasic}
                isClearable={true}
                options={options}
              />
            </Grid>
            <Grid item xs={3} container alignContent={'flex-start'}>
              <ControlledCheckbox value={simpleValueBasic} onChange={setSimpleValueBasic} label={'simpleValue'} />
              <ControlledCheckbox value={creatableBasic} onChange={setCreatableBasic} label={'creatable'} />
            </Grid>
            <Grid item xs={3}>
              <FormattedJson>{basicValue}</FormattedJson>
            </Grid>
          </Grid>
          <Grid item xs={12} container spacing={4}>
            <Grid item xs={3}>
              <PrimitiveAutocomplete
                value={primitiveValue}
                onChange={setPrimitiveValue}
                creatable={creatablePrimitive}
                simpleValue={simpleValuePrimitive}
                isClearable={true}
                options={primitiveOptions}
              />
            </Grid>
            <Grid item xs={3}>
              <ControlledCheckbox value={simpleValuePrimitive} onChange={setSimpleValuePrimitive} label={'simpleValue'} />
              <ControlledCheckbox value={creatablePrimitive} onChange={setCreatablePrimitive} label={'creatable'} />
            </Grid>
            <Grid item xs={3}>
              <FormattedJson>{primitiveValue}</FormattedJson>
            </Grid>
          </Grid>
          <Grid item xs={12} container spacing={4}>
            <Grid item xs={3}>
              <NumericAutocomplete
                value={numericValue}
                onChange={setNumericValue}
                creatable={creatableNumeric}
                simpleValue={simpleValueNumeric}
                options={numericOptions}
                isClearable={true}
              />
            </Grid>
            <Grid item xs={3}>
              <ControlledCheckbox value={simpleValueNumeric} onChange={setSimpleValueNumeric} label={'simpleValue'} />
              <ControlledCheckbox value={creatableNumeric} onChange={setCreatableNumeric} label={'creatable'} />
            </Grid>
            <Grid item xs={3}>
              <FormattedJson>{numericValue}</FormattedJson>
            </Grid>
          </Grid>
        </Grid>
      }
    />
  )
}
