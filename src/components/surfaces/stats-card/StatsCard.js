import React from 'react'
import PropTypes from 'prop-types'
import { StyledCard, CardContent, StyledCardActions, CardTitle, CardDescription, StyledCardHeader, iconStyle } from './StatsCardStyles'
import Divider from '@mui/material/Divider'

const StatsCard = ({ icon: Icon, iconColor = 'info', title, description, footer, variant, footerProps, headerProps }) => {
  return (
    <StyledCard disablePadding>
      <StyledCardHeader avatar={Icon && <Icon style={iconStyle} />} hasIcon={true} iconColor={iconColor} {...headerProps} />
      <CardContent>
        <CardTitle variant='subtitle1'>{title}</CardTitle>
        <CardDescription variant='h5'>{description}</CardDescription>
      </CardContent>
      <Divider />
      <StyledCardActions variant={variant} {...footerProps}>
        {footer}
      </StyledCardActions>
    </StyledCard>
  )
}

StatsCard.propTypes = {
  /**
   * Icon to be displayed.
   */
  icon: PropTypes.elementType,
  /**
   * @default 'info'
   * Icon color.
   */
  iconColor: PropTypes.oneOf(['warning', 'primary', 'error', 'success', 'info', 'rose', 'grey', 'secondary']),
  /**
   * Content of the title.
   */
  title: PropTypes.node,
  /**
   * Content of the description.
   */
  description: PropTypes.node,
  /**
   * Footer to be displayed at the bottom of the card.
   */
  footer: PropTypes.node,
  /**
   * Variant to use.
   */
  variant: PropTypes.oneOf(['standard', 'filled']),
  /**
   * Props applied to the CardActions component.
   */
  footerProps: PropTypes.object,
  /**
   * Props applied to the CardHeader component.
   */
  headerProps: PropTypes.object
}

export default StatsCard
