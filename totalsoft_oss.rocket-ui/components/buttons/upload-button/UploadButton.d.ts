import { SvgIconComponent } from '@mui/icons-material'
import React from 'react'
import { IconButtonProps } from '@totalsoft_oss/rocket-ui.components.buttons.icon-button'

export interface UploadButtonProps extends IconButtonProps {
  /**
   * @default BackupIcon
   * The Icon to display.
   */
  Icon?: React.ElementType<SvgIconComponent>
  /**
   * The accept attribute takes as its value a comma-separated list of one or more file types,
   * or unique file type specifiers, describing which file types to allow.
   */
  accept?: string
  /**
   * The "capture" attribute specifies that, optionally, a new file should be captured,
   * and which device should be used to capture that new media of a type defined by the "accept" attribute.
   */
  capture?: 'user' | 'environment'
  /**
   * The Boolean multiple attribute, if set, means the form control accepts one or more values.
   */
  multiple?: boolean
  /**
   * The maximum value in bytes for all the files selected.
   */
  maxTotalSize?: number
  /**
   * The maximum value in bytes for any one file selected.
   */
  maxItemSize?: number
  /**
   * The minimum value in bytes for all the files selected.
   */
  minTotalSize?: number
  /**
   * The minimum value in bytes for any one file selected.
   */
  minItemSize?: number
  /**
   * Function to be called when a file dialog box concludes.
   * If something is selected, the function will be called with a FileList object with the selections,
   * if the dialog is canceled, the function will be called with a FileList object that only has the property "length" with the value 0.
   */
  onFilesChanged?: (files: FileList) => void
  /**
   * Function to be called when a error is detected in the selected files
   */
  onError?: (errorObject: unknown) => void
}

/**
 * Demos:
 *
 * - https://bit.cloud/totalsoft_oss/rocket-ui/components/buttons/upload-button
 *
 *  Take a look over the code for further information: https://github.com/osstotalsoft/rocket-ui/tree/main/rocket-ui/components/buttons/upload-button
 *
 * Bit component used:
 *
 * - IconButton: https://bit.cloud/totalsoft_oss/rocket-ui/components/buttons/icon-button
 *
 */

export default function UploadButton(props: UploadButtonProps): JSX.Element
