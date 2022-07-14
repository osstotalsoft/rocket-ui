import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import IconButton from '@totalsoft_oss/rocket-ui.components.buttons.icon-button'
import TextField from '@totalsoft_oss/rocket-ui.components.inputs.text-field'
import { InputAdornment, Tooltip } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

const getIcon = showPassword => (showPassword ? <Visibility /> : <VisibilityOff />)

const PasswordField = ({ showPasswordText, hidePasswordText, disabled, error, ...rest }) => {
  const [showPassword, setShowPassword] = useState(false)
  const tooltip = showPassword ? hidePasswordText : showPasswordText

  const handleClickShowPassword = useCallback(_ => {
    setShowPassword(current => !current)
  }, [])

  const handleMouseDownPassword = useCallback(event => {
    event.preventDefault()
  }, [])

  return (
    <TextField
      disabled={disabled}
      error={error}
      {...rest}
      inputProps={{
        type: showPassword ? 'text' : 'password'
      }}
      endAdornment={
        <InputAdornment position='end'>
          <IconButton
            disabled={disabled}
            size='small'
            aria-label='toggle password visibility'
            color={error ? 'error' : 'secondary'}
            variant='text'
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
          >
            {disabled ? getIcon(showPassword) : <Tooltip title={tooltip}>{getIcon(showPassword)}</Tooltip>}
          </IconButton>
        </InputAdornment>
      }
    />
  )
}

PasswordField.defaultProps = {
  hidePasswordText: 'Hide password',
  showPasswordText: 'Show password'
}

PasswordField.propTypes = {
  /**
   * Text to be displayed on tooltip when the user wants to hide the password.
   */
  hidePasswordText: PropTypes.string,
  /**
   * Text to be displayed on tooltip when the user wants to show the password.
   */
  showPasswordText: PropTypes.string,
  /**
   * If true, the component is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If true, the text field and icon are displayed in an error state.
   */
  error: PropTypes.bool
}

export default PasswordField
