import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Autocomplete from '../Autocomplete'
import CollapseCard from '@totalsoft_oss/rocket-ui.components.surfaces.collapse-card'
import Typography from '@totalsoft_oss/rocket-ui.components.data-display.typography'
import ColumnHeader from '../components/ColumnHeader'
import { options } from '../common/mocks'

export const AutocompleteStyles = () => {
  const [inputColorValue, setInputColorValue] = useState(1)
  const [typographyColorValue, setTypographyColorValue] = useState()

  return (
    <CollapseCard
      defaultExpanded
      title={'Autocomplete styles'}
      content={
        <Grid container spacing={2}>
          <Grid item xs={12} container spacing={4}>
            <Grid item xs={3}>
              <ColumnHeader>{'Component'}</ColumnHeader>
            </Grid>
            <Grid item xs={3}>
              <ColumnHeader>{'Prop'}</ColumnHeader>
            </Grid>
            <Grid item xs={3}>
              <ColumnHeader>{'Value'}</ColumnHeader>
            </Grid>
          </Grid>
          <Grid item xs={12} container spacing={4}>
            <Grid item xs={3}>
              <Autocomplete
                inputSelectedColor={'#26C6DA'}
                value={inputColorValue}
                onChange={setInputColorValue}
                options={options}
                simpleValue
              />
            </Grid>
            <Grid item xs={3}>
              <Typography>{'inputSelectedColor'}</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography>{'#26C6DA'}</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} container spacing={4}>
            <Grid item xs={3}>
              <Autocomplete
                open
                placeholder={'Placeholder'}
                value={typographyColorValue}
                onChange={setTypographyColorValue}
                typographyContentColor={'secondary'}
              />
            </Grid>
            <Grid item xs={3}>
              <Typography>{'typographyContentColor'}</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography>{'secondary'}</Typography>
            </Grid>
          </Grid>
        </Grid>
      }
    />
  )
}
