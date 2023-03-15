import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import TextField from '@totalsoft_oss/rocket-ui.components.inputs.text-field'
import Autocomplete from '@totalsoft_oss/rocket-ui.components.inputs.autocomplete'
import Switch from '@mui/material/Switch'

const BoolField = props => <Switch {...props} />

const IntegerField = props => <TextField isNumeric={true} fullWidth inputProps={{ decimalScale: 0, thousandSeparator: false }} {...props} />

const NumericField = props => <TextField isNumeric fullWidth {...props} />

const StringField = props => <TextField fullWidth {...props} />

const ComboField = props => <Autocomplete fullWidth labelKey='value' valueKey='value' simpleValue {...props} />

const DefaultField = ({ DefaultComp = TextField, onChange, ...other }) => {
  const onInputChange = useCallback(
    event => {
      onChange(event.target.value)
    },
    [onChange]
  )

  return <DefaultComp onChange={onInputChange} {...other} />
}

DefaultField.propTypes = {
  onChange: PropTypes.func,
  DefaultComp: PropTypes.func
}

const DynamicInput = ({
  controlType,
  onChange,
  loadOptions,
  value,
  DefaultComp,
  defaultCompProps = { fullWidth: true, disabled: true },
  ...other
}) => {
  const onCheckboxPropertyChange = useCallback(
    (_, inputValue) => {
      onChange(inputValue)
    },
    [onChange]
  )

  switch (controlType) {
    case 'INT':
      return <IntegerField value={value ?? ''} onChange={onChange} {...other} />
    case 'NUM':
      return <NumericField value={value ?? ''} onChange={onChange} {...other} />
    case 'STR':
      return <StringField value={value ?? ''} onChange={onChange} {...other} />
    case 'CLST':
    case 'VCLST':
      return <ComboField value={value} onChange={onChange} loadOptions={loadOptions} {...other} />
    case 'BOOL':
      return <BoolField checked={value ?? false} onChange={onCheckboxPropertyChange} {...other} />
    default:
      return <DefaultField DefaultComp={DefaultComp} value={value ?? ''} onChange={onChange} {...defaultCompProps} />
  }
}

DynamicInput.propTypes = {
  /**
   * The type of control.
   */
  controlType: PropTypes.oneOf(['INT', 'NUM', 'STR', 'CLST', 'VCLST', 'BOOL']),
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Function that returns a promise, which is the set of options to be used once the promise resolves.
   */
  loadOptions: PropTypes.func,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: PropTypes.any,
  /**
   * The default component.
   */
  DefaultComp: PropTypes.func,
  /**
   * @default '{ fullWidth: true, disabled: true }'
   * The props of the default component.
   */
  defaultCompProps: PropTypes.object
}

export default DynamicInput
