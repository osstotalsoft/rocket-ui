import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import Button from '@totalsoft_oss/rocket-ui.components.buttons.button'
import DialogDisplay from '@totalsoft_oss/rocket-ui.components.feedback.dialog-display'
import { deprecatedPropType } from '@mui/material'

const CustomDialog = ({
  onYes,
  onClose,
  buttonProps: receivedButtonProps,
  buttonColor,
  buttonSize,
  textDialogYes,
  textDialogNo,
  disableBackdropClick,
  ...rest
}) => {
  const handleClose = useCallback(
    (event, reason) => {
      if (disableBackdropClick && reason === 'backdropClick') return

      onClose(event, reason ? reason : 'closeActionClick')
    },
    [disableBackdropClick, onClose]
  )

  const buttonProps = { color: buttonColor, size: buttonSize || 'small', ...receivedButtonProps }

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

CustomDialog.defaultProps = {
  textDialogYes: 'Yes',
  textDialogNo: 'No'
}

CustomDialog.propTypes = {
  /**
   * Props sent to the buttons.
   */
  buttonProps: PropTypes.object,
  /**
   * Color of actions.
   */
  buttonColor: deprecatedPropType(
    PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'warning', 'error', 'rose', 'white', 'simple', 'transparent', 'inherit']),
    'This prop is deprecated and will be removed in a future version. Use `buttonProps` instead.'
  ),
  /**
   * Size of buttons.
   */
  buttonSize: deprecatedPropType(
    PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),
    'This prop is deprecated and will be removed in a future version. Use `buttonProps` instead.'
  ),
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
   * If true, the actions (buttons) are shown below.
   */
  showActions: deprecatedPropType(
    PropTypes.bool,
    "This prop is deprecated since it is always true. If you don't need actions, use DialogDisplay instead."
  ),
  /**
   * Text content of the first (left) action.
   */
  textDialogYes: PropTypes.string,
  /**
   * Text content of the second (right) action.
   */
  textDialogNo: PropTypes.string,
  /**
   * If true, clicking the backdrop will not fire the onClose callback.
   */
  disableBackdropClick: PropTypes.bool
}

export default CustomDialog
