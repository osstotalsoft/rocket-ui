import {
  DialogProps as MuiDialogProps,
  DialogTitleProps as MuiDialogTitleProps,
  DialogContentProps as MuiDialogContentProps,
  DialogContentTextProps as MuiDialogContentTextProps,
  DialogActionsProps as MuiDialogActionsProps,
} from '@mui/material'
import { IconButtonProps } from '@totalsoft_oss/rocket-ui.components.buttons.icon-button'

export interface DialogDisplayProps extends Omit<MuiDialogProps, 'maxWidth' | 'title'> {
  /**
   * Identifier of the dialog.
   */
  id: string
  /**
   * @default 'xl'
   * Determine the max-width of the dialog. The dialog width grows with the size of the screen. Set to false to disable maxWidth.
   */
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false | string
  /**
   * Title of the dialog.
   */
  title?: React.ReactNode
  /**
   * Content of the dialog.
   */
  content?: React.ReactNode
  /**
   * The actions provided below the dialog.
   */
  actions?: React.ReactNode
  /**
   * Text content of the dialog. If received, it will be wrapped by the MUI DialogContentText component.
   */
  textContent?: React.ReactNode
  /**
   * @default false
   * If `true`, clicking the backdrop will not fire the `onClose` callback.
   */
  disableBackdropClick?: boolean
  /**
   * Props sent to the DialogTitle component.
   */
  titleProps?: MuiDialogTitleProps
  /**
   * Props sent to the DialogContent component.
   */
  contentProps?: MuiDialogContentProps
  /**
   * Props sent to the DialogContentText component.
   */
  textContentProps?: MuiDialogContentTextProps
  /**
   * Props sent to the DialogActions component.
   */
  actionsProps?: MuiDialogActionsProps
  /**
   * Props sent to the close button.
   */
  closeButtonProps?: IconButtonProps
  /**
   * @default false
   * If `true`, the backdrop will be transparent.
   */
  transparentBackdrop?: boolean
  /**
   * @default true
   * If `true`, the close button is shown.
   */
  showX?: boolean
  /**
   * @default false
   * Display dividers at the top and bottom of DialogContent.
   */
  dividers?: boolean
  /**
   * @default 'auto'
   * The value of the overflowY CSS property of the DialogContent component.
   * @deprecated Use `contentProps` instead.
   */
  overflowY?: 'scroll' | 'hidden' | 'visible' | 'auto'
}
/**
 *
 * Demos:
 *
 * - https://bit.cloud/totalsoft_oss/rocket-ui/components/feedback/dialog-display
 *
 *  Take a look over the code for further information: https://github.com/osstotalsoft/rocket-ui/tree/main/rocket-ui/components/feedback/dialog-display
 *
 *  Material UI components used:
 *
 * - Dialog: https://material-ui.com/api/dialog/
 * - DialogTitle: https://material-ui.com/api/dialog-title/
 * - DialogContent: https://material-ui.com/api/dialog-content/
 * - DialogContentText: https://material-ui.com/api/dialog-content-text/
 * - DialogActions: https://material-ui.com/api/dialog-actions/
 *
 */
export default function DialogDisplay(props: DialogDisplayProps): JSX.Element
