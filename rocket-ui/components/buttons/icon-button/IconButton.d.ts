import { ButtonProps } from "@totalsoft_oss/rocket-ui.components.buttons.button"

export interface IconButtonProps extends Omit<ButtonProps, 'color' | 'type'> {
  /**
   * @default 'theme'
   * Color of the button
   */
  color?:
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
    | 'rose'
    | 'white'
    | 'dark'
    | 'transparent'
    | 'default'
    | 'inherit'
  /**
   * Custom icon to be displayed
   */
  type?: 'add' | 'cancel' | 'delete' | 'download' | 'downward' | 'edit' | 'view' | 'save' | 'upward'
  /**
   * @default 'small'
   * Size of the icon.
   */
  fontSize?: 'inherit' | 'small' | 'medium' | 'large'
}

/**
 * Demos:
 *
 * - https://bit.dev/totalsoft_oss/react-mui/icon-button
 *
 *  Take a look over the code for further information: https://github.com/osstotalsoft/rocket-webapp-components/blob/master/components/IconButton/IconButton.js
 *
 * Bit component used:
 *
 * - Button: https://bit.dev/totalsoft_oss/react-mui/button
 *
 */

export default function IconButton(props: IconButtonProps): JSX.Element