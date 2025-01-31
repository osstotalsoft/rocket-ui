import React from 'react'
import BasicCustomDialog from './BasicCustomDialog'

const DividersCustomDialog = props => {
  return <BasicCustomDialog id='dividers' dividers textDialogYes='continue' textDialogNo='close' {...props} />
}

export default DividersCustomDialog
