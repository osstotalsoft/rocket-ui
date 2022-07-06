import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { CircularProgress } from '@mui/material'
import MuiIconButton from './IconButtonStyles'
import { Add, Cancel, Delete, CloudDownload, ArrowDownward, Edit, Visibility, Save, ArrowUpward } from '@mui/icons-material'

const iconType = {
  add: Add,
  cancel: Cancel,
  delete: Delete,
  download: CloudDownload,
  downward: ArrowDownward,
  edit: Edit,
  view: Visibility,
  save: Save,
  upward: ArrowUpward
}

const IconButton = ({ children, type, fontSize, loading, ...rest }) => {
  const CustomIcon = useMemo(() => iconType[type], [type])

  const iconButtonProps = {
    ['aria-label']: type || 'iconButton'
  }

  return (
    <MuiIconButton {...iconButtonProps} {...rest}>
      {loading ? <CircularProgress color='inherit' size={24} /> : type ? <CustomIcon fontSize={fontSize} /> : children}
    </MuiIconButton>
  )
}

IconButton.defaultProps = {
  color: 'secondary',
  size: 'medium',
  fontSize: 'small'
}

IconButton.propTypes = {
  /**
   * Color of the button
   */
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
    'rose',
    'white',
    'dark',
    'transparent',
    'default',
    'inherit'
  ]),
  /**
   * Size of the button
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Override or extend the styles applied to the component
   */
  className: PropTypes.string,
  /**
   * If true, button will be disabled. Default is set to false
   */
  disabled: PropTypes.bool,
  /**
   * If true, button is in loading state.
   */
  loading: PropTypes.bool,
  /**
   * Text to be displayed when the user hover over the button
   */
  tooltip: PropTypes.string,
  /**
   * Content of the button
   */
  children: PropTypes.node,
  /**
   * 	Callback fired when a "click" event is detected.
   */
  onClick: PropTypes.func,
  /**
   * Custom icon to be displayed
   */
  type: PropTypes.oneOf(['add', 'cancel', 'delete', 'download', 'downward', 'edit', 'view', 'save', 'upward']),
  /**
   * Size of the icon.
   */
  fontSize: PropTypes.oneOf(['inherit', 'small', 'medium', 'large'])
}

export default IconButton
