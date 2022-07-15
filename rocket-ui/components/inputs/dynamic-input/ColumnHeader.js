import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@totalsoft_oss/rocket-ui.components.data-display.typography'

const ColumnHeader = ({ children }) => (
  <Typography variant='body1' emphasis='bold'>
    {children}
  </Typography>
)
ColumnHeader.propTypes = {
  children: PropTypes.node
}

export default ColumnHeader
