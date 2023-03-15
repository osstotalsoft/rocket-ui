import React, { useCallback, useState } from 'react'
import Grid from '@mui/material/Grid'
import { iconPositionOptions, numericRadioOptions, orientationOptions, tabs } from '../mocks'
import IconButton from '@totalsoft_oss/rocket-ui.components.buttons.icon-button'
import CollapseCard from '@totalsoft_oss/rocket-ui.components.surfaces.collapse-card'
import NavPills from '../NavPills'
import RadioButtonSelect from '../components/RadioButtonSelect'
import ControlledCheckbox from '../components/ControlledCheckbox'

const add = <IconButton type='add' variant='outlined' color='secondary' size='small' />
const del = <IconButton type='delete' variant='outlined' color='error' size='small' />
const down = <IconButton type='download' variant='outlined' color='success' size='small' />

export const NavPillsWithActions = () => {
  const [actions, setActions] = useState([add])
  const [orientation, setOrientation] = useState('horizontal')
  const [actionsNo, setActionsNo] = useState('1')
  const [iconPosition, setIconPosition] = useState('start')
  const [withIcons, setWithIcons] = useState(false)

  const handleSelectIconPosition = useCallback(event => {
    setIconPosition(event?.target?.value)
  }, [])
  const handleSelectOrientation = useCallback(event => {
    setOrientation(event?.target?.value)
  }, [])
  const handleSelectActionsNo = useCallback(event => {
    setActionsNo(event?.target?.value)

    switch (event?.target?.value) {
      case '1':
        setActions([add])
        break
      case '2':
        setActions([add, del])
        break
      case '3':
        setActions([add, del, down])
        break
    }
  }, [])

  return (
    <CollapseCard
      title='Navigation pills with actions'
      defaultExpanded
      content={
        <Grid container spacing={4}>
          <Grid item xs={7}>
            <NavPills tabs={tabs(withIcons, true)} actions={actions} orientation={orientation} tabProps={{ iconPosition: iconPosition }} />
          </Grid>
          <Grid item xs={5} sx={{ borderLeft: 1, borderColor: 'divider' }}>
            <Grid item>
              <ControlledCheckbox value={withIcons} onChange={setWithIcons} label={'Tabs with icons'} />
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
              <RadioButtonSelect
                label={`Number of actions`}
                value={actionsNo}
                options={numericRadioOptions}
                valueKey='name'
                onSelect={handleSelectActionsNo}
              />
            </Grid>
          </Grid>
        </Grid>
      }
    />
  )
}
