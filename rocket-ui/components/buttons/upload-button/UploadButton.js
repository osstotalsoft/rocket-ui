import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import BackupIcon from '@mui/icons-material/Backup'
import IconButton from '@totalsoft_oss/rocket-ui.components.buttons.icon-button'
import Input from '@mui/material/Input'
import validators from './uploadButtonValidators'
import { map, __ } from 'ramda'

const UploadButton = ({
  fontSize = 'small',
  Icon = BackupIcon,
  accept,
  capture,
  multiple,
  maxTotalSize,
  maxItemSize,
  minTotalSize,
  minItemSize,
  onFilesChanged,
  onError,
  disabled,
  size = 'medium',
  ...rest
}) => {
  const handleFileSelected = useCallback(
    ({ target: { files } }) => {
      const filesValidator = map(v => v(onError, __, files), validators)
      const { validFileTypes, validMaxItemSize, validMaxTotalSize, validMinItemSize, validMinTotalSize } = filesValidator

      if (accept && !validFileTypes(accept)) return
      if (maxTotalSize && !validMaxTotalSize(maxTotalSize)) return
      if (maxItemSize && !validMaxItemSize(maxItemSize)) return
      if (minTotalSize && !validMinTotalSize(minTotalSize)) return
      if (minItemSize && !validMinItemSize(minItemSize)) return

      onFilesChanged && onFilesChanged(files)
    },
    [accept, maxItemSize, maxTotalSize, minItemSize, minTotalSize, onError, onFilesChanged]
  )

  return (
    <IconButton aria-label='upload' size={size} disabled={disabled} {...rest} component='label'>
      <Input
        disabled={disabled}
        type='file'
        style={{ display: 'none' }}
        inputProps={{ accept, capture, multiple }}
        onChange={handleFileSelected}
        onAbort={handleFileSelected}
      />
      <Icon fontSize={fontSize} />
    </IconButton>
  )
}

UploadButton.propTypes = {
  /**
   * @default BackupIcon
   * The icon to display
   */
  Icon: PropTypes.elementType,
  /**
   * @default 'small'
   * Size of the icon.
   */
  fontSize: PropTypes.oneOf(['inherit', 'small', 'medium', 'large']),
  /**
   * The accept attribute takes as its value a comma-separated list of one or more file types,
   * or unique file type specifiers, describing which file types to allow.
   */
  accept: PropTypes.string,
  /**
   * The "capture" attribute specifies that, optionally, a new file should be captured,
   * and which device should be used to capture that new media of a type defined by the "accept" attribute.
   */
  capture: PropTypes.oneOf(['user', 'environment']),
  /**
   * The Boolean multiple attribute, if set, means the form control accepts one or more values.
   */
  multiple: PropTypes.bool,
  /**
   * The maximum value in bytes for all the files selected.
   */
  maxTotalSize: PropTypes.number,
  /**
   * The maximum value in bytes for any one file selected.
   */
  maxItemSize: PropTypes.number,
  /**
   * The minimum value in bytes for all the files selected.
   */
  minTotalSize: PropTypes.number,
  /**
   * The minimum value in bytes for any one file selected.
   */
  minItemSize: PropTypes.number,
  /**
   * Function to be called when a file dialog box concludes.
   * If something is selected, the function will be called with a FileList object with the selections,
   * if the dialog is canceled, the function will be called with a FileList object that only has the property "length" with the value 0.
   */
  onFilesChanged: PropTypes.func,
  /**
   * Function to be called when a error is detected in the selected files
   */
  onError: PropTypes.func,
  /**
   * If `true`, the component is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * @default 'medium'
   * Button size
   */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large'])
}

export default UploadButton
