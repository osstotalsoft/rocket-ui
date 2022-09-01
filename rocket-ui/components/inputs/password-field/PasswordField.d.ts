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
 * - https://bit.cloud/totalsoft_oss/rocket-ui/components/inputs/password-field
 *
 *  Take a look over the code for further information: https://github.com/osstotalsoft/rocket-ui/tree/main/rocket-ui/components/inputs/password-field
 * 
 * Bit component used:
 * 
 * - TextField: https://bit.cloud/totalsoft_oss/rocket-ui/components/inputs/text-field
 * 
 */

export default function PasswordField(props: PasswordFieldProps): JSX.Element
