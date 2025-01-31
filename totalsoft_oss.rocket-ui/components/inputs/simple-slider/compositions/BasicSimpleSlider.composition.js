import React from 'react'
import SimpleSlider from '../SimpleSlider'
import CollapseCard from '@totalsoft_oss/rocket-ui.components.surfaces.collapse-card'
import Grid from '@mui/material/Grid'

export const SimpleSliderVariants = () => {
  return (
    <CollapseCard
      defaultExpanded
      title='Simple slider'
      content={
        <Grid container spacing={4}>
          <Grid item xs={12} container justifyContent={'space-around'}>
            <Grid item xs={6} md={2}>
              <SimpleSlider label='Basic' min={1} max={12} step={1} decimalScale={0} fullWidth />
            </Grid>
            <Grid item xs={6} md={2}>
              <SimpleSlider label='With slider limits' min={1} max={12} step={1} decimalScale={0} showSliderLimits fullWidth />
            </Grid>
            <Grid item xs={6} md={2}>
              <SimpleSlider label='Required' min={1} max={12} step={1} decimalScale={0} required fullWidth />
            </Grid>
            <Grid item xs={6} md={2}>
              <SimpleSlider label='Error' error min={1} max={12} step={1} decimalScale={0} helperText={'Mandatory field.'} fullWidth />
            </Grid>
          </Grid>
          <Grid item xs={12} container justifyContent={'space-around'}>
            <Grid item xs={6} md={2}>
              <SimpleSlider
                label='Helper text'
                min={1}
                max={12}
                step={1}
                decimalScale={0}
                helperText={'Enter the number of months.'}
                fullWidth
              />
            </Grid>
            <Grid item xs={6} md={2}>
              <SimpleSlider
                label='With custom marks'
                min={1}
                max={12}
                step={1}
                decimalScale={0}
                marks={[
                  { value: 1, label: '1 month' },
                  { value: 6, label: '6 months' },
                  { value: 12, label: '12 months' }
                ]}
                fullWidth
              />
            </Grid>
            <Grid item xs={6} md={2}>
              <SimpleSlider
                label='Restricted values'
                min={1}
                max={12}
                step={null}
                decimalScale={0}
                marks={[
                  { value: 1, label: '1 month' },
                  { value: 6, label: '6 months' },
                  { value: 12, label: '12 months' }
                ]}
                fullWidth
              />
            </Grid>
            <Grid item xs={6} md={2}>
              <SimpleSlider label='Discrete' min={1} max={12} step={1} decimalScale={0} marks={true} fullWidth />
            </Grid>
          </Grid>
        </Grid>
      }
    />
  )
}
