import React from 'react'
import CustomDialog from '../CustomDialog'
import { title, longText } from '../mocks'

const TextCustomDialog = props => {
  return <CustomDialog id='text' title={title} textContent={longText} textDialogYes='agree' textDialogNo='cancel' {...props} />
}

export default TextCustomDialog
