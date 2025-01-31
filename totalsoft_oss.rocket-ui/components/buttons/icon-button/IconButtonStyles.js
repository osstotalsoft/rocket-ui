import { styled } from '@mui/material/styles'
import Button from '@totalsoft_oss/rocket-ui.components.buttons.button'

const IconButton = styled(Button)(() => ({
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  display: 'inline-flex',
  borderRadius: '50%',
  minWidth: '0px',
  '&.MuiButton-sizeSmall': {
    padding: '0px',
    width: '40px',
    height: '40px'
  },
  '&.MuiButton-sizeMedium': {
    padding: '11px',
    width: '48px',
    height: '48px'
  },
  '&.MuiButton-sizeLarge': {
    padding: '15px',
    width: '52px',
    height: '52px'
  }
}))

export default IconButton
