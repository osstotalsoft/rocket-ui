export const defaultFont = {
  fontFamily: 'Source Sans Pro',
  fontSize: 14,
  lineHeight: '1.5em',
  fontWeight: '300'
}

export const generateTypography = palette => ({
  ...defaultFont,
  defaultFont,
  useNextVariants: true,
  htmlFontSize: 14,
  fontWeightMedium: 300,
  button: {
    ...defaultFont,
    textAlign: 'center',
    fontStretch: 'normal',
    fontStyle: 'normal'
  },
  body: {
    ...defaultFont,
    fontSize: 14
  },
  header: {
    title: {
      borderRadius: '3px',
      textTransform: 'none',
      fontWeight: 'bold',
      color: palette.primary.main,
      '&:hover,&:focus': {
        background: 'transparent'
      }
    },
    titleMobile: {
      borderRadius: '3px',
      textTransform: 'none',
      fontWeight: 'bold',
      color: palette.primary.main,
      '&:hover,&:focus': {
        background: 'transparent'
      }
    }
  }
})
