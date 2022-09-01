import { ToastContainerProps as ReactToastifyProps } from 'react-toastify'

export interface ToastContainerProps extends Omit<ReactToastifyProps, 'transition'> {
  /**
   * Set the delay in ms to close the toast automatically.
   * Use `false` to prevent the toast from closing.
   * @default 3000
   */
  autoClose?: number | false
  /**
   * Limit the number of toast displayed at the same time
   * @default 5
   */
  limit?: number
  /**
   * Set the position to use.
   * @default 'top-center'
   */
  position?: 'top-right' | 'top-center' | 'top-left' | 'bottom-right' | 'bottom-center' | 'bottom-left'
  /**
   * The appearance effect.
   * @default Slide
   */
  transition: 'Slide' | 'Bounce' | 'Zoom' | 'Flip'
}

/**
 *
 * Demos:
 *
 * - https://bit.cloud/totalsoft_oss/rocket-ui/components/feedback/toast
 *
 *  Take a look over the code for further information: https://github.com/osstotalsoft/rocket-webapp-components/blob/master/components/Toast
 * 
 *  React Toastify components used:
 *  - ToastContainer https://fkhadra.github.io/react-toastify/api/toast-container/
 *  - toast https://fkhadra.github.io/react-toastify/api/toast
 */
export default function ToastContainer(props: ToastContainerProps): JSX.Element
