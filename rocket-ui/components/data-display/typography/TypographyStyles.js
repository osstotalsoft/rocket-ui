import { Typography as BaseTypography, styled } from '@mui/material'
import { includes } from 'ramda'

const Typography = styled(BaseTypography)(({ theme, variant }) => ({
  fontFamily: theme.typography.fontFamily,
  textTransform: includes(variant, ['overline', 'button']) ? 'uppercase' : 'none'
}))

export default Typography
