import { styled, TextField as MuiTextField, Button } from '@mui/material'

const PREFIX = 'StyledTextField'
export const classes = {
  label: `${PREFIX}-label`,
  input: `${PREFIX}-input`,
  stepper: `${PREFIX}-stepper`
}

export const TextField = styled(MuiTextField)(({ theme }) => ({
  [`& .${classes.label}`]: {
    ...theme.typography.defaultFont,
    fontWeight: '400',
    lineHeight: '1.42857'
  },
  [`& .${classes.input}`]: {
    '&,&::placeholder': {
      ...theme.typography.defaultFont,
      fontWeight: '400'
    }
  },
  [`& .${classes.stepperFixedWidth}`]: {
    width: '120px'
  }
}))

export const StepButton = styled(Button)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  minWidth: '28px',
  height: '28px',
  fontSize: '22px',
  fontWeight: 'bold',
  borderRadius: 'unset'
}))
