import React, { useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'

const FavIcon = ({ favIconSource, defaultFavIcon }) => {
  const onError = useCallback(
    (event, favicon) => {
      favicon.href = defaultFavIcon || '#'
      event.onerror = null
    },
    [defaultFavIcon]
  )

  const setFavIcon = useCallback(
    source => {
      const favicon = document.getElementById('favicon')
      const img = new Image()
      img.onerror = event => onError(event, favicon)
      img.onload = () => (favicon.href = source || '#')
      img.src = source
    },
    [onError]
  )

  useEffect(() => {
    setFavIcon(favIconSource)
  }, [favIconSource, setFavIcon])

  return <></>
}

FavIcon.propTypes = {
  favIconSource: PropTypes.string,
  defaultFavIcon: PropTypes.any
}

export default FavIcon
