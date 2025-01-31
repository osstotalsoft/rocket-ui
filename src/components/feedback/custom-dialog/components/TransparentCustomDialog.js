import React from 'react'
import CustomDialog from '../CustomDialog'
import { title, text } from '../mocks'

const TransparentCustomDialog = props => {
  return <CustomDialog id='transparent' title={title} textContent={text} transparentBackdrop={true} {...props} />
}

export default TransparentCustomDialog
