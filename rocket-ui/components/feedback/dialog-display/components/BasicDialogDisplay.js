import React from 'react'
import DialogDisplay from '../DialogDisplay'
import { text, title } from '../mocks'

const BasicDialogDisplay = props => {
  return <DialogDisplay id='basic' title={title} content={text} {...props} />
}

export default BasicDialogDisplay
