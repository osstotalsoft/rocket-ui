import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@totalsoft_oss/rocket-ui.providers.theme'

const TestingWrapper = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>
}

TestingWrapper.propTypes = {
  children: PropTypes.node
}

export default TestingWrapper
