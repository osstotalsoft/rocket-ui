import React from 'react'
import PropTypes from 'prop-types'
import MuiTypography from './TypographyStyles'
import Tooltip from '@mui/material/Tooltip'
import * as R from 'ramda'

const multipleValueCssProp = ['textDecoration']
const emphasisType = {
  bold: { fontWeight: 'bold' },
  italic: { fontStyle: 'italic' },
  overline: { textDecoration: 'overline' },
  'line-through': { textDecoration: 'line-through' },
  underline: { textDecoration: 'underline' }
}

const checkCssProp = R.flip(R.includes)(multipleValueCssProp)
const getEmphasis = R.flip(R.prop)(emphasisType)
const mergeStyles = (k, l, r) => (checkCssProp(k) ? `${l} ${r}` : r)
const reduceEmphasis = R.reduce((acc, elem) => R.mergeWithKey(mergeStyles, acc, getEmphasis(elem)), {})
const transformEmphasisToStyle = R.cond([
  [R.is(Array), reduceEmphasis],
  [R.is(String), getEmphasis],
  [R.T, _ => {}]
])
const checkStyle = R.anyPass([R.isNil, R.isEmpty])
const defaultToEmpty = R.defaultTo({})

const Typography = ({ tooltip, emphasis, style, variant = 'inherit', ...rest }) => {
  const emphasisStyle = transformEmphasisToStyle(emphasis)
  const mergedStyle = R.mergeWithKey(mergeStyles, emphasisStyle, defaultToEmpty(style))
  const cleanStyle = R.when(checkStyle, R.always(undefined), mergedStyle)

  const base = <MuiTypography style={cleanStyle} variant={variant} {...rest} />
  return tooltip ? (
    <Tooltip title={tooltip} placement='bottom-start'>
      {base}
    </Tooltip>
  ) : (
    base
  )
}

Typography.propTypes = {
  /**
   * If provided, a text will appear on hover.
   */
  tooltip: PropTypes.node,
  /**
   * Inline styles object.
   */
  style: PropTypes.object,
  /**
   * The color of the text.
   */
  color: PropTypes.oneOf([
    'initial',
    'inherit',
    'primary',
    'secondary',
    'textPrimary',
    'textSecondary',
    'error',
    'primary.main',
    'secondary.main',
    'text.primary',
    'text.secondary',
    'error.main'
  ]),
  /**
   * Controls the text emphasis. Different font styles can be used individually or in combination.
   */
  emphasis: PropTypes.oneOfType([
    PropTypes.oneOf(['bold', 'italic', 'underline', 'line-through', 'overline']),
    PropTypes.arrayOf(PropTypes.oneOf(['bold', 'italic', 'underline', 'line-through', 'overline']))
  ]),
  /**
   * @default 'inherit'
   * Applies the theme typography styles.
   */
  variant: PropTypes.oneOf([
    'body1',
    'body2',
    'button',
    'caption',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'inherit',
    'overline',
    'subtitle1',
    'subtitle2'
  ])
}

export default Typography
