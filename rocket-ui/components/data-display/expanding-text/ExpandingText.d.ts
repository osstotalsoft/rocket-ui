import React from 'react'

export interface ExpandingTextProps {
  /**
   * Text to be displayed.
   */
  text: string
  /**
   * Length of text to be displayed.
   */
  minLength?: number
  /**
   * @default 'Show less'
   * Text of `showLess` button.
   */
  showLessText?: React.ReactNode
  /**
   * @default 'Show more'
   * Text of `showMore` button.
   */
  showMoreText?: React.ReactNode
  /**
   * @default 'block'
   * CSS `display` prop applied to the text.
   */
  display?: 'inline' | 'block' | 'inline-block' | 'flex' | 'inline-flex' | 'none'
  /**
   * Props applied to the text.
   */
  textProps?: object
  /**
   * Props applied to the button.
   */
  buttonProps?: object
  /**
   * @default false
   * Expanded state of the text.
   */
  expanded?: boolean
}

/**
 *
 * Demos:
 *
 * - https://bit.cloud/totalsoft_oss/rocket-ui/components/data-display/expanding-text
 *
 *  Take a look over the code for further information: https://github.com/osstotalsoft/rocket-ui/tree/main/rocket-ui/components/data-display/expanding-text
 *
 * Bit components used:
 *
 * - Typography: https://bit.cloud/totalsoft_oss/rocket-ui/components/data-display/typography
 *
 */

export default function ExpandingText(props: ExpandingTextProps): JSX.Element
