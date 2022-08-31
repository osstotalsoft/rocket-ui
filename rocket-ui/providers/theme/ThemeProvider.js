import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider as MUIThemeProvider } from '@mui/material'
import { defaultTheme } from '@totalsoft_oss/rocket-ui.themes'

const ThemeProvider = ({ children }) => {
  return <MUIThemeProvider theme={defaultTheme}>{children}</MUIThemeProvider>
}

ThemeProvider.propTypes = {
  children: PropTypes.node
}

export default ThemeProvider
