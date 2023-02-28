import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import ArrowBack from '@mui/icons-material/ArrowBack'
import IconButton from '@totalsoft_oss/rocket-ui.components.buttons.icon-button'

const BackToButton = ({ path, fontSize = 'small', size = 'medium', ...rest }) => {
  const navigate = useNavigate()

  const onBackToList = useCallback(() => {
    path && navigate(path)
  }, [history, path])

  return (
    <IconButton aria-label='back' onClick={onBackToList} size={size} {...rest}>
      <ArrowBack fontSize={fontSize} />
    </IconButton>
  )
}

BackToButton.propTypes = {
  /**
   * @default 'medium'
   * Size of the button
   */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),
  /**
   * @default 'small'
   * Size of the icon.
   */
  fontSize: PropTypes.oneOf(['inherit', 'small', 'medium', 'large']),
  /**
   * Path where browser will be directed to when the button is clicked.
   */
  path: PropTypes.string
}

export default BackToButton
