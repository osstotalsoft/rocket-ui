export interface ForbiddenProps {
  /**
   * @default "Not allowed to see this page!"
   * Text to be displayed
   */
  forbiddenText?: string
  /**
   * @default "Go to main page"
   * Text to be displayed on button
   */
  forbiddenButtonText?: string
}

/**
 * Demos:
 *
 * - https://bit.cloud/totalsoft_oss/rocket-ui/components/feedback/forbidden
 *
 *  Take a look over the code for further information:https://github.com/osstotalsoft/rocket-webapp-components/blob/master/components/Forbidden/Forbidden.js
 */

export default function Forbidden(props: ForbiddenProps): JSX.Element
