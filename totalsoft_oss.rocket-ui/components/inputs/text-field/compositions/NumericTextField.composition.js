import React, { useState } from 'react'
import TextField from '../TextField'
import CollapseCard from '@totalsoft_oss/rocket-ui.components.surfaces.collapse-card'
import Grid from '@mui/material/Grid'

export const TextFieldNumeric = () => {
  const [numberValue, setNumberValue] = useState()
  const [internationalValue, setInternationalValue] = useState()
  const [phoneNumberValue, setPhoneNumberValue] = useState()

  return (
    <CollapseCard
      defaultExpanded
      title='Number field'
      content={
        <Grid container spacing={4} justifyItems={'flex-start'}>
          <Grid item xs={2}>
            <TextField
              isNumeric
              label='Basic number field'
              value={numberValue || ''}
              onChange={setNumberValue}
              debounceBy={2000}
              fullWidth
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              isNumeric
              language='de-DE'
              label='Internationalized number field'
              value={internationalValue || ''}
              onChange={setInternationalValue}
              fullWidth
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              isNumeric
              language='de-DE'
              label='Internationalized currency field'
              value={internationalValue || ''}
              onChange={setInternationalValue}
              currency='EUR'
              fullWidth
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              label='Custom phone number format'
              value={phoneNumberValue}
              onChange={setPhoneNumberValue}
              isNumeric
              inputProps={{ format: '+40 (###) ### ###', mask: '_', allowEmptyFormatting: true }}
              fullWidth
            />
          </Grid>
        </Grid>
      }
    />
  )
}
