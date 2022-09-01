import { CardActionsProps, CardMediaProps as MuiCardMediaProps, CardProps as MuiCardProps } from '@mui/material'
import { CardHeaderProps } from '@totalsoft_oss/rocket-ui.components.surfaces.card-header'

export type CardMediaProps = MuiCardMediaProps & {
  /**
   * Select a default size:
   * @s 80px X 80px
   * @m 163px X 163px
   * @l 280px X 280px
   */
  size?: 's' | 'm' | 'l'
}

export interface CardProps extends Omit<MuiCardProps, 'title' | 'variant'> {
  /**
   * Variant to use.
   */
  variant?: 'standard' | 'filled'
  /**
   * Color of card.
   */
  color?: 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'rose'
  /**
   * If true, the content padding is disabled.
   */
  disablePadding?: boolean
  /**
   * Actions to be displayed at the bottom of the card.
   */
  actions?: React.ReactNode
  /**
   * Props applied to the CardActions component.
   */
  actionsProps?: CardActionsProps
  /**
   * Content of the title.
   */
  title?: React.ReactNode
  /**
   * Content of the subheader.
   */
  subheader?: React.ReactNode
  /**
   * Props applied to the CardHeader component.
   */
  headerProps?: CardHeaderProps
  /**
   * Icon to be displayed.
   */
  icon?: object
  /**
   * Icon color.
   */
  iconColor?: string
  /*
   * Props applied to the CardMedia component.
   */
  mediaProps?: CardMediaProps
}

/**
 *
 * Demos:
 *
 * - https://bit.cloud/totalsoft_oss/rocket-ui/components/surfaces/card
 *
 * Take a look over the code for further information: https://github.com/osstotalsoft/rocket-ui/tree/main/rocket-ui/components/surfaces/card
 *
 * Material-UI components used:
 *
 * - Card: https://mui.com/api/card/
 * - CardContent: https://mui.com/api/card-content/
 *
 */

export default function Card(props: CardProps): JSX.Element
