import { CardHeaderProps as MuiCardHeaderProps } from '@mui/material'

export interface CardHeaderProps extends MuiCardHeaderProps {
  /**
   * @default 'standard'
   * Variant to use.
   */
  variant?: 'standard' | 'filled'
}

/**
 *
 * Demos:
 *
 * - https://bit.cloud/totalsoft_oss/rocket-ui/components/surfaces/card-header
 *
 * Take a look over the code for further information: https://github.com/osstotalsoft/rocket-ui/tree/main/rocket-ui/components/surfaces/card-header
 *
 * Material-UI components used:
 *
 * - CardHeader: https://mui.com/material-ui/api/card-header/
 *
 */

export default function CardHeader(props: CardHeaderProps): JSX.Element
