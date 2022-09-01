import { AccordionProps as MuiAccordionProps } from '@mui/material'

export interface AccordionProps extends Omit<MuiAccordionProps, 'variant' | 'title'> {
  /**
   * The title of accordion.
   */
  title?: React.ReactNode
  /**
   * The content of accordion.
   */
  content?: React.ReactNode

  /**
   * Variant to use.
   */
  variant?: 'standard' | 'filled'
}

/**
 *
 * Demos:
 *
 * - https://bit.cloud/totalsoft_oss/rocket-ui/components/surfaces/accordion
 *
 */

export default function Accordion(props: AccordionProps): JSX.Element
