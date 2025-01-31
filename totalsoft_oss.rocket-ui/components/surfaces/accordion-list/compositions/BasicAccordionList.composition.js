import React from 'react'
import Grid from '@mui/material/Grid'
import AccordionList from '../AccordionList'

const mockedAccordionContentList = [
  {
    title: 'Basic AccordionList Item1',
    details: 'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.Aliquam eget maximus est, id dignissim quam'
  },
  {
    title: 'Basic AccordionList Item2',
    details: 'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.Aliquam eget maximus est, id dignissim quam'
  }
]

const mockedAccordionContentListExpandAll = [
  {
    title: 'Basic AccordionList ExpandAll',
    details: 'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.Aliquam eget maximus est, id dignissim quam'
  },
  {
    title: 'Basic AccordionList ExpandAll',
    details: 'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.Aliquam eget maximus est, id dignissim quam'
  }
]

export const BasicAccordionList = () => {
  return (
    <Grid container rowSpacing={4} columnSpacing={2}>
      <Grid item xs={6}>
        <AccordionList content={mockedAccordionContentList} />
      </Grid>
      <Grid item xs={6}>
        <AccordionList variant='filled' square={true} canExpandAll content={mockedAccordionContentListExpandAll} />
      </Grid>
    </Grid>
  )
}
