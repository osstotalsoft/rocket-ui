import React from 'react'
import PropTypes from 'prop-types'
import { NotFoundImage, NotFoundText } from './NotFoundStyles'
import notFound from './notFound.png'
import { Grid } from '@mui/material'

const NotFound = ({ text, details }) => {
  return (
    <Grid>
      <NotFoundImage>
        <img src={notFound} alt='notFoundImage' />
      </NotFoundImage>
      <NotFoundText variant={'h5'}>{text}</NotFoundText>
      <NotFoundText variant={'h5'}>{details}</NotFoundText>
    </Grid>
  )
}

NotFound.defaultProps = {
  text: 'Not Found',
  details: 'The resource requested could not be found on this server!'
}

NotFound.propTypes = {
  /**
   * The text to be displayed when this component is rendered
   */
  text: PropTypes.string,
  /**
   * The details to be displayed when this component is rendered
   */
  details: PropTypes.string
}

export default NotFound
