import MuiCardContent from '@mui/material/CardContent'
import { styled } from '@mui/material/styles'
import { includes } from 'ramda'

export const CardContent = styled(MuiCardContent, { shouldForwardProp: prop => !includes(prop, ['variant']) })(({ variant }) => ({
  ...(variant === 'standard' && {
    paddingTop: '8px'
  })
}))
