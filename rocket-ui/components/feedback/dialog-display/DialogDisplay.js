import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContentText from '@mui/material/DialogContentText'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import CloseIcon from '@mui/icons-material/Close'
import { TransparentBackdrop, DialogContent, DialogTitle, justifyRight } from './DialogDisplayStyles'
import IconButton from '@totalsoft_oss/rocket-ui.components.buttons.icon-button'

const DialogDisplay = ({
  id,
  title,
  content,
  textContent,
  actions,
  onClose,
  disableBackdropClick = false,
  titleProps,
  textContentProps,
  actionsProps,
  closeButtonProps,
  fullScreen,
  showX = true,
  transparentBackdrop,
  dividers = false,
  contentProps,
  maxWidth = 'xl',
  open = false,
  ...rest
}) => {
  const dialogTitleId = `${id}-dialog-display-title`

  const theme = useTheme()
  const smallScreen = useMediaQuery(theme.breakpoints.down('md'))

  const handleClose = useCallback(
    (event, reason) => {
      if (disableBackdropClick && reason === 'backdropClick') return

      onClose(event, reason ? reason : 'closeActionClick')
    },
    [disableBackdropClick, onClose]
  )

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby={dialogTitleId}
      fullScreen={fullScreen || smallScreen}
      BackdropComponent={transparentBackdrop && TransparentBackdrop}
      maxWidth={maxWidth}
      open={open}
      {...rest}
    >
      <DialogTitle id={dialogTitleId} {...titleProps}>
        {title}
        {showX && (
          <IconButton
            sx={justifyRight}
            color='default'
            variant='text'
            size='small'
            aria-label='Close'
            onClick={handleClose}
            {...closeButtonProps}
          >
            <CloseIcon />
          </IconButton>
        )}
      </DialogTitle>
      <DialogContent dividers={dividers} {...contentProps}>
        {textContent && <DialogContentText {...textContentProps}>{textContent}</DialogContentText>}
        {content}
      </DialogContent>
      <DialogActions {...actionsProps}>{actions}</DialogActions>
    </Dialog>
  )
}

DialogDisplay.propTypes = {
  /**
   * Identifier of the dialog.
   */
  id: PropTypes.string.isRequired,
  /**
   * @default false
   * If true, the component is shown.
   */
  open: PropTypes.bool.isRequired,
  /**
   * Callback fired when the component requests to be closed.
   */
  onClose: PropTypes.func,
  /**
   * Title of the dialog.
   */
  title: PropTypes.node,
  /**
   * Content of the dialog.
   */
  content: PropTypes.node,
  /**
   * Text content of the dialog. If received, it will be wrapped by the MUI DialogContentText component.
   */
  textContent: PropTypes.node,
  /**
   * The actions provided below the dialog.
   */
  actions: PropTypes.node,
  /**
   * @default false
   * If true, clicking the backdrop will not fire the onClose callback.
   */
  disableBackdropClick: PropTypes.bool,
  /**
   * Props sent to the DialogTitle component.
   */
  titleProps: PropTypes.object,
  /**
   * Props sent to the DialogContent component.
   */
  contentProps: PropTypes.object,
  /**
   * Props sent to the DialogContentText component.
   */
  textContentProps: PropTypes.object,
  /**
   * Props sent to the DialogActions component.
   */
  actionsProps: PropTypes.object,
  /**
   * Props sent to the close button.
   */
  closeButtonProps: PropTypes.object,
  /**
   * If true, the backdrop will be transparent.
   */
  transparentBackdrop: PropTypes.bool,
  /**
   * If true, the dialog is full-screen.
   */
  fullScreen: PropTypes.bool,
  /**
   * @default false
   * If true, the close button is shown.
   */
  showX: PropTypes.bool,
  /**
   * @default false
   * Display dividers at the top and bottom of DialogContent.
   */
  dividers: PropTypes.bool,
  /**
   * @default 'xl'
   * Determine the max-width of the dialog. The dialog width grows with the size of the screen. Set to false to disable maxWidth.
   */
  maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', false])
}

export default DialogDisplay
