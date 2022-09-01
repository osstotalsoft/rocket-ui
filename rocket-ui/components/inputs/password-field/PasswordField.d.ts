import { TextFieldProps } from "@totalsoft_oss/rocket-ui.components.inputs.text-field"

export interface PasswordFieldProps extends TextFieldProps {
  /**
   * @default "Hide password"
   * Text to be displayed on tooltip when the user wants to hide the password.
   */
  hidePasswordText?: string
  /**
   * @default "Show password"
   * Text to be displayed on tooltip when the user wants to show the password.
   */
  showPasswordText?: string
}

/**
 * 
 * Demos:
 *
 * - https://bit.dev/totalsoft_oss/react-mui/password-field
 *
 *  Take a look over the code for further information: https://github.com/osstotalsoft/rocket-webapp-components/blob/master/components/PasswordField/PasswordField.js
 * 
 * Bit component used:
 * 
 * - TextField: https://bit.dev/totalsoft_oss/react-mui/custom-text-field
 * 
 */

export default function PasswordField(props: PasswordFieldProps): JSX.Element
