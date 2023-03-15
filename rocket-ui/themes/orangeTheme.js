import { createTheme } from '@mui/material/styles'
import componentsOverride from './common/overrides'
import generatePalette from './common/palette'
import { generateTypography } from './common/typography'
import table from './common/table'
import { generateShadows, generateCustomShadows } from './common/shadows'

export const palette = generatePalette({
  PRIMARY: {
    lighter: '#b0b0b0',
    light: '#818181',
    main: '#555555',
    dark: '#2c2c2c',
    darker: '#000000',
    contrastText: '#fff',
    rgba: 'rgba(85, 85, 85, 1)'
  },
  SECONDARY: {
    lighter: '#ffd170',
    light: '#ffa040',
    main: '#FF6F00',
    dark: '#c43e00',
    darker: '#8c0000',
    contrastText: '#fff',
    rgba: 'rgba(255, 111, 0)'
  },
  BACKGROUND: {
    main: '#fff'
  },
  SIDE_MENU: {
    bgColor: '#000',
    color: '#fff',
    hoverBgColor: 'rgba(200, 200, 200, 0.2)',
    hoverTextColor: '#fff',
    bgOpacity: '0.8',
    activeBgColor: '#FF6F00'
  },
  WHITE: {
    main: '#fff',
    contrastText: '#555555'
  }
})

const orangeTheme = createTheme({
  palette,
  shape: { borderRadius: 8 },
  typography: generateTypography(palette),
  table,
  shadows: generateShadows(palette),
  customShadows: generateCustomShadows(palette)
})

orangeTheme.components = componentsOverride(orangeTheme)

export default orangeTheme
