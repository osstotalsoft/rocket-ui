import React, { useCallback, useState } from 'react'
import { Collapse } from '@mui/material'
import PropTypes from 'prop-types'
import { ExpandMore, ExpandLess } from '@mui/icons-material'
import IconButton from '@totalsoft_oss/rocket-ui.components.buttons.icon-button'
import Card from '@totalsoft_oss/rocket-ui.components.surfaces.card'
import { CardContent } from './CollapseCardStyles'

const CollapseCard = ({ content, children, actions, variant, defaultExpanded, expanded, onToggle, subheader, ...rest }) => {
  const [localExpanded, setLocalExpanded] = useState(defaultExpanded || false)
  const exp = expanded || localExpanded

  const toggleCard = useCallback((_, event) => (onToggle ? onToggle(event) : setLocalExpanded(current => !current)), [onToggle])

  const iconButton = (
    <IconButton size='small' variant='text' color='primary' onClick={toggleCard}>
      {exp ? <ExpandLess /> : <ExpandMore />}
    </IconButton>
  )

  return (
    <Card
      disablePadding
      actions={Array.isArray(actions) ? [...actions, iconButton] : [actions, iconButton]}
      variant={variant}
      subheader={subheader}
      {...rest}
    >
      <Collapse in={exp}>
        <CardContent variant={variant}>{content || children}</CardContent>
      </Collapse>
    </Card>
  )
}

CollapseCard.defaultProps = {
  variant: 'standard'
}

CollapseCard.propTypes = {
  /**
   * Content of the component.
   */
  children: PropTypes.node,
  /**
   * Actions to be displayed in the right corner of the card. If an array, will display all items with spacing between them.
   */
  actions: PropTypes.node,
  /**
   * Content of the component.
   */
  content: PropTypes.node,
  /**
   * Variant to use.
   */
  variant: PropTypes.oneOf(['standard', 'filled']),
  /**
   * Content of the subheader.
   */
  subheader: PropTypes.node,
  /**
   * If true, the card will be expanded by default.
   */
  defaultExpanded: PropTypes.bool,
  /**
   * If true, the card will be expanded.
   */
  expanded: PropTypes.bool,
  /**
   * Callback fired on toggle.
   */
  onToggle: PropTypes.func
}

export default CollapseCard
