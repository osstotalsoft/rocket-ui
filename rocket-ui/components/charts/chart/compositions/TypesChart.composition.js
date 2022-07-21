import React from 'react'
import { Grid } from '@mui/material'
import BarChartIcon from '@mui/icons-material/BarChart'
import { lineChartData, barChartData, chartOptions } from '../mocks'
import Chart from '../Chart'

export const ChartTypes = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Chart
          title='Line chart'
          subheader={'Chart infos'}
          type='line'
          icon={BarChartIcon}
          iconColor='info'
          data={lineChartData}
          options={chartOptions}
        />
      </Grid>
      <Grid item xs={6}>
        <Chart
          title='Bar chart'
          subheader={'Chart infos'}
          type='bar'
          icon={BarChartIcon}
          iconColor='info'
          data={barChartData}
          options={chartOptions}
        />
      </Grid>
    </Grid>
  )
}
