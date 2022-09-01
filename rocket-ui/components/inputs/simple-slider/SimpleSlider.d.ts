import { SliderProps } from '@mui/material'

export interface SimpleSliderProps extends Omit<SliderProps, 'onChange'> {
  /**
   * The value of the label.
   */
  label?: string
  /**
   * Callback function that is fired when the slider's value changed.
   */
  onChange?: (value: number) => void
  /**
   * If true, the component will take up the full width of its container.
   */
  fullWidth?: boolean
  /**
   * If true, the error styles are applied.
   */
  error?: boolean
  /**
   * The helper text content.
   */
  helperText?: string
  /**
   * If true, the label is displayed as required.
   */
  required?: boolean
  /**
   * The number of decimals to be displayed
   */
  decimalScale?: number
  /**
   * Add thousand separators on number; single character string or boolean true
   */
  thousandSeparator?: boolean | string
  /**
   * Character that separates decimals from integers.
   */
  decimalSeparator?: string
  /**
   * If true, the slider limits will be displayed
   */
  showSliderLimits?: boolean
}

/**
 * Demos:
 *
 * - https://bit.dev/totalsoft_oss/react-mui/simple-slider
 *
 *  Take a look over the code for further information: https://github.com/osstotalsoft/rocket-webapp-components/blob/master/components/SimpleSlider/SimpleSlider.js
 *
 * Material-UI component used:
 *
 * - Slider: https://mui.com/api/slider/
 *
 */

export default function SimpleSlider(props: SimpleSliderProps): JSX.Element
