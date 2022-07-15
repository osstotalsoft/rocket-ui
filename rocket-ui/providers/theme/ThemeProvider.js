import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider as MUIThemeProvider } from '@mui/material'
import { defaultTheme } from '@totalsoft_oss/rocket-ui.themes'

import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'

const muiCache = createCache({
  key: 'mui',
  prepend: true
})

const ThemeProvider = ({ children }) => {
  return (
    <CacheProvider value={muiCache}>
      <MUIThemeProvider theme={defaultTheme}>{children}</MUIThemeProvider>
    </CacheProvider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node
}

export default ThemeProvider
