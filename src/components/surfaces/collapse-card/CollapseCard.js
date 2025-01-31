import React, { useCallback, useState } from 'react'
import Collapse from '@mui/material/Collapse'
import PropTypes from 'prop-types'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import IconButton from '@totalsoft_oss/rocket-ui.components.buttons.icon-button'
import Card from '@totalsoft_oss/rocket-ui.components.surfaces.card'
import { CardContent } from './CollapseCardStyles'

const CollapseCard = ({ content, children, actions, variant = 'standard', defaultExpanded, expanded, onToggle, subheader, ...rest }) => {
  const [localExpanded, setLocalExpanded] = useState(defaultExpanded || false)
  const exp = expanded || localExpanded

  const toggleCard = useCallback(event => (onToggle ? onToggle(event) : setLocalExpanded(current => !current)), [onToggle])

  const iconButton = (
    <IconButton size='small' variant='text' color='primary' onClick={toggleCard}>
      {exp ? <ExpandLessIcon /> : <ExpandMoreIcon />}
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
   * @default 'standard'
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
