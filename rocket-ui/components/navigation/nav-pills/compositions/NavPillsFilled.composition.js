import React, { useCallback, useState } from 'react'
import { Grid } from '@mui/material'
import Autocomplete from '@totalsoft_oss/rocket-ui.components.inputs.autocomplete'
import CollapseCard from '@totalsoft_oss/rocket-ui.components.surfaces.collapse-card'
import NavPills from '../NavPills'
import RadioButtonSelect from '../components/RadioButtonSelect'
import ControlledCheckbox from '../components/ControlledCheckbox'
import { colorOptions, iconPositionOptions, orientationOptions, tabs } from '../mocks'

export const NavPillsFilled = () => {
  const [orientation, setOrientation] = useState('horizontal')
  const [iconPosition, setIconPosition] = useState('start')
  const [withIcons, setWithIcons] = useState(false)
  const [withText, setWithText] = useState(true)
  const [gradient, setGradient] = useState(false)
  const [color, setColor] = useState('secondary')

  const handleSelectOrientation = useCallback(event => {
    setOrientation(event?.target?.value)
  }, [])
  const handleSelectIconPosition = useCallback(event => {
    setIconPosition(event?.target?.value)
  }, [])

  return (
    <CollapseCard
      title='Filled selection'
      defaultExpanded
      content={
        <Grid container columnSpacing={4}>
          <Grid item xs={5} sx={{ borderRight: 1, borderColor: 'divider' }}>
            <NavPills
              tabs={tabs(withIcons, withText)}
              tabProps={{ iconPosition: iconPosition }}
              orientation={orientation}
              gradient={gradient}
              color={color}
            />
          </Grid>
          <Grid item xs={2}>
            <Autocomplete value={color} label='Selection color' options={colorOptions} simpleValue={true} onChange={setColor} />
            <Grid item>
              <ControlledCheckbox value={gradient} onChange={setGradient} label={'With gradient color'} />
              <ControlledCheckbox value={withIcons} onChange={setWithIcons} label={'Tabs with icons'} />
              <ControlledCheckbox value={withText} onChange={setWithText} label={'Tabs with text'} />
            </Grid>
          </Grid>
          <Grid item xs={5}>
            <Grid item>
              <RadioButtonSelect
                label={`Orientation: <NavPills orientation={"${orientation}"} {...}/>`}
                value={orientation}
                options={orientationOptions}
                valueKey='name'
                onSelect={handleSelectOrientation}
              />
            </Grid>
            <Grid item>
              {withIcons && (
                <RadioButtonSelect
                  label={`Icon Position: <NavPills tabProps={{ iconPosition: "${iconPosition}" }} {...}/>`}
                  value={iconPosition}
                  options={iconPositionOptions}
                  valueKey='name'
                  onSelect={handleSelectIconPosition}
                />
              )}
            </Grid>
          </Grid>
        </Grid>
      }
    />
  )
}
