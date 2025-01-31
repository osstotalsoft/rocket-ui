import { LinearProgressProps as MuiLinearProgressProps } from '@mui/material'
import { TypographyProps } from '@totalsoft_oss/rocket-ui.components.data-display.typography'

export interface LinearProgressProps extends Omit<MuiLinearProgressProps, 'color'> {
  /**
   *  @default "grey"
   *  Color of the component.
   */
  color?: 'primary' | 'secondary' | 'warning' | 'error' | 'success' | 'info' | 'rose' | 'grey'
  /**
   * Props applied to the label.
   */
  labelProps?: TypographyProps
}

/**
 *
 * Demos:
 *
 * - https://bit.cloud/totalsoft_oss/rocket-ui/components/feedback/linear-progress
 *
 *  Take a look over the code for further information: https://github.com/osstotalsoft/rocket-ui/tree/main/rocket-ui/components/feedback/linear-progress
 *
 * Material-UI component used:
 *
 * - LinearProgress: https://mui.com/material-ui/api/linear-progress/
 *
 */

export default function LinearProgress(props: LinearProgressProps): JSX.Element
