import React, { useCallback, useLayoutEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Slider, StyledTextField, FormControl, FormHelperText } from './SimpleSliderStyles'
import { debounce } from 'lodash'

const SimpleSlider = ({
  label,
  fullWidth,
  value: origValue,
  min,
  max,
  onChange: origOnChange,
  error,
  helperText,
  required,
  decimalScale,
  thousandSeparator,
  decimalSeparator,
  disabled,
  showSliderLimits,
  ...other
}) => {
  const [value, setValue] = useState(origValue || null)
  const [validationError, setValidationError] = useState(false)

  useLayoutEffect(() => {
    if (origValue != undefined) setValue(origValue)
  }, [origValue])

  const onSliderChange = useCallback(
    (_, v) => {
      origOnChange ? origOnChange(v) : setValue(v)
    },
    [origOnChange]
  )

  const onTextChanged = useCallback(
    value => {
      if (value >= min && value <= max) {
        onSliderChange(null, value)
        setValidationError(false)
      } else {
        setValidationError(true)
      }
    },
    [min, max, onSliderChange]
  )

  // we need to disable this warning since the useCallback hook is not sure about the dependencies of debounce
  const debouncedOnChange = useCallback(debounce(onTextChanged, 500), [500, onTextChanged]) //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <FormControl fullWidth={fullWidth} error={error} required={required}>
      <StyledTextField
        label={label}
        fullWidth={fullWidth}
        required={required}
        value={value}
        onChange={debouncedOnChange}
        isNumeric
        inputProps={{ decimalScale, thousandSeparator, decimalSeparator }}
        InputProps={{ disableUnderline: true }}
        disabled={disabled}
        error={error || validationError}
      />
      <Slider
        size='small'
        value={value}
        min={min}
        max={max}
        aria-labelledby='continuous-slider'
        onChange={onSliderChange}
        disabled={disabled}
        color={error || validationError ? 'error' : 'primary'}
        marks={
          showSliderLimits && [
            { value: min, label: min.toFixed(decimalScale).toString() },
            { value: max, label: max.toFixed(decimalScale).toString() }
          ]
        }
        {...other}
      />
      {helperText && <FormHelperText error={error}>{helperText}</FormHelperText>}
    </FormControl>
  )
}

SimpleSlider.defaultProps = {
  min: 0,
  max: 100
}

SimpleSlider.propTypes = {
  /**
   * The value of the label.
   */
  label: PropTypes.string,
  /**
   * The value of the slider. For ranged sliders, provide an array with two values.
   */
  value: PropTypes.any,
  /**
   * Callback function that is fired when the slider's value changed.
   */
  onChange: PropTypes.func,
  /**
   * If true, the component will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,
  /**
   * The minimum allowed value of the slider. Should not be equal to max.
   */
  min: PropTypes.number,
  /**
   * The maximum allowed value of the slider. Should not be equal to min.
   */
  max: PropTypes.number,
  /**
   * If true, the error styles are applied.
   */
  error: PropTypes.bool,
  /**
   * The helper text content.
   */
  helperText: PropTypes.string,
  /**
   * If true, the label is displayed as required.
   */
  required: PropTypes.bool,
  /**
   * The number of decimals to be displayed
   */
  decimalScale: PropTypes.number,
  /**
   * Add thousand separators on number; single character string or boolean true
   */
  thousandSeparator: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /**
   * Character that separates decimals from integers.
   */
  decimalSeparator: PropTypes.string,
  /**
   * If true, the slider and input will be disabled
   */
  disabled: PropTypes.bool,
  /**
   * If true, the slider limits will be displayed
   */
  showSliderLimits: PropTypes.bool
}

export default SimpleSlider
