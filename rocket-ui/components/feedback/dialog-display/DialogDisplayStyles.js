import { styled, DialogContent as MuiDialogContent, DialogTitle as MuiDialogTitle, Backdrop } from '@mui/material'

export const justifyRight = {
  position: 'absolute',
  top: 16,
  right: 14
}

export const DialogContent = styled(MuiDialogContent)(({ theme }) => ({
  fontFamily: theme.typography.defaultFont.fontFamily,
  fontSize: theme.typography.defaultFont.fontSize
}))

export const DialogTitle = styled(MuiDialogTitle)(({ theme }) => ({
  fontFamily: theme.typography.defaultFont.fontFamily
}))

export const TransparentBackdrop = styled(Backdrop)(() => ({
  backgroundColor: 'transparent'
}))
