import { CardHeader as MuiCardHeader, styled } from '@mui/material'
import { includes } from 'ramda'

const CardHeader = styled(MuiCardHeader, {
  shouldForwardProp: prop => !includes(prop, ['variant', 'hasIcon', 'iconColor'])
})(({ theme, variant, hasIcon, iconColor }) => ({
  [`&.MuiCardHeader-root`]: {
    ...(variant === 'filled' && { backgroundColor: theme.palette.grey[200], minHeight: '48px' })
  },
  [`& .MuiCardHeader-avatar`]: {
    ...(hasIcon && {
      width: '3.8rem',
      height: '3.8rem',
      borderRadius: '0.75rem',
      background: `linear-gradient(195deg, ${theme.palette[iconColor].light}, ${theme.palette[iconColor].main})`,
      position: 'absolute',
      top: '-20px'
    })
  },
  [`& .MuiCardHeader-content`]: {
    ...(hasIcon && {
      paddingLeft: '80px'
    })
  },
  [`& .MuiCardHeader-action`]: {
    position: 'absolute',
    right: '0px',
    top: '0px',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '20px 24px'
  }
}))

export default CardHeader
