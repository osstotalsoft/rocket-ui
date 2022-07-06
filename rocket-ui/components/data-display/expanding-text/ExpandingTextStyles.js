import Typography from '@totalsoft_oss/rocket-ui.components.data-display.typography'
import { styled } from '@mui/material'

const ShowButton = styled(Typography)(({ theme }) => ({
  color: theme.palette.link.main,
  cursor: 'pointer'
}))

export default ShowButton
