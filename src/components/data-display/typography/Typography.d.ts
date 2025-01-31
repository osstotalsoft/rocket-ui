import { TypographyProps as MuiTypographyProps } from '@mui/material'

export interface TypographyProps extends MuiTypographyProps {
  /**
   * The color of the text
   */
  color?:
    | 'initial'
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'textPrimary'
    | 'textSecondary'
    | 'error'
    | 'primary.main'
    | 'secondary.main'
    | 'text.primary'
    | 'text.secondary'
    | 'error.main'
  /**
   * If provided, a text will appear on hover.
   */
  tooltip?: React.ReactNode
  /**
   * Controls the text emphasis. Different font styles can be used individually or in combination
   */
  emphasis?:
    | ('bold' | 'italic' | 'underline' | 'line-through' | 'overline')
    | ('bold' | 'italic' | 'underline' | 'line-through' | 'overline')[]
}

/**
 * Demos:
 *
 * - https://bit.cloud/totalsoft_oss/rocket-ui/components/data-display/typography
 *
 *  Take a look over the code for further information: https://github.com/osstotalsoft/rocket-ui/tree/main/rocket-ui/components/data-display/typography
 *
 * Material-UI component used:
 *
 * - Typography: https://mui.com/api/typography
 *
 */

export default function Typography(props: TypographyProps): JSX.Element
