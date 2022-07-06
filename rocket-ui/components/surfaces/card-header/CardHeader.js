import React from 'react'
import PropTypes from 'prop-types'
import MuiCardHeader from './CardHeaderStyles'
import { Box } from '@mui/material'

const CardHeader = ({ variant, actions, ...rest }) => {
  return (
    <MuiCardHeader
      variant={variant}
      action={
        Array.isArray(actions)
          ? actions.map((a, index) => (
              <Box key={index} ml={1}>
                {a}
              </Box>
            ))
          : actions
      }
      {...rest}
    />
  )
}

CardHeader.defaultProps = {
  variant: 'standard'
}

CardHeader.propTypes = {
  /**
   * Variant to use.
   */
  variant: PropTypes.oneOf(['standard', 'filled']),
  /**
   * Actions to be displayed in the right corner of the card. If an array, will display all items with spacing between them.
   */
  actions: PropTypes.node
}

export default CardHeader
