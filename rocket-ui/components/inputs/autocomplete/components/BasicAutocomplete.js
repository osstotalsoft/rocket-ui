import React from 'react'
import PropTypes from 'prop-types'
import Autocomplete from '../Autocomplete'

const BasicAutocomplete = ({ value, onChange, simpleValue, creatable, isClearable, ...rest }) => {
  return (
    <Autocomplete
      fullWidth
      simpleValue={simpleValue}
      creatable={creatable}
      isClearable={isClearable}
      createdLabel='Add'
      label={'Basic Autocomplete'}
      value={value}
      onChange={onChange}
      {...rest}
    />
  )
}

BasicAutocomplete.propTypes = {
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number, PropTypes.array]),
  onChange: PropTypes.func.isRequired,
  simpleValue: PropTypes.bool.isRequired,
  creatable: PropTypes.bool.isRequired,
  isClearable: PropTypes.bool
}

export default BasicAutocomplete
