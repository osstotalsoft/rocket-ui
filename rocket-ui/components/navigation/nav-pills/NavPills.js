import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { Box } from '@mui/material'
import { Tabs, Tab } from './NavPillsStyles'

function TabPanel({ children, active, index, ...other }) {
  return (
    <Box
      role='tab-panel'
      hidden={active !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {active === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Box>
  )
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  active: PropTypes.number.isRequired
}

function OrientationWrapper({ children, actions, orientation }) {
  return orientation == 'vertical' ? (
    <Box role='vertical-tab-wrapper' sx={{ display: 'flex' }}>
      <Box sx={{ flexGrow: 1, display: 'flex' }}>{children}</Box>
      {actions && (
        <Box sx={{ flexGrow: 1, borderLeft: 1, borderColor: 'divider', p: 1, maxWidth: 'fit-content' }}>
          {actions?.map((action, index) => (
            <Box key={index} role='action' m='4px'>
              {action}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  ) : (
    children
  )
}
OrientationWrapper.propTypes = {
  children: PropTypes.array,
  actions: PropTypes.array,
  orientation: PropTypes.oneOf(['horizontal', 'vertical'])
}

function TabsWrapper({ children, actions, orientation, fullWidth, ...other }) {
  return orientation == 'vertical' ? (
    <Tabs role='vertical-tabs' orientation={orientation} sx={{ borderRight: 1, borderColor: 'divider' }} {...other}>
      {children}
    </Tabs>
  ) : (
    <Box sx={{ maxWidth: fullWidth ? 'unset' : 'fit-content', borderBottom: 1, borderColor: 'divider', display: 'flex' }}>
      <Tabs role='horizontal-tabs' orientation={orientation} {...other}>
        {children}
      </Tabs>
      {actions &&
        actions?.map((action, index) => (
          <Box key={index} role='action' m='4px' mt='auto' mb='auto'>
            {action}
          </Box>
        ))}
    </Box>
  )
}
TabsWrapper.propTypes = {
  children: PropTypes.node,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  actions: PropTypes.array,
  fullWidth: PropTypes.bool
}

export default function NavPills(props) {
  const { active, onChange, tabs, tabProps, actions, selectedColor, capitalize, gradient, ...other } = props
  const [selfActive, setSelfActive] = useState(0)

  const handleChange = useCallback((_, newValue) => {
    setSelfActive(newValue)
  }, [])

  return (
    <OrientationWrapper orientation={props?.orientation} actions={actions}>
      <TabsWrapper
        value={onChange ? active : selfActive}
        onChange={onChange ?? handleChange}
        actions={actions}
        aria-label='tabs'
        {...other}
      >
        {tabs.map((tab, index) => (
          <Tab
            key={`simple-tab-${index}`}
            color={props?.color}
            selectedColor={selectedColor}
            capitalize={capitalize}
            gradient={gradient}
            {...tabProps}
            {...tab}
          />
        ))}
      </TabsWrapper>
      {tabs.map(({ content }, index) => (
        <TabPanel key={`tab-panel-${index}`} index={index} active={onChange ? active : selfActive}>
          {content}
        </TabPanel>
      ))}
    </OrientationWrapper>
  )
}

NavPills.defaultProps = {
  active: 0,
  indicatorColor: 'secondary',
  selectedColor: 'secondary',
  variant: 'scrollable',
  orientation: 'horizontal'
}

NavPills.propTypes = {
  /**
   * Index of the default active pill
   */
  active: PropTypes.number,
  /**
   * Handle tab change event manually
   * Overrides the default onChange implementation
   * @param {object} event The event source of the callback.
   * @param {number} value We default to the index of the child (number)
   */
  onChange: PropTypes.func,
  /**
   * The content of the component
   */
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      content: PropTypes.node,
      props: PropTypes.object
    })
  ).isRequired,
  /**
   * Custom tab properties that apply to all the Tab elements
   */
  tabProps: PropTypes.object,
  /**
     * Determines additional display behavior of the tabs:
        - scrollable will invoke scrolling properties and allow for horizontally scrolling (or swiping) of the tab bar.
        - fullWidth will make the tabs grow to use all the available space, which should be used for small views, like on mobile.
        - standard will render the default state.
     */
  variant: PropTypes.oneOf(['scrollable', 'fullWidth', 'standard']),
  /**
   * The component orientation (layout flow direction).
   */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  /**
   * @default "primary"
   * Determines the color of the indicator.
   */
  indicatorColor: PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'warning', 'error', 'rose', 'white', 'dark']),
  /**
   * @default "primary"
   * Determines the color of the Tab.
   */
  selectedColor: PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'warning', 'error', 'rose', 'white', 'dark']),
  /**
   * Indicates the background color of the selected Tab and the indicator color
   * Precedes 'indicatorColor' and 'selectedColor' properties
   */
  color: PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'warning', 'error', 'rose', 'white', 'dark']),
  /**
   * @default false
   * If true, a gradient background is applied.
   */
  gradient: PropTypes.bool,
  /**
   * @default false
   * If true, it maximize width to 100%
   * Default value sets width to 'fit-content'
   */
  fullWidth: PropTypes.bool,
  /**
   * @default false
   * If true, tab text is capitalized.
   */
  capitalize: PropTypes.bool,
  /**
   * A list of additional action components
   * e.g. a [<Button />, <Button />]
   */
  actions: PropTypes.array
}
