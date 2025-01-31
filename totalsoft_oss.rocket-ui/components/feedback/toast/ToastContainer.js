import React from 'react'
import PropTypes from 'prop-types'
import { ToastContainer as ReactToastify, Slide, toast } from 'react-toastify'
import Container, { classes } from './ToastStyles'
import 'react-toastify/dist/ReactToastify.css'

const ToastContainer = ({
  position = toast.POSITION.TOP_CENTER,
  autoClose = 3000,
  newestOnTop = true,
  transition = Slide,
  limit = 5,
  ...rest
}) => {
  return (
    <Container>
      <ReactToastify
        className={classes.toastWrapper}
        position={position}
        autoClose={autoClose}
        newestOnTop={newestOnTop}
        transition={transition}
        limit={limit}
        {...rest}
      />
    </Container>
  )
}

ToastContainer.propTypes = {
  /**
   * Set the delay in ms to close the toast automatically.
   * Use `false` to prevent the toast from closing.
   * @default 3000
   */
  autoClose: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  /**
   * Limit the number of toast displayed at the same time
   * @default 5
   */
  limit: PropTypes.number,
  /**
   * Set the position to use.
   * @default 'top-center'
   */
  position: PropTypes.oneOf(['top-right', 'top-center', 'top-left', 'bottom-right', 'bottom-center', 'bottom-left']),
  /**
   * The appearance effect.
   * @default Slide
   */
  transition: PropTypes.oneOf(['Slide', 'Bounce', 'Zoom', 'Flip']),
  /**
   * Whether or not to display the newest toast on top.
   * @default true
   */
  newestOnTop: PropTypes.bool
}

export default ToastContainer
