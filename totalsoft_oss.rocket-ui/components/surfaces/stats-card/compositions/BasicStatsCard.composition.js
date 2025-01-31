import React from 'react'
import StatsCard from '../StatsCard'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import Grid from '@mui/material/Grid'

export const BasicStatsCard = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <StatsCard
          icon={AttachMoneyIcon}
          iconColor='info'
          title='Stats Card'
          description='Stats card description'
          footer='Stats card footer'
        />
      </Grid>
      <Grid item xs={6}>
        <StatsCard icon={AttachMoneyIcon} iconColor='info' title='Stats Card' description='375.9' footer='Stats card footer' />
      </Grid>
    </Grid>
  )
}
