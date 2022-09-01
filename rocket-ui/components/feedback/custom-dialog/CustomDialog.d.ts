import { ButtonProps } from '@totalsoft_oss/rocket-ui.components.buttons.button'
import { DialogDisplayProps } from '@totalsoft_oss/rocket-ui.components.feedback.dialog-display'

export interface CustomDialogProps extends DialogDisplayProps {
  /**
   * Props applied to the button.
   */
  buttonProps?: ButtonProps
  /**
   * Callback fired when a "click" event is detected.
   */
  onYes: () => void
  /**
   * @deprecated
   * If true, the actions (buttons) are shown below.
   */
  showActions?: boolean
  /**
   * Text content of the first (left) action.
   */
  textDialogYes?: string
  /**
   * Text content of the second (right) action.
   */
  textDialogNo?: string
}

export default function CustomDialog(props: CustomDialogProps): JSX.Element
