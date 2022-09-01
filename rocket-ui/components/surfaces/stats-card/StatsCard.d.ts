import { SvgIconComponent } from '@mui/icons-material'

export interface StatsCardProps {
  /**
   * Icon to be displayed.
   */
  icon?: React.ElementType<SvgIconComponent>
  /**
   * @default 'info'
   * Icon color.
   */
  iconColor?: 'warning' | 'primary' | 'error' | 'success' | 'info' | 'rose' | 'grey' | 'secondary'
  /**
   * Content of the title.
   */
  title?: React.ReactNode
  /**
   * Content of the description.
   */
  description?: React.ReactNode
  /**
   * Footer to be displayed at the bottom of the card.
   */
  footer?: React.ReactNode
  /**
   * Variant to use.
   */
  variant?: 'standard' | 'filled'
}

/**
 *
 * Demos:
 *
 * - https://bit.cloud/totalsoft_oss/rocket-ui/components/surfaces/stats-card
 *
 * Take a look over the code for further information: https://github.com/osstotalsoft/rocket-ui/tree/main/rocket-ui/components/surfaces/stats-card
 *
 * Material-UI components used:
 *
 * - CardHeader: https://mui.com/material-ui/api/card-header/
 *
 */

export default function StatsCard(props: StatsCardProps): JSX.Element
