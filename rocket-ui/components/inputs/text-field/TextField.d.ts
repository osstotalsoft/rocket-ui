import { StandardTextFieldProps } from '@mui/material'

export interface TextFieldProps extends StandardTextFieldProps {
  /**
   * @default false
   * If `true`, the input will accept only numeric values.
   */
  isNumeric?: boolean
  /**
   * Start adornment of component. (Usually an InputAdornment from Material-UI)
   */
  startAdornment?: React.ReactNode
  /**
   * End adornment of component. (Usually an InputAdornment from Material-UI)
   */
  endAdornment?: React.ReactNode
  /**
   * @default 0
   * The delay of debouncing.
   */
  debounceBy?: number
  /**
   * @default 2
   * If defined, it limits to given decimal scale. Used with `isNumeric` prop.
   */
  decimalScale?: number
  /**
   * @default true
   * If `true`, it add 0s to match given decimalScale. Used with `isNumeric` prop.
   */
  fixedDecimalScale?: boolean
  /**
   * @default true
   * Character that separates thousands from hundreds. Used with `isNumeric` prop.
   */
  thousandSeparator?: string | boolean
  /**
   * @default '.'
   * Character that separates decimals from integers. Used with `isNumeric` prop.
   */
  decimalSeparator?: string
  /**
   * The current language, preferably taken from the i18next (i18.language) or another internationalization library.
   */
  language?: string
  /**
   * The currency that will be displayed as a pre-fix.
   */
  currency?: string
  /**
   * If `true`, a clear button is shown.
   */
  isClearable?: boolean
  /**
   * If `true`, will display `+` and `-` buttons for increasing/decreasing the value.
   */
  isStepper?: boolean
  /**
   * Used together with `isStepper` prop; the value by which the current input increases.
   */
  step?: number
  /**
   * Lower limit for the input.
   */
  minValue?: number
  /**
   * Upper limit for the input.
   */
  maxValue?: number
}

/**
 *
 * Demos:
 *
 * - https://bit.cloud/totalsoft_oss/rocket-ui/components/inputs/text-field
 *
 *  Take a look over the code for further information: https://github.com/osstotalsoft/rocket-ui/tree/main/rocket-ui/components/inputs/text-field
 *
 * Material-UI component used:
 *
 * - TextField: https://material-ui.com/api/text-field/
 *
 */

export default function TextField(props: TextFieldProps): JSX.Element
