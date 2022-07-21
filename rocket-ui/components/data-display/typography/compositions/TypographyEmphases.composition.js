import React from 'react'
import Typography from '../Typography'

export const TypographyEmphases = () => {
  return (
    <>
      <Typography variant='body1' color='primary.main' emphasis='bold' gutterBottom tooltip="I'm a tooltip">
        Primary and bold - hover me to see a tooltip
      </Typography>
      <Typography variant='body1' color='secondary.main' emphasis='italic' gutterBottom>
        Secondary and italic
      </Typography>
      <Typography variant='body1' color='text.primary' emphasis='underline' gutterBottom>
        Text primary and underline
      </Typography>
      <Typography variant='body1' color='text.secondary' emphasis='line-through' gutterBottom>
        Text secondary and line-through
      </Typography>
      <Typography variant='body1' color='error.main' emphasis='overline' gutterBottom tooltip="I'm a tooltip">
        Error and overline
      </Typography>
    </>
  )
}
