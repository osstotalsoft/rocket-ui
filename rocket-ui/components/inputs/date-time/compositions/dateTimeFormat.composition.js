import React, { useCallback, useState } from 'react'
import { Grid, ToggleButton, ToggleButtonGroup } from '@mui/material'
import DateTime from '../DateTime'
import CollapseCard from '@totalsoft_oss/rocket-ui.components.surfaces.collapse-card'

const maskMap = {
  fr: { date: '__/__/____', dateTime: '__/__/____ __:__', time: '__:__' },
  ['en-US']: { date: '__/__/____', dateTime: '__/__/____ __:__ _M', time: '__:__ _M' },
  ru: { date: '__.__.____', dateTime: '__.__.____ __:__', time: '__:__' },
  ro: { date: '__.__.____', dateTime: '__.__.____ __:__', time: '__:__' },
  de: { date: '__.__.____', dateTime: '__.__.____ __:__', time: '__:__' }
}

export const DateTimeFormat = () => {
  const [format, setFormat] = useState('en-US')
  const handleClick = useCallback(e => {
    setFormat(e.target.value)
  }, [])

  return (
    <CollapseCard
      defaultExpanded
      title='Format Date Options'
      content={
        <Grid container spacing={4} justifyItems={'flex-start'}>
          <Grid item xs={12}>
            <ToggleButtonGroup value={format} exclusive sx={{ mb: 2, display: 'block' }}>
              {Object.keys(maskMap).map(localeItem => (
                <ToggleButton key={localeItem} value={localeItem} onClick={handleClick}>
                  {localeItem}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Grid>
          <Grid item xs={4}>
            <DateTime showPicker='date' label='Date Picker' format={format} mask={maskMap[format].date} />
          </Grid>
          <Grid item xs={4}>
            <DateTime showPicker='dateTime' label='Date Time Picker' format={format} mask={maskMap[format].dateTime} />
          </Grid>
          <Grid item xs={4}>
            <DateTime showPicker='time' label='Time Picker' format={format} mask={maskMap[format].time} />
          </Grid>
        </Grid>
      }
    />
  )
}
