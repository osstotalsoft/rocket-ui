import React from 'react'
import { ToastContainer as ReactToastify, Slide, toast } from 'react-toastify'
import Container, { classes } from './ToastStyles'
import 'react-toastify/dist/ReactToastify.css'

const ToastContainer = props => {
  return (
    <Container>
      <ReactToastify className={classes.toastWrapper} {...props} />
    </Container>
  )
}

ToastContainer.defaultProps = {
  position: toast.POSITION.TOP_CENTER,
  autoClose: 3000,
  newestOnTop: true,
  transition: Slide,
  limit: 5
}

export default ToastContainer
