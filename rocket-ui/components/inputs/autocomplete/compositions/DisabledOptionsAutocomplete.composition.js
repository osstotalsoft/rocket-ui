import React, { useState } from 'react'
import { Grid } from '@mui/material'
import Autocomplete from '../Autocomplete'
import CollapseCard from '@totalsoft_oss/rocket-ui.components.surfaces.collapse-card'
import { options, getOptionDisabled } from '../common/mocks'

export const DisabledOptions = () => {
  const [basicValue, setBasicValue] = useState(2)
  const [multiValue, setMultiValue] = useState([1, 2])

  return (
    <CollapseCard
      defaultExpanded
      title='Disabled options'
      content={
        <Grid container spacing={2}>
          <Grid item xs={12} container spacing={4}>
            <Grid item xs={3}>
              <Autocomplete
                simpleValue
                label='Single-value Autocomplete'
                options={options}
                getOptionDisabled={getOptionDisabled}
                value={basicValue}
                onChange={setBasicValue}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} container spacing={4}>
            <Grid item xs={3}>
              <Autocomplete
                isMultiSelection
                isClearable
                simpleValue
                label='Multi-value Autocomplete'
                options={options}
                value={multiValue}
                onChange={setMultiValue}
                getOptionDisabled={getOptionDisabled}
              />
            </Grid>
          </Grid>
        </Grid>
      }
    />
  )
}
