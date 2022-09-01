import { IconButtonProps } from "@totalsoft_oss/rocket-ui.components.buttons.icon-button"

export interface BackToButtonProps extends IconButtonProps {
  /**
   * Size of the icon.
   */
   fontSize?: 'inherit' | 'small' | 'medium' | 'large'
   /**
    * Path where browser will be directed to when the button is clicked.
    */
   path?: string
}

/**
 *
 * Demos:
 *
 * - https://bit.cloud/totalsoft_oss/rocket-ui/components/buttons/back-to-button
 *
 *  Take a look over the code for further information: https://github.com/osstotalsoft/rocket-ui/tree/main/rocket-ui/components/buttons/back-to-button
 * 
 * Bit component used:
 * 
 * - IconButton: https://bit.cloud/totalsoft_oss/rocket-ui/components/buttons/icon-button
 * 
 */

export default function BackToButton(props: BackToButtonProps): JSX.Element
