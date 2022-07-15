import React from 'react'
import PropTypes from 'prop-types'
import Autocomplete from '../Autocomplete'

const PrimitiveAutocomplete = ({ value, onChange, simpleValue, creatable, isClearable, ...rest }) => {
  return (
    <Autocomplete
      fullWidth
      simpleValue={simpleValue}
      creatable={creatable}
      isClearable={isClearable}
      createdLabel='Add'
      label={'Primitive Autocomplete'}
      value={value}
      onChange={onChange}
      {...rest}
    />
  )
}

PrimitiveAutocomplete.propTypes = {
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.array]),
  onChange: PropTypes.func.isRequired,
  simpleValue: PropTypes.bool,
  creatable: PropTypes.bool,
  isClearable: PropTypes.bool
}

export default PrimitiveAutocomplete
