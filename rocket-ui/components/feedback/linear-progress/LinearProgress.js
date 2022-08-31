import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@mui/material'
import { LinearProgress as MuiLinearProgress, Label } from './LinearProgressStyles'
import { isNil } from 'ramda'

export default function LinearProgress({ color, variant, value, valueBuffer, showLabel, labelProps, ...rest }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <MuiLinearProgress value={value} valueBuffer={valueBuffer} variant={variant} color={color} {...rest} />
      </Box>
      {showLabel && !isNil(value) && (
        <Box sx={{ minWidth: 35 }}>
          <Label color='text.secondary' variant='body2' {...labelProps}>{`${Math.round(value)}%`}</Label>
        </Box>
      )}
    </Box>
  )
}

LinearProgress.defaultProps = {
  color: 'grey'
}

LinearProgress.propTypes = {
  /**
   * Color of the component.
   */
  color: PropTypes.oneOf(['primary', 'secondary', 'warning', 'error', 'success', 'info', 'rose', 'grey']),
  /**
   * If true it shows the progress indicator value (%).
   */
  showLabel: PropTypes.bool,
  /**
   * Props applied to the label.
   */
  labelProps: PropTypes.object,
  /**
   * Variant to use. Use indeterminate or query when there is no progress value.
   */
  variant: PropTypes.oneOf(['determinate', 'indeterminate', 'buffer', 'query']),
  /**
   * Value of the progress indicator for the determinate and buffer variants. Value between 0 and 100.
   */
  value: PropTypes.number,
  /**
   * Value for the buffer variant. Value between 0 and 100.
   */
  valueBuffer: PropTypes.number
}
