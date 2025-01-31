import MuiCardContent from '@mui/material/CardContent'
import { styled } from '@mui/material/styles'
import CardHeader from '@totalsoft_oss/rocket-ui.components.surfaces.card-header'
import { includes } from 'ramda'

export const iconStyle = {
  color: '#FFFFFF',
  width: '30px',
  height: '30px',
  margin: 'auto',
  padding: '2px'
}

export const StyledCardHeader = styled(CardHeader)(() => ({
  padding: '6px 24px 0px 24px'
}))

export const CardContent = styled(MuiCardContent, { shouldForwardProp: prop => !includes(prop, ['variant']) })(({ variant }) => ({
  ...(variant === 'standard' && {
    paddingTop: '8px'
  })
}))
