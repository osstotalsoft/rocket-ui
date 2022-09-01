import { AccordionProps } from "@totalsoft_oss/rocket-ui.components.surfaces.accordion"

export interface AccordionListProps extends Omit<AccordionProps, 'defaultExpanded'> {
  /**
   * Default expanded accordion.
   */
  defaultExpanded?: number
  /**
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

export default function AccordionList(props: AccordionListProps): JSX.Element
