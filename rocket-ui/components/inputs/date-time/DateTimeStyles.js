import React from 'react'
import { CalendarToday, Clear } from '@mui/icons-material'
import { styled, IconButton as MuiIconButton } from '@mui/material'

export const CalendarTodaySmallIcon = props => {
  return <CalendarToday fontSize='small' {...props} />
}

export const ClearSmallIcon = props => {
  return <Clear fontSize='small' {...props} />
}

export const IconButton = styled(MuiIconButton)(({ theme }) => ({
  ...theme.typography.defaultFont,
  padding: '0px',
  color: theme.palette.black.main
}))
