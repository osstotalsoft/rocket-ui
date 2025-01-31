import React from 'react'
import { CardProps } from '@totalsoft_oss/rocket-ui.components.surfaces.card'

export interface CollapseCardProps extends CardProps {
  /**
   * Content of the component.
   */
  content?: React.ReactNode
  /**
   * Content of the subheader.
   */
  subheader?: React.ReactNode
  /**
   * If true, the card will be expanded by default.
   * @default false
   */
  defaultExpanded?: boolean
  /**
   * If true, the card will be expanded.
   */
  expanded?: boolean
  /**
   * If true, the card can be expanded.
   * @deprecated Use `Card` component instead
   */
  canExpand?: boolean
  /**
   * Callback fired on toggle.
   */
  onToggle?: (event: React.SyntheticEvent, eventExpanded: boolean) => void
}

/**
 *
 * Demos:
 *
 * - https://bit.cloud/totalsoft_oss/rocket-ui/components/surfaces/collapse-card
 *
 * Take a look over the code for further information: https://github.com/osstotalsoft/rocket-ui/tree/main/rocket-ui/components/surfaces/collapse-card
 *
 * Material-UI components used:
 *
 * - Card: https://bit.dev/totalsoft_oss/react-mui/card
 *
 */

export default function CollapseCard(props: CollapseCardProps): JSX.Element
