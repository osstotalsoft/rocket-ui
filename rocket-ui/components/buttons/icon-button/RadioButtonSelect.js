import React from 'react'
import PropTypes from 'prop-types'
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material'
import Typography from '@totalsoft_oss/rocket-ui.components.data-display.typography'

const RadioButtonSelect = ({ label, options, value, valueKey = 'id', labelKey = 'name', onSelect }) => {
  return (
    <FormControl>
      <FormLabel id='radio-group-label'>
        <Typography variant='body2' emphasis='bold'>
          {label}
        </Typography>
      </FormLabel>
      <RadioGroup row aria-labelledby='radio-group-label' name='radio-buttons-group' value={value || ''}>
        {options?.map(o => (
          <FormControlLabel
            key={o[valueKey]}
            value={o[valueKey]}
            control={<Radio />}
            label={<Typography variant='body2'>{o[labelKey]}</Typography>}
            onClick={onSelect}
          />
        ))}
      </RadioGroup>
    </FormControl>
  )
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
