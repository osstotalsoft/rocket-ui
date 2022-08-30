import { createTheme } from '@mui/material'
import componentsOverride from './common/overrides'
import generatePalette from './common/palette'
import { generateTypography } from './common/typography'
import table from './common/table'
import { generateShadows, generateCustomShadows } from './common/shadows'

export const palette = generatePalette({
  PRIMARY: {
    lighter: '#81b8f8',
    light: '#4c88c5',
    main: '#00497b',
    dark: '#003266',
    darker: '#000a3b',
    contrastText: '#fff',
    rgba: 'rgba(0, 91, 148, 1)'
  },
  SECONDARY: {
    lighter: '#77a2dc',
    light: '#4574aa',
    main: '#005B94',
    dark: '#00224e',
    darker: '#000026',
    contrastText: '#fff',
    rgba: 'rgb(188 228 250)'
  },
  BACKGROUND: {
    main: '#F5F8FA'
  },
  SIDE_MENU: {
    bgColor: '#BCE4FA',
    color: '#00385F',
    hoverBgColor: '#DFF2FD',
    hoverTextColor: '#00385F',
    bgOpacity: '1',
    activeBgColor: '#00497b'
  },
  WHITE: {
    main: '#fff',
    contrastText: '#00497b'
  }
})

const blueTheme = createTheme({
  palette,
  shape: { borderRadius: 8 },
  typography: generateTypography(palette),
  table,
  shadows: generateShadows(palette),
  customShadows: generateCustomShadows(palette)
})

blueTheme.components = componentsOverride(blueTheme)

export default blueTheme
