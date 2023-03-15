import React from 'react'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import ClearIcon from '@mui/icons-material/Clear'
import MuiIconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'

export const CalendarTodaySmallIcon = props => {
  return <CalendarTodayIcon fontSize='small' {...props} />
}

export const ClearSmallIcon = props => {
  return <ClearIcon fontSize='small' {...props} />
}

export const IconButton = styled(MuiIconButton)(({ theme }) => ({
  ...theme.typography.defaultFont,
  padding: '0px',
  color: theme.palette.black.main
}))
