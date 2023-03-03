import React from 'react'
import PropTypes from 'prop-types'
import MuiCardHeader from './CardHeaderStyles'
import { Box } from '@mui/material'
import Typography from '@totalsoft_oss/rocket-ui.components.data-display.typography'
import { isValidElement } from 'react'

const CardHeader = ({ variant = 'standard', actions, title, ...rest }) => {
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
      disableTypography
      title={
        title ? (
          isValidElement(title) ? (
            title
          ) : (
            <Typography variant='subtitle1' emphasis='bold'>
              {title}
            </Typography>
          )
        ) : undefined
      }
      {...rest}
    />
  )
}

CardHeader.propTypes = {
  /**
   * @default 'standard'
   * Variant to use.
   */
  variant: PropTypes.oneOf(['standard', 'filled']),
  /**
   * Actions to be displayed in the right corner of the card. If an array, will display all items with spacing between them.
   */
  actions: PropTypes.node
}

export default CardHeader
