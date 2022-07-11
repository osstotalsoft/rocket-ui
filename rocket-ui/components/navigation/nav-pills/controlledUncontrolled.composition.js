import React from 'react'
import { Grid } from '@mui/material'
import NavPills from './NavPills'
import CollapseCard from '@totalsoft_oss/rocket-ui.components.surfaces.collapse-card'
import { tabs, controlled, uncontrolled } from './mocks'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { stackoverflowLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export const ControlledUncontrolled = () => {
  return (
    <CollapseCard
      title='Controlled vs Uncontrolled'
      defaultExpanded
      content={
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <NavPills tabs={tabs(false, true)} />
          </Grid>
          <Grid item xs={4}>
            <SyntaxHighlighter language='javascript' wrapLongLines style={stackoverflowLight}>
              {controlled}
            </SyntaxHighlighter>
          </Grid>
          <Grid item xs={4}>
            <SyntaxHighlighter language='javascript' wrapLongLines style={stackoverflowLight}>
              {uncontrolled}
            </SyntaxHighlighter>
          </Grid>
        </Grid>
      }
    />
  )
}
