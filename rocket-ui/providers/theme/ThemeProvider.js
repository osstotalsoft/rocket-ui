import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider as MUIThemeProvider, StyledEngineProvider } from '@mui/material'
import { defaultTheme } from '@totalsoft_oss/rocket-ui.themes'

const ThemeProvider = ({ children }) => {
  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={defaultTheme}>{children}</MUIThemeProvider>
    </StyledEngineProvider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node
}

export default ThemeProvider
