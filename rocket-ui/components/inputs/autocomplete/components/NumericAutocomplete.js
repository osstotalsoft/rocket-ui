import React from 'react'
import Autocomplete from '../Autocomplete'

const NumericAutocomplete = props => {
  return <Autocomplete fullWidth label={'Numeric Autocomplete'} labelKey={'period'} valueKey={'period'} {...props} />
}

export default NumericAutocomplete
