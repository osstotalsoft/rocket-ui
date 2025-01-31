import React from 'react'
import Grid from '@mui/material/Grid'
import Accordion from '../Accordion'

const mockedAccordionContent = {
  title: 'Basic Accordion Item',
  content: 'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.Aliquam eget maximus est, id dignissim quam'
}

const mockedAccordionContentSquare = {
  title: 'Square and filled Accordion Item',
  content: 'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.Aliquam eget maximus est, id dignissim quam'
}

export const BasicAccordion = () => {
  return (
    <Grid container rowSpacing={4} columnSpacing={2}>
      <Grid item xs={6}>
        <Accordion title={mockedAccordionContent?.title} content={mockedAccordionContent?.content} />
      </Grid>
      <Grid item xs={6}>
        <Accordion
          variant='filled'
          square={true}
          title={mockedAccordionContentSquare?.title}
          content={mockedAccordionContentSquare?.content}
        />
      </Grid>
    </Grid>
  )
}
