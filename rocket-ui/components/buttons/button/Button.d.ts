import { ButtonProps as MuiButtonProps } from '@mui/material'

export interface ButtonProps extends Omit<MuiButtonProps, 'color' | 'size'> {
  /**
   * The color of the button.
   */
  color?:
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
    | 'rose'
    | 'default'
    | 'white'
    | 'dark'
    | 'transparent'
    | 'inherit'
  /**
   * If true, rounded corners are enabled.
   */
  round?: boolean
  /**
   * If true,  the button's min width will be set to 160px.
   */
  wd?: boolean
  /**
   * If true, the button will be smaller.
   */
  justIcon?: boolean
  /**
   * If true, the button will float to the right.
   */
  right?: boolean
  /**
   * The size of the button.
   */
  size?: 'tiny' | 'small' | 'medium' | 'large'
  /**
   * The tooltip of the button.
   */
  tooltip?: string
  /**
   * If true, button is in loading state.
   */
  loading?: boolean
  /**
   * @default true
   * If true, button text is capitalized.
   */
  capitalize?: boolean
  /**
   * If true, a gradient background is applied.
   */
  gradient?: boolean
}

/**
 *
 * Demos:
 *
 * - https://bit.cloud/totalsoft_oss/rocket-ui/components/buttons/button
 *
 *   Take a look over the code for further information: https://github.com/osstotalsoft/rocket-webapp-components/blob/master/components/Button/Button.js
 *
 * Material-UI components used:
 *
 * - Button: https://mui.com/material-ui/api/button/
 * - LoadingButton: https://mui.com/material-ui/api/loading-button/
 *
 */

export default function Button(props: ButtonProps): JSX.Element
