import { AccordionProps } from '@totalsoft_oss/rocket-ui.components.surfaces.accordion'

export interface AccordionListProps extends Omit<AccordionProps, 'defaultExpanded' | 'content'> {
  /**
   * Default expanded accordion.
   */
  defaultExpanded?: number
  /**
   * @default false
   * If false, only one accordion at a time can be expanded
   */
  canExpandAll?: boolean
  /**
   * The content of accordion.
   */
  content: {
    title: string
    content: React.ReactNode
  }[]
}

/**
 *
 * Demos:
 *
 * - https://bit.cloud/totalsoft_oss/rocket-ui/components/surfaces/accordion-list
 *
 *  Take a look over the code for further information: https://github.com/osstotalsoft/rocket-ui/tree/main/rocket-ui/components/surfaces/accordion-list
 *
 */

export default function AccordionList(props: AccordionListProps): JSX.Element
