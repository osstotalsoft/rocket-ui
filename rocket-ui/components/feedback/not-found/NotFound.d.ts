export interface NotFoundProps {
  /**
   * @default "Not Found"
   * The text to be displayed when this component is rendered
   */
  text?: string
  /**
   * @default "The resource requested could not be found on this server!"
   * The details to be displayed when this component is rendered
   */
  details?: string
}

/**
 *
 * Demos:
 *
 * - https://bit.cloud/totalsoft_oss/rocket-ui/components/feedback/not-found
 *
 *  Take a look over the code for further information:https://github.com/osstotalsoft/rocket-webapp-components/blob/master/components/NotFound/NotFound.js
 *
 */
export default function NotFound(props: NotFoundProps): JSX.Element
