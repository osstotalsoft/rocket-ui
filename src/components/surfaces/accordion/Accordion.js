import React from 'react'
import PropTypes from 'prop-types'
import BaseAccordion from '@mui/material/Accordion'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Typography from '@totalsoft_oss/rocket-ui.components.data-display.typography'
import { AccordionSummary, AccordionDetails } from './AccordionStyles'

const Accordion = ({ title, content, variant = 'standard', ...rest }) => {
  return (
    <BaseAccordion disableGutters TransitionProps={{ unmountOnExit: true }} {...rest}>
      <AccordionSummary variant={variant} expandIcon={<ExpandMoreIcon />}>
        <Typography variant='subtitle1' gutterBottom color={'text.primary'}>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant='body2' color='text.secondary'>
          {content}
        </Typography>
      </AccordionDetails>
    </BaseAccordion>
  )
}

Accordion.propTypes = {
  /**
   * The title of accordion.
   */
  title: PropTypes.node,
  /**
   * The content of accordion.
   */
  content: PropTypes.node,
  /**
   * @default 'standard'
   * Variant to use.
   */
  variant: PropTypes.oneOf(['standard', 'filled'])
}

export default Accordion
