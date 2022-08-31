import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import ArrowBack from '@mui/icons-material/ArrowBack'
import IconButton from '@totalsoft_oss/rocket-ui.components.buttons.icon-button'

const BackToButton = ({ path, fontSize, ...rest }) => {
  const history = useHistory()

  const onBackToList = useCallback(() => {
    path && history.push(path)
  }, [history, path])

  return (
    <IconButton aria-label='back' onClick={onBackToList} {...rest}>
      <ArrowBack fontSize={fontSize} />
    </IconButton>
  )
}

BackToButton.defaultProps = {
  size: 'large',
  fontSize: 'small'
}

BackToButton.propTypes = {
  /**
   * Size of the icon.
   */
  fontSize: PropTypes.oneOf(['inherit', 'small', 'medium', 'large']),
  /**
   * Path where browser will be directed to when the button is clicked.
   */
  path: PropTypes.string
}

export default BackToButton
