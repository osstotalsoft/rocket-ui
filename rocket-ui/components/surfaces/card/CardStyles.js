import BaseCard from '@mui/material/Card'
import MuiCardContent from '@mui/material/CardContent'
import { styled } from '@mui/material/styles'
import { includes } from 'ramda'

export const iconStyle = {
  color: '#FFFFFF',
  width: '30px',
  height: '30px',
  margin: 'auto',
  padding: '2px'
}

const getThemeColor = (theme, color) => {
  switch (color) {
    case 'rose':
      return { background: theme.palette.gradients.rose, color: theme.palette.white.main }
    case 'success':
      return { background: theme.palette.gradients.success }
    case 'danger':
      return { background: theme.palette.gradients.danger }
    case 'primary':
      return { background: theme.palette.primary.main, color: theme.palette.white.main }
    case 'warning':
      return { background: theme.palette.gradients.warning }
    case 'info':
      return { background: theme.palette.gradients.info }
    default:
      return { color: theme.palette.primary.main }
  }
}

const Card = styled(BaseCard, {
  shouldForwardProp: prop => !includes(prop, ['hasIcon', 'iconColor'])
})(({ theme, color, hasIcon }) => {
  return {
    ...getThemeColor(theme, color),
    ...(hasIcon && {
      display: 'inline-block',
      position: 'relative',
      width: '100%',
      margin: '25px 0',
      background: '#fff',
      overflow: 'visible'
    })
  }
})

export const CardContent = styled(MuiCardContent, { shouldForwardProp: prop => !includes(prop, ['variant']) })(({ variant }) => ({
  ...(variant === 'standard' && {
    paddingTop: '8px'
  })
}))

export default Card
