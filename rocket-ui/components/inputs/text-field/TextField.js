import React, { useCallback, useLayoutEffect, useState } from 'react'
import PropTypes from 'prop-types'
import NumberFormat from 'react-number-format'
import { TextField as MuiTextField, StepButton, classes } from './TextFieldStyles'
import { InputAdornment, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { is, isNil } from 'ramda'
import i18n from 'i18next'
import { debounce } from 'lodash'

const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(props, ref) {
  const {
    value,
    onChange,
    decimalScale = 2,
    fixedDecimalScale = true,
    thousandSeparator = true,
    decimalSeparator,
    language: receivedLanguage,
    currency,
    isStepper,
    minValue,
    maxValue,
    format,
    ...other
  } = props
  const language = receivedLanguage || i18n.language

  const isAllowed = useCallback(
    ({ formattedValue, floatValue, value }) => {
      if (floatValue && floatValue.toString().includes('e')) return false

      if (isNil(floatValue)) {
        return format ? value === '' : formattedValue === ''
      } else {
        return floatValue <= maxValue && floatValue >= minValue
      }
    },
    [maxValue, minValue, format]
  )

  const formatter = new Intl.NumberFormat(language)
  const thousandSep = thousandSeparator === true ? formatter.format(1111).replace(/1/g, '') : thousandSeparator
  const decimalSep = decimalSeparator || formatter.format(1.1).replace(/1/g, '')

  const currencyFormatter = currency && new Intl.NumberFormat(language, { style: 'currency', currency })
  const currencySymbol = currencyFormatter?.format(1).replace(/[\d,.\s]/g, '')

  const valueIsNumericString = is(String, value) && is(Number, Number(value))

  const handleValueChange = useCallback(
    values => {
      format ? onChange(values.value) : onChange(values.floatValue)
    },
    [onChange, format]
  )

  return (
    <NumberFormat
      style={{ textAlign: isStepper ? 'center' : 'right' }}
      value={value}
      getInputRef={ref}
      onValueChange={handleValueChange}
      isAllowed={isAllowed}
      decimalScale={decimalScale}
      fixedDecimalScale={fixedDecimalScale}
      thousandSeparator={thousandSep}
      decimalSeparator={decimalSep}
      prefix={currencySymbol}
      isNumericString={valueIsNumericString}
      format={format}
      {...other}
    />
  )
})

NumberFormatCustom.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  decimalScale: PropTypes.number.isRequired,
  fixedDecimalScale: PropTypes.bool,
  thousandSeparator: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  decimalSeparator: PropTypes.string,
  language: PropTypes.string,
  currency: PropTypes.string,
  isStepper: PropTypes.bool,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  format: PropTypes.string
}

const ClearButton = ({ onClearInput, disabled }) => (
  <InputAdornment position='end'>
    <IconButton disabled={disabled} aria-label='Clear' size='small' onClick={onClearInput}>
      <CloseIcon fontSize='small' />
    </IconButton>
  </InputAdornment>
)
ClearButton.propTypes = {
  onClearInput: PropTypes.func,
  disabled: PropTypes.bool
}

const AddButton = ({ onAdd }) => (
  <InputAdornment position='end'>
    <StepButton onClick={onAdd}>+</StepButton>
  </InputAdornment>
)
AddButton.propTypes = {
  onAdd: PropTypes.func
}

const SubtractButton = ({ onSubtract }) => (
  <InputAdornment position='start'>
    <StepButton onClick={onSubtract}>-</StepButton>
  </InputAdornment>
)
SubtractButton.propTypes = {
  onSubtract: PropTypes.func
}

