import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import Button from '@totalsoft_oss/rocket-ui.components.buttons.button'
import DialogDisplay from '@totalsoft_oss/rocket-ui.components.feedback.dialog-display'

const CustomDialog = ({ onYes, onClose, buttonProps, textDialogYes = 'Yes', textDialogNo = 'No', disableBackdropClick, ...rest }) => {
  const handleClose = useCallback(
    (event, reason) => {
      if (disableBackdropClick && reason === 'backdropClick') return

      onClose(event, reason ? reason : 'closeActionClick')
    },
    [disableBackdropClick, onClose]
  )

  return (
    <DialogDisplay
      onClose={handleClose}
      showX={false}
      actions={
        <>
          <Button right {...buttonProps} onClick={onYes}>
            {textDialogYes}
          </Button>
          <Button right {...buttonProps} onClick={handleClose}>
            {textDialogNo}
          </Button>
        </>
      }
      {...rest}
    />
  )
}

CustomDialog.propTypes = {
  /**
   * Props sent to the buttons.
   */
  buttonProps: PropTypes.object,
  /**
   * Callback fired when a "click" event is detected.
   */
  onYes: PropTypes.func,
  /**
   * Callback fired when the component requests to be closed.
   * Signature: function(event: object, reason: string) => void
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: "escapeKeyDown", "backdropClick", "closeActionClick".
   */
  onClose: PropTypes.func,
  /**
   * @default 'Yes'
   * Text content of the first (left) action.
   */
  textDialogYes: PropTypes.string,
  /**
   * @default 'No'
   * Text content of the second (right) action.
   */
  textDialogNo: PropTypes.string,
  /**
   * If true, clicking the backdrop will not fire the onClose callback.
   */
  disableBackdropClick: PropTypes.bool
}

export default CustomDialog
