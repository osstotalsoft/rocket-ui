import { TabProps, TabsProps } from '@mui/material'

export interface NavPillsProps extends Omit<TabsProps, 'textColor' | 'indicatorColor'> {
  /**
   * @default 0
   * Index of the default active pill
   */
  active?: number
  /**
   * Handle tab change event manually
   * Overrides the default onChange implementation
   * @param {object} event The event source of the callback.
   * @param {number} value We default to the index of the child (number)
   */
  onChange?: (event: React.SyntheticEvent, value: number) => void
  /**
   * The content of the component
   */
  tabs: {
    /**
     * 	The label element.
     */
    label?: string | React.ReactElement
    /**
     * The icon to display in a tab.
     */
    icon?: string | React.ReactElement
    /**
     * Tha Tab content
     */
    content: React.ReactNode
    /**
     * Custom tab properties that apply to the current Tab element
     */
    props?: Omit<TabProps, 'icon' | 'label'>
  }[]
  /**
   * Custom tab properties that apply to all the Tab elements
   */
  tabProps: Omit<TabProps, 'icon' | 'label'>
  /**
     * @default "scrollable"
     * Determines additional display behavior of the tabs:
        - scrollable will invoke scrolling properties and allow for horizontally scrolling (or swiping) of the tab bar.
        - fullWidth will make the tabs grow to use all the available space, which should be used for small views, like on mobile.
        - standard will render the default state.
     */
  variant?: 'scrollable' | 'fullWidth' | 'standard'
  /**
   * The component orientation (layout flow direction)
   * @default "horizontal"
   */
  orientation?: 'horizontal' | 'vertical'
  /**
   * @default "primary"
   * Determines the color of the indicator.
   */
  indicatorColor?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'rose' | 'white' | 'dark'
  /**
   * @default "primary"
   * Determines the color of the Tab.
   */
  selectedColor?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'rose' | 'white' | 'dark'

  /**
   * Indicates the background color of the selected Tab and the indicator color
   * Precedes 'indicatorColor' and 'selectedColor' properties
   */
  color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'rose' | 'white' | 'dark'
  /**
   * @default false
   * If true, a gradient background is applied.
   */
  gradient?: boolean
  /**
   * @default false
   * If true, tab text is capitalized.
   */
  capitalize?: boolean
  /**
   * @default false
   * If true, it maximize width to 100%
   * Default value sets width to 'fit-content'
   */
  fullWidth: boolean
  /**
   * A list of additional action components
   * e.g. a [<Button />, <Button />]
   */
  actions?: string[] | React.ReactElement[]
}
  /**
   * Demos:
   *
   * - https://bit.cloud/totalsoft_oss/rocket-ui/components/navigation/nav-pills
   *
   *  Take a look over the code for further information:https://github.com/osstotalsoft/rocket-webapp-components/blob/master/components/NavPills/NavPills.js
   *
   * Material-UI components used:
   *
   * - Tab: https://material-ui.com/api/tab/
   * - Tabs: https://material-ui.com/api/tabs/
   *
   */
export default function NavPills(props: NavPillsProps): JSX.Element
