import { CardContent as MuiCardContent, styled } from '@mui/material'
import { includes } from 'ramda'

export const CardContent = styled(MuiCardContent, { shouldForwardProp: prop => !includes(prop, ['variant']) })(({ variant }) => ({
  ...(variant === 'standard' && {
    paddingTop: '8px'
  })
}))
