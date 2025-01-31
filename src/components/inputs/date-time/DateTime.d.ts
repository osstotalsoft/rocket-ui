import { DesktopDateTimePickerProps, MobileDateTimePickerProps } from '@mui/lab'
import { MuiPickersAdapter } from '@mui/x-date-pickers/internals'
import { TextFieldProps } from '@totalsoft_oss/rocket-ui.components.inputs.text-field'

export interface DateTime<TDate = unknown> extends DesktopDateTimePickerProps<TDate>, MobileDateTimePickerProps<TDate> {
  /** DateIO adapter class function */
  dateAdapter?: new (...args: []) => MuiPickersAdapter<unknown>
  /** Locale for the date library you are using */
  locale?: string | object
  /**
   * @default 'date'
   * Choose the Picker to be displayed between: DateTimePicker, DatePicker, TimePicker, from material ui.
   */
  showPicker?: 'date' | 'dateTime' | 'time'
  /**
   * The props that will be passed down to the TextField component that will act as the `renderInput` for the picker.
   */
  inputProps?: TextFieldProps
  /**
   * @default 'ro'
   * A small sample of ISO format names that will be used to display the date.
   */
  format?: 'de' | 'en-US' | 'fr' | 'ro' | 'ru'
  /**
   * Choose if you want a dedicated button to clear the value from the picker
   */
  clearable?: boolean
  /**
   * This property will be passed to the renderInput
   * If `true`, the label is displayed in an error state.
   */
  error?: boolean
  /**
   * This property will be passed to the renderInput
   * The helper text content.
   */
  helperText?: React.ReactNode
}

/**
 *
 * Demos:
 *
 * - https://bit.cloud/totalsoft_oss/rocket-ui/components/inputs/date-time
 *
 *  Take a look over the code for further information: https://github.com/osstotalsoft/rocket-ui/tree/main/rocket-ui/components/inputs/date-time
 *
 * Material-UI component used:
 *
 * - DatePicker: https://mui.com/api/date-picker/
 * - DateTimePicker: https://mui.com/api/date-time-picker/
 * - TimePicker: https://mui.com/api/time-picker/
 *
 */

export default function DateTime(props: DateTime): JSX.Element
