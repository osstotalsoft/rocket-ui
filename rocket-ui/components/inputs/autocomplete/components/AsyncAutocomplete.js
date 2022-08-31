import React from 'react'
import PropTypes from 'prop-types'
import Autocomplete from '../Autocomplete'
import { loadFilteredOptions } from '../common/mocks'

const AsyncAutocomplete = ({ value, onChange, simpleValue, creatable, isClearable, ...rest }) => {
  return (
    <Autocomplete
      label={'Async Autocomplete'}
      loadOptions={loadFilteredOptions}
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

AsyncAutocomplete.propTypes = {
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  simpleValue: PropTypes.bool.isRequired,
  creatable: PropTypes.bool.isRequired,
  isClearable: PropTypes.bool
}

export default AsyncAutocomplete
