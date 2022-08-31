import React from 'react'
import PropTypes from 'prop-types'
import { InputAdornment } from '@mui/material'
import { ClearSmallIcon, IconButton } from './DateTimeStyles'

const DateTimeEndAdornment = props => {
  const { isClearable, onClear, onOpen, OpenPickerIcon, disabled } = props
  return (
    <InputAdornment position='end'>
      {isClearable && (
        <IconButton onClick={onClear} disabled={disabled} aria-label='Clear'>
          <ClearSmallIcon />
        </IconButton>
      )}
      <IconButton onClick={onOpen} disabled={disabled} aria-label='Open'>
        <OpenPickerIcon />
      </IconButton>
    </InputAdornment>
  )
}

DateTimeEndAdornment.propTypes = {
  isClearable: PropTypes.bool,
  onClear: PropTypes.func,
  onOpen: PropTypes.func,
  OpenPickerIcon: PropTypes.elementType,
  disabled: PropTypes.bool
}

export default DateTimeEndAdornment
