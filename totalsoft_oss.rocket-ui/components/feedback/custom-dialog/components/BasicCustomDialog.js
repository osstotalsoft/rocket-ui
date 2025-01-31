import React from 'react'
import CustomDialog from '../CustomDialog'
import { text, title } from '../mocks'

const BasicCustomDialog = props => {
  return <CustomDialog id='basic' title={title} content={text} {...props} />
}

export default BasicCustomDialog
