import MuiAccordionDetails from '@mui/material/AccordionDetails'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import { styled } from '@mui/material/styles'
import { includes } from 'ramda'

export const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  padding: '8px'
}))

export const AccordionSummary = styled(MuiAccordionSummary, {
  shouldForwardProp: prop => !includes(prop, 'variant')
})(({ theme, variant }) => ({
  ...(variant === 'filled' && { backgroundColor: theme.palette.grey[200] })
}))
