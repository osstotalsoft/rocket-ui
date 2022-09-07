import { styled, CardContent as MuiCardContent } from '@mui/material'
import Card from '@totalsoft_oss/rocket-ui.components.surfaces.card'
import CardHeader from '@totalsoft_oss/rocket-ui.components.surfaces.card-header'
import CardActions from '@totalsoft_oss/rocket-ui.components.surfaces.card-actions'
import Typography from '@totalsoft_oss/rocket-ui.components.data-display.typography'

export const StyledCard = styled(Card)(({ theme }) => ({
  display: 'inline-block',
  position: 'relative',
  width: '100%',
  margin: '25px 0',
  boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
  borderRadius: '6px',
  color: theme.palette.primary.main,
  background: '#fff',
  overflow: 'visible'
}))

export const StyledCardHeader = styled(CardHeader)(() => ({
  paddingTop: '5px'
}))

export const CardContent = styled(MuiCardContent)(() => ({
  textAlign: 'right',
  fontSize: '10px',
  paddingTop: '10px',
  padding: '2px 10px'
}))

export const StyledCardActions = styled(CardActions)(({ theme }) => ({
  margin: '0 20px 10px',
  height: 'auto',
  padding: '2px 0 0 0',
  ...theme.typography.defaultFont
}))

export const CardTitle = styled(Typography)(({ theme }) => ({
  marginBottom: '0',
  color: theme.palette.grey[500],
  margin: '0 0 5px'
}))

export const CardDescription = styled(Typography)(() => ({
  margin: '0'
}))

export const iconStyle = {
  color: '#FFFFFF',
  width: '3rem',
  height: '3rem',
  margin: 'auto',
  padding: '2px'
}
