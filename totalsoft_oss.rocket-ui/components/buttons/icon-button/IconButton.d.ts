import { ButtonProps } from '@totalsoft_oss/rocket-ui.components.buttons.button'

export interface IconButtonProps extends Omit<ButtonProps, 'color' | 'type'> {
  /**
   * @default 'secondary'
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
 * - https://bit.cloud/totalsoft_oss/rocket-ui/components/buttons/icon-button
 *
 *  Take a look over the code for further information: https://github.com/osstotalsoft/rocket-ui/tree/main/rocket-ui/components/buttons/icon-button
 *
 * Bit component used:
 *
 * - Button: https://bit.cloud/totalsoft_oss/rocket-ui/components/buttons/button
 *
 */

export default function IconButton(props: IconButtonProps): JSX.Element
