import React from 'react'
import { Card, CardContent, CardHeader, Grid } from '@mui/material'
import DateTime from '../DateTime'
import CollapseCard from '@totalsoft_oss/rocket-ui.components.surfaces.collapse-card'

export const DateTimeErrorHelperText = () => {
  return (
    <CollapseCard
      defaultExpanded
      title='Error & Helper Text Date Pickers'
      content={
        <Grid container spacing={4} justifyItems={'flex-start'}>
          {/** Error */}
          <Grid item xs={12}>
            <Card>
              <CardHeader title='Error' />
              <CardContent>
                <Grid container spacing={4} justifyItems={'flex-start'}>
                  <Grid item xs={4}>
                    <DateTime showPicker='date' label='Date Picker' mask='__.__.____' error={true} />
                  </Grid>
                  <Grid item xs={4}>
                    <DateTime showPicker='dateTime' label='Date Time Picker' mask='__.__.____ __:__' error={true} />
                  </Grid>
                  <Grid item xs={4}>
                    <DateTime showPicker='time' label='Time Picker' mask='__:__' error={true} />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          {/** Helper Text */}
          <Grid item xs={12}>
            <Card>
              <CardHeader title='Helper Text' />
              <CardContent>
                <Grid container spacing={4} justifyItems={'flex-start'}>
                  <Grid item xs={4}>
                    <DateTime showPicker='date' label='Date Picker' mask='__.__.____' helperText='This is a helper text!' />
                  </Grid>
                  <Grid item xs={4}>
                    <DateTime showPicker='dateTime' label='Date Time Picker' mask='__.__.____ __:__' helperText='This is a helper text!' />
                  </Grid>
                  <Grid item xs={4}>
                    <DateTime showPicker='time' label='Time Picker' mask='__:__' helperText='This is a helper text!' />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          {/** Error & Helper Text */}
          <Grid item xs={12}>
            <Card>
              <CardHeader title='Error & Helper Text' />
              <CardContent>
                <Grid container spacing={4} justifyItems={'flex-start'}>
                  <Grid item xs={4}>
                    <DateTime showPicker='date' label='Date Picker' mask='__.__.____' error={true} helperText='This is a helper text!' />
                  </Grid>
                  <Grid item xs={4}>
                    <DateTime
                      showPicker='dateTime'
                      label='Date Time Picker'
                      mask='__.__.____ __:__'
                      error={true}
                      helperText='This is a helper text!'
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <DateTime showPicker='time' label='Time Picker' mask='__:__' error={true} helperText='This is a helper text!' />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      }
    />
  )
}
