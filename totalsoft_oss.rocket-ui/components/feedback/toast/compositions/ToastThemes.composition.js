/* eslint-disable react/jsx-no-bind */
import React from 'react'
import Grid from '@mui/material/Grid'
import CollapseCard from '@totalsoft_oss/rocket-ui.components.surfaces.collapse-card'
import Typography from '@totalsoft_oss/rocket-ui.components.data-display.typography'
import coloredTheme from '../img/ColoredTheme.png'
import darkTheme from '../img/DarkTheme.png'
import lightTheme from '../img/LightTheme.png'

export const ToastThemes = () => {
  return (
    <CollapseCard
      defaultExpanded
      title='Themes'
      content={
        <Grid container spacing={2} justifyItems={'flex-start'}>
          <Grid item xs={4}>
            <Typography variant='subtitle1'>{`<ToastContainer theme='dark' />`}</Typography>
            <img src={darkTheme} alt='logo' />
          </Grid>
          <Grid item xs={4}>
            <Typography variant='subtitle1'>{`<ToastContainer theme='colored' />`}</Typography>
            <img src={coloredTheme} alt='logo' />
          </Grid>
          <Grid item xs={4}>
            <Typography variant='subtitle1'>{`<ToastContainer theme='light' />`}</Typography>
            <img src={lightTheme} alt='logo' />
          </Grid>
        </Grid>
      }
    />
  )
}
