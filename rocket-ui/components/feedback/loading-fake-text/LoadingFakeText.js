import React from 'react'
import PropTypes from 'prop-types'
import { Paper, Skeleton } from '@mui/material'

const LoadingFakeText = ({ lines, onPaper, variant, ...props }) => {
  const defaultOrText = !variant || variant === 'text'

  const fakeText = (
    <>
      {defaultOrText ? (
        Array(lines)
          .fill()
          .map((_e, i) => {
            if (i % 2 == 0) return <Skeleton key={i} variant={variant} {...props} />
            return <Skeleton key={i} variant={variant} {...props} width={'80%'} />
          })
      ) : (
        <Skeleton variant={variant} {...props} />
      )}
    </>
  )

  if (onPaper) {
    return <Paper sx={{ p: 2 }}>{fakeText}</Paper>
  }

  return fakeText
}

LoadingFakeText.defaultProps = {
  animation: 'wave',
  lines: 1,
  onPaper: false
}

LoadingFakeText.propTypes = {
  /**
   * The number of lines appearing.
   */
  lines: PropTypes.number,
  /**
   * If true, the fake text will be drawn on a Paper.
   */
  onPaper: PropTypes.bool,
  /**
   * The shape of the loading fake text
   */
  variant: PropTypes.oneOf(['text', 'circular', 'rectangular'])
}

export default LoadingFakeText
