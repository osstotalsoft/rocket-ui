import { CardActionsProps as MuiCardActionsProps } from '@mui/material'

export interface CardActionsProps extends MuiCardActionsProps {
  /**
   * Variant to use.
   */
  variant?: 'standard' | 'filled'
  /**
   * Align actions to left or right.
   * @default 'left'
   */
  align?: 'left' | 'right'
}

/**
 *
 * Demos:
 *
 * - https://bit.cloud/totalsoft_oss/rocket-ui/components/surfaces/card-actions
 *
 * Take a look over the code for further information: https://github.com/osstotalsoft/rocket-ui/tree/main/rocket-ui/components/surfaces/card-actions
 *
 * Material-UI components used:
 *
 * - CardActions: https://mui.com/material-ui/api/card-actions/
 *
 */

export default function CardActions(props: CardActionsProps): JSX.Element
