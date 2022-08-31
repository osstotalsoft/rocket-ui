import { useCallback } from 'react'
import { toast } from 'react-toastify'
import { classes } from './ToastStyles'
import cx from 'classnames'

const useToast = () => {
  return useCallback(
    /**
     *
     * @param {String} message The text to be displayed
     * @param {('success'|'info'|'warning'|'error')} variant The type of the toast
     * @param {('Slide' | 'Bounce' | 'Zoom' | 'Flip')} transition The appearance effect
     * @param {('top-right' | 'top-center' | 'top-left' | 'bottom-right' | 'bottom-center' | 'bottom-left')} position Where to be displayed on the page
     * @param {(Bool,Int)} autoClose Delay in ms to close the toast
     */
    (message, variant, transition, position, autoClose = variant !== 'error') => {
      const toastClasses = cx({
        [classes[variant]]: variant,
        [classes['default']]: true
      })

      const options = { autoClose, transition, position, className: toastClasses }
      switch (variant) {
        case 'error':
          toast.error(message, { ...options, autoClose: false, closeOnClick: false, draggable: false })
          break
        case 'info':
          toast.info(message, options)
          break
        case 'success':
          toast.success(message, options)
          break
        case 'warning':
          toast.warn(message, options)
          break
        default:
          toast(message, options)
          break
      }
    },
    []
  )
}

export default useToast
