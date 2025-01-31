import { styled } from '@mui/material/styles'

export const SideMenuWrapper = styled('div')(() => ({
  position: 'fixed',
  top: '180px',
  right: 0,
  width: '44px',
  height: '38px',
  background: 'rgba(0, 0, 0, 0.3)',
  borderRadius: '8px 0 0 8px',
  textAlign: 'center'
}))

export const SideMenuButton = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: '180px',
  right: 0,
  width: '44px',
  height: '38px',
  background: theme.palette.grey[500_24],
  borderRadius: '8px 0 0 8px',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  '&:hover': {
    outline: 'none',
    backgroundColor: theme.palette.grey[500_32],
    boxShadow: 'none',
    cursor: 'pointer'
  }
}))

export const SideMenuContent = styled('div', { shouldForwardProp: prop => prop !== 'show' })(({ show, theme }) => ({
  position: 'absolute',
  top: '8px',
  right: '60px',
  display: show ? 'block' : 'none',
  minWidth: '160px',
  minHeight: '80px',
  backgroundColor: `#fff`,
  opacity: show ? 1 : 0,
  border: `1px solid ${theme.palette.grey[500]}`,
  borderRadius: '4px',
  WebkitBoxShadow: theme.customShadows.z1,
  WebkitTransform: 'translateY(-15%)',
  transformOrigin: '0 0',
  margin: '5px',
  padding: '10px',
  '&:before, &:after': {
    content: '""',
    display: 'inline-block',
    position: 'absolute',
    top: '8%'
  },
  '&:before': {
    borderBottom: '16px solid transparent',
    borderLeft: `16px solid ${theme.palette.grey[500]}`,
    borderTop: '16px solid transparent',
    right: '-17px'
  },
  '&:after': {
    borderBottom: '16px solid transparent',
    borderLeft: '16px solid #fff',
    borderTop: '16px solid transparent',
    right: '-16px'
  }
}))
