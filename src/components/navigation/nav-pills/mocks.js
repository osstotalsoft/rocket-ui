import React from 'react'
import CarRepairIcon from '@mui/icons-material/CarRepair'
import PhoneIcon from '@mui/icons-material/Phone'
import RocketIcon from '@mui/icons-material/Rocket'
import ShieldMoonSharpIcon from '@mui/icons-material/ShieldMoonSharp'

export const tabs = (withIcons, withText) => [
  {
    label: withText && 'Item one',
    icon: withIcons ? <CarRepairIcon /> : null,
    content: 'Content 1'
  },
  {
    label: withText && 'Item two',
    icon: withIcons ? <PhoneIcon /> : null,
    content: 'Content 2'
  },
  {
    label: withText && 'Item three',
    icon: withIcons ? <RocketIcon /> : null,
    content: 'Content 3'
  },
  {
    label: withText && 'Item four',
    icon: withIcons ? <ShieldMoonSharpIcon /> : null,
    content: 'Content 4'
  }
]

export const orientationOptions = [{ name: 'horizontal' }, { name: 'vertical' }]
export const iconPositionOptions = [{ name: 'start' }, { name: 'end' }, { name: 'top' }, { name: 'bottom' }]
export const numericRadioOptions = [{ name: '1' }, { name: '2' }, { name: '3' }]
export const colorOptions = ['primary', 'secondary', 'info', 'success', 'warning', 'error', 'rose', 'white', 'dark']

export const controlled = `function ControlledNavPills({tabs}) {
  const [active, setActive] = useState(0)

  const handleChange = (event, newValue) => {
    setActive(newValue)
  }

  return(
    <NavPills
      tabs={tabs}
      active={active}
      onChange={handleChange}
    />
  )
`

export const uncontrolled = `function UncontrolledNavPills({tabs}) {
  return(
    <NavPills
      tabs={tabs}
    />
  )
`
