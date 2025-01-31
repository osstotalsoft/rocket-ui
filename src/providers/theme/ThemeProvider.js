import React from 'react'
import PropTypes from 'prop-types'
import { defaultTheme } from '@totalsoft_oss/rocket-ui.themes'
import { StyledEngineProvider, ThemeProvider as MUIThemeProvider } from '@mui/material/styles'

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
