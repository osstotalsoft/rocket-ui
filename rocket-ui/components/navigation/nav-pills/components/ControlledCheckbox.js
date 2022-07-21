import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { FormControlLabel, Checkbox } from '@mui/material'
import Typography from '@totalsoft_oss/rocket-ui.components.data-display.typography'

const ControlledCheckbox = ({ value, onChange, label }) => {
  const handleChange = useCallback(e => onChange(e.target.checked), [onChange])

  return (
    <FormControlLabel
      control={<Checkbox color='primary' size='small' checked={value || false} onChange={handleChange} />}
      disableTypography
      label={
        <Typography color={'textSecondary'} variant={'caption'}>
          {label}
        </Typography>
      }
    />
  )
}

ControlledCheckbox.propTypes = {
  value: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string.isRequired
}

export default ControlledCheckbox