const TextField = ({
  isNumeric: receivedIsNumeric,
  inputProps,
  InputProps,
  endAdornment,
  startAdornment,
  fullWidth,
  InputLabelProps,
  value,
  onChange = () => {},
  debounceBy = 0,
  decimalScale = 2,
  fixedDecimalScale,
  thousandSeparator,
  decimalSeparator,
  language,
  currency,
  disabled,
  isClearable,
  isStepper = false,
  step = 1,
  minValue = -Infinity,
  maxValue = Infinity,
  variant = 'standard',
  ...rest
}) => {
  const isNumeric = receivedIsNumeric || isStepper
  const handleClearInput = useCallback(() => onChange(''), [onChange])

  const [liveValue, setLiveValue] = useState(value)
  useLayoutEffect(() => {
    setLiveValue(value)
  }, [value])

  // we need to disable this warning since the useCallback hook is not sure about the dependencies of debounce
  const debouncedOnChange = useCallback(disabled ? onChange : debounce(onChange, debounceBy), [debounceBy, onChange]) //eslint-disable-line react-hooks/exhaustive-deps

  const handleSubtract = useCallback(() => {
    const nextValue = !value ? -step : value - step
    nextValue >= minValue && onChange(nextValue)
  }, [minValue, onChange, step, value])

  const handleAdd = useCallback(() => {
    const nextValue = !value ? step : value + step
    nextValue <= maxValue && onChange(nextValue)
  }, [maxValue, onChange, step, value])

  const muiInputProps = {
    startAdornment: isStepper ? <SubtractButton onSubtract={handleSubtract} /> : startAdornment,
    endAdornment: isStepper ? (
      <AddButton onAdd={handleAdd} />
    ) : isClearable ? (
      <ClearButton onClearInput={handleClearInput} disabled={disabled} />
    ) : (
      endAdornment
    ),
    className: `${isStepper && !fullWidth ? classes.stepperFixedWidth : ''}`,
    ...InputProps,
    style: InputProps?.style
  }

  // props applied to the Input element
  const customMuiInputProps = isNumeric
    ? {
        ...muiInputProps,
        inputComponent: NumberFormatCustom
      }
    : muiInputProps

  const numericProps = {
    decimalScale,
    fixedDecimalScale,
    thousandSeparator,
    decimalSeparator,
    language,
    currency,
    isStepper,
    minValue,
    maxValue
  }
  // attributes applied to the input element
  const customReactInputProps = {
    ...(isNumeric && numericProps),
    ...inputProps,
    className: `${classes.input} ${inputProps?.className ? inputProps.className : ''}`
  }

  const handleChange = useCallback(
    e => {
      const value = isNumeric ? e : e.target.value
      setLiveValue(value)
      debouncedOnChange(value)
    },
    [debouncedOnChange, isNumeric]
  )

  return (
    <MuiTextField
      onChange={handleChange}
      value={liveValue}
      fullWidth={fullWidth}
      disabled={disabled}
      variant={variant}
      {...rest}
      InputProps={customMuiInputProps}
      inputProps={customReactInputProps}
      InputLabelProps={{
        className: classes.label,
        ...InputLabelProps
      }}
    />
  )
}

TextField.propTypes = {
  /**
   * @default false
   * If `true`, the input will accept only numeric values.
   */
  isNumeric: PropTypes.bool,
  /**
   * Attributes applied to the input element.
   * For the numeric input, you can provide properties like thousandSeparator, decimalScale and allowNegative.
   */
  inputProps: PropTypes.object,
  /**
   * Other properties you can provide to the Input component.
   */
  InputProps: PropTypes.object,
  /**
   * End adornment of componenent. (Usually an InputAdornment from material-ui)
   */
  endAdornment: PropTypes.node,
  /**
   * Start adornment of componenent. (Usually an InputAdornment from material-ui)
   */
  startAdornment: PropTypes.node,
  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,
  /**
   * Props applied to the InputLabel element.
   */
  InputLabelProps: PropTypes.object,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: PropTypes.any,
  /**
   * @default '() => {}'
   * Callback fired when the value is changed.
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: PropTypes.func,
  /**
   * The delay of debouncing.
   */
  debounceBy: PropTypes.number,
  /**
   * If defined, it limits to given decimal scale.
   */
  decimalScale: PropTypes.number,
  /**
   * If `true`, it add 0s to match given decimalScale.
   */
  fixedDecimalScale: PropTypes.bool,
  /**
   * Character that separates thousands from hundreds.
   */
  thousandSeparator: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /**
   * Character that separates decimals from integers.
   */
  decimalSeparator: PropTypes.string,
  /**
   * The current language, preferably taken from the i18next (i18.language) or another internationalization library.
   */
  language: PropTypes.string,
  /**
   * The currency that will be displayed as a pre-fix.
   */
  currency: PropTypes.string,
  /**
   * If `true`, the component is disabled
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, a clear button is shown.
   */
  isClearable: PropTypes.bool,
  /**
   * @default false
   * If `true`, will display `+` and `-` buttons for increasing/decreasing the value.
   */
  isStepper: PropTypes.bool,
  /**
   * @default 1
   * Used together with `isStepper` prop; the value by which the current input increases.
   */
  step: PropTypes.number,
  /**
   * @default -Infinity
   * Lower limit for the input.
   */
  minValue: PropTypes.number,
  /**
   * @default Infinity
   * Upper limit for the input.
   */
  maxValue: PropTypes.number,
  /**
   * @default 'standard'
   * The variant to use.
   */
  variant: PropTypes.oneOf(['filled', 'standard', 'outlined'])
}

export default TextField
