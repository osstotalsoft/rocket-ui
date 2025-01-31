import React from 'react'
import DialogDisplay from '../DialogDisplay'
import { title, longText } from '../mocks'

const TextDialogDisplay = props => {
  return <DialogDisplay id='text' title={title} textContent={longText} {...props} />
}

export default TextDialogDisplay
