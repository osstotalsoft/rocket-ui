import React from 'react'
import PropTypes from 'prop-types'
import MuiCardActions from './CardActionsStyles'

const CardActions = ({ variant, align, ...rest }) => {
  return <MuiCardActions variant={variant} align={align} {...rest} />
}

CardActions.defaultProps = {
  variant: 'standard',
  align: 'left'
}

CardActions.propTypes = {
  /**
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
