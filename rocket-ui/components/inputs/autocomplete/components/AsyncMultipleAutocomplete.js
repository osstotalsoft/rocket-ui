import React from 'react'
import PropTypes from 'prop-types'
import Autocomplete from '../Autocomplete'
import { loadOptions } from '../common/mocks'

const AsyncMultipleAutocomplete = ({ value, onChange, simpleValue, creatable, isClearable, ...rest }) => {
  return (
    <Autocomplete
      label={'Multiple Autocomplete'}
      isMultiSelection
      loadOptions={loadOptions}
      creatable={creatable}
      simpleValue={simpleValue}
      isClearable={isClearable}
      createdLabel='Add'
      onChange={onChange}
      value={value}
      {...rest}
    />
  )
}

AsyncMultipleAutocomplete.propTypes = {
  value: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  simpleValue: PropTypes.bool,
  creatable: PropTypes.bool,
  isClearable: PropTypes.bool
}

export default AsyncMultipleAutocomplete
