import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Autocomplete from '../Autocomplete'
import CollapseCard from '@totalsoft_oss/rocket-ui.components.surfaces.collapse-card'
import { options } from '../common/mocks'

export const TextFieldProps = () => {
  const [requiredValue, setRequiredValue] = useState()
  const [errorValue, setErrorValue] = useState()
  const [helperValue, setHelperValue] = useState()

  return (
    <CollapseCard
      defaultExpanded
      title='Text field props'
      content={
        <Grid container spacing={2}>
          <Grid item xs={12} container spacing={4}>
            <Grid item xs={3}>
              <Autocomplete required label='Required' value={requiredValue} onChange={setRequiredValue} options={options} />
            </Grid>
            <Grid item xs={3}>
              <Autocomplete error label='Error' value={errorValue} onChange={setErrorValue} options={options} />
            </Grid>
            <Grid item xs={3}>
              <Autocomplete
                helperText='Please, select an option.'
                label='Helper text'
                value={helperValue}
                onChange={setHelperValue}
                options={options}
              />
            </Grid>
            <Grid item xs={3}>
              <Autocomplete
                label='Variant outlined'
                value={helperValue}
                onChange={setHelperValue}
                options={options}
                inputTextFieldProps={{ variant: 'outlined' }}
              />
            </Grid>
          </Grid>
        </Grid>
      }
    />
  )
}
