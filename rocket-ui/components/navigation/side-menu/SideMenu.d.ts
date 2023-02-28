export interface SideMenuProps {
  /**
   * Content of the menu
   */
  content?: React.ReactNode
  /**
   * @default MenuOpenIcon
   * Icon to be displayed on the button
   */
  icon?: object
  /**
   * Props applied to the button
   */
  buttonProps?: object
  /**
   * Props applied to the content
   */
  contentProps?: object
  /**
   * Props applied to the icon
   */
  iconProps?: object
}

/**
 *
 * Demos:
 *
 * - https://bit.cloud/totalsoft_oss/rocket-ui/components/navigation/side-menu
 *
 * Take a look over the code for further information: https://github.com/osstotalsoft/rocket-ui/tree/main/rocket-ui/components/navigation/side-menu
 *
 */

export default function SideMenu(props: SideMenuProps): JSX.Element
