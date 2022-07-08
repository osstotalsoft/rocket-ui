import { AccordionDetails as MuiAccordionDetails, AccordionSummary as MuiAccordionSummary, styled } from '@mui/material'
import { includes } from 'ramda'

export const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  padding: '8px'
}))

export const AccordionSummary = styled(MuiAccordionSummary, {
  shouldForwardProp: prop => !includes(prop, 'variant')
})(({ theme, variant }) => ({
  ...(variant === 'filled' && { backgroundColor: theme.palette.grey[200] })
}))
