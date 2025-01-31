import React from 'react'
import PropTypes from 'prop-types'
import MuiCardActions from './CardActionsStyles'

const CardActions = ({ variant = 'standard', align = 'left', ...rest }) => {
  return <MuiCardActions variant={variant} align={align} {...rest} />
}

CardActions.propTypes = {
  /**
   * @default 'standard'
   * Variant to use.
   */
  variant: PropTypes.oneOf(['standard', 'filled']),
  /**
   * Align actions to left or right.
   * @default 'left'
   */
  align: PropTypes.oneOf(['left', 'right'])
}

export default CardActions
