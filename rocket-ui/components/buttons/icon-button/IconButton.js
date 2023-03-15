import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import CircularProgress from '@mui/material/CircularProgress'
import MuiIconButton from './IconButtonStyles'
import AddIcon from '@mui/icons-material/Add'
import CancelIcon from '@mui/icons-material/Cancel'
import DeleteIcon from '@mui/icons-material/Delete'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import EditIcon from '@mui/icons-material/Edit'
import VisibilityIcon from '@mui/icons-material/Visibility'
import SaveIcon from '@mui/icons-material/Save'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

const iconType = {
  add: AddIcon,
  cancel: CancelIcon,
  delete: DeleteIcon,
  download: CloudDownloadIcon,
  downward: ArrowDownwardIcon,
  edit: EditIcon,
  view: VisibilityIcon,
  save: SaveIcon,
  upward: ArrowUpwardIcon
}

const IconButton = ({ children, type, fontSize = 'small', loading, size = 'medium', color = 'secondary', ...rest }) => {
  const CustomIcon = useMemo(() => iconType[type], [type])

  const iconButtonProps = {
    ['aria-label']: type || 'iconButton'
  }

  return (
    <MuiIconButton {...iconButtonProps} size={size} color={color} {...rest}>
      {loading ? <CircularProgress color='inherit' size={24} /> : type ? <CustomIcon fontSize={fontSize} /> : children}
    </MuiIconButton>
  )
}

IconButton.propTypes = {
  /**
   * @default 'secondary'
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
   * @default 'medium'
   * Size of the button
   */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),
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
   * @default 'small'
   * Size of the icon.
   */
  fontSize: PropTypes.oneOf(['inherit', 'small', 'medium', 'large'])
}

export default IconButton
