import React from 'react'
import DialogDisplay from '../DialogDisplay'
import { title, text } from '../mocks'

const TransparentDialogDisplay = props => {
  return (
    <DialogDisplay
      id='transparent'
      title={title}
      textContent={text}
      transparentBackdrop={true}
      contentProps={{ sx: 'hidden' }}
      {...props}
    />
  )
}

export default TransparentDialogDisplay
