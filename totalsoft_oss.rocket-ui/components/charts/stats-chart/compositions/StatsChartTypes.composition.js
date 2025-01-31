import React from 'react'
import StatsChart from '../StatsChart'
import Button from '@totalsoft_oss/rocket-ui.components.buttons.button'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import Grid from '@mui/material/Grid'
import { statsChartData, statsChartOptions } from '../mocks'

export const StatsChartTypes = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <StatsChart
          type='line'
          data={statsChartData}
          chartColor={'info'}
          StatIcon={AccessTimeIcon}
          statText={'Line chart'}
          title={'Line Chart with warning icon color'}
          options={statsChartOptions}
          iconColor='warning'
        />
      </Grid>
      <Grid item xs={6}>
        <StatsChart
          type='bar'
          data={statsChartData}
          chartColor={'info'}
          StatIcon={AccessTimeIcon}
          statText={'Bar chart infos'}
          title={'Bar Chart'}
          options={statsChartOptions}
        />
      </Grid>
      <Grid item xs={6}>
        <StatsChart
          type='line'
          data={statsChartData}
          chartColor={'info'}
          StatIcon={AccessTimeIcon}
          statText={'Line chart infos'}
          title={'Line Chart with action button'}
          options={statsChartOptions}
          statAction={<Button size='tiny'>Ok</Button>}
        />
      </Grid>
    </Grid>
  )
}
