import { CardHeaderProps as MuiCardHeaderProps } from '@mui/material'

export interface CardHeaderProps extends MuiCardHeaderProps {
  /**
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
 *
 * Material-UI components used:
 *
 * - CardHeader: https://mui.com/material-ui/api/card-header/
 *
 */

export default function CardHeader(props: CardHeaderProps): JSX.Element
