import { styled, Grid, Typography } from '@mui/material'

export const NotFoundText = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontWeight: 'bold',
  fontFamily: theme.typography.defaultFont.fontFamily
}))

export const NotFoundImage = styled(Grid)(() => ({
  marginBottom: '30px',
  marginTop: '50px',
  textAlign: 'center'
}))

export default NotFoundText
