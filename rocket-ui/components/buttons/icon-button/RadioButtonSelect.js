import React from 'react'
import PropTypes from 'prop-types'
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material'

const RadioButtonSelect = ({ label, options, value, valueKey, labelKey, onSelect }) => {
  return (
    <FormControl>
      <FormLabel id='radio-group-label'>{label}</FormLabel>
      <RadioGroup row aria-labelledby='radio-group-label' name='radio-buttons-group' value={value || ''}>
        {options?.map(o => (
          <FormControlLabel key={o[valueKey]} value={o[valueKey]} control={<Radio />} label={o[labelKey]} onClick={onSelect} />
        ))}
      </RadioGroup>
    </FormControl>
  )
}

RadioButtonSelect.defaultProps = {
  valueKey: 'id',
  labelKey: 'name'
}

RadioButtonSelect.propTypes = {
  value: PropTypes.oneOfType([PropTypes.array, PropTypes.number, PropTypes.string, PropTypes.bool]),
  label: PropTypes.string,
  options: PropTypes.array,
  valueKey: PropTypes.string,
  labelKey: PropTypes.string,
  onSelect: PropTypes.func
}

export default RadioButtonSelect
