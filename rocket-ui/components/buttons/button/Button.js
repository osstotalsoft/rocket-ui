import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { createButton, getColorStyles, classes, transformDeprecatedSizes } from './ButtonStyles'
import { Tooltip } from '@mui/material'
import cx from 'classnames'

const Button = ({ children, color, size, tooltip, round, right, justIcon, className, disabled, onClick, loading, gradient, ...rest }) => {
  const buttonStyles = getColorStyles(color)

  const btnClasses = cx({
    [className]: className,
    [classes.justIcon]: justIcon,
    [classes[size]]: size,
    [classes.gradient]: gradient
  })

  const classNames = `${classes.button} ${btnClasses}`

  const Comp = useMemo(() => createButton(loading), [loading])

  const baseComp = (
    <Comp
      size={transformDeprecatedSizes(size)}
      round={round}
      right={right}
      className={classNames}
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
      component={disabled ? 'div' : 'button'}
      {...(loading ? { loading } : {})}
      variant='contained' // need to set the default like this in order not to break 'WithBackground' and 'NoBackground' styles
      {...buttonStyles}
      {...rest}
    >
      {children}
    </Comp>
  )

  return tooltip ? <Tooltip title={tooltip}>{baseComp}</Tooltip> : baseComp
}

Button.defaultProps = {
  size: 'medium',
  capitalize: true
}

Button.propTypes = {
  /**
   * Color of the button.
   */
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
    'rose',
    'default',
    'white',
    'dark',
    'transparent',
    'inherit'
  ]),
  /**
   * If true, button is in loading state.
   */
  loading: PropTypes.bool,
  /**
   * If true, rounded corners are enabled.
   */
  round: PropTypes.bool,
  /**
   * Content of the component.
   */
  children: PropTypes.node,
  /**
   * Callback fired when a "click" event is detected.
   */
  onClick: PropTypes.func,
  /**
   * Variant to use.
   */
  variant: PropTypes.oneOf(['contained', 'text', 'outlined', PropTypes.string]),
  /**
   * If true, the button will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * A custom class provided.
   */
  className: PropTypes.string,
  /**
   * If true,  the button's min width will be set to 160px.
   */
  wd: PropTypes.bool,
  /**
   * If true, the button will be smaller.
   */
  justIcon: PropTypes.bool,
  /**
   * If true, the button will float to the right.
   */
  right: PropTypes.bool,
  /**
   * Size of the button.
   */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),
  /**
   * Tooltip of the button.
   */
  tooltip: PropTypes.string,
  /**
   * @default true
   * If true, button text is capitalized.
   */
  capitalize: PropTypes.bool,
  /**
   * If true, a gradient background is applied.
   */
  gradient: PropTypes.bool
}

export default Button
