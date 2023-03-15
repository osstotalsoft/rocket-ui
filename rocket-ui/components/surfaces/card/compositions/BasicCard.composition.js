import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@totalsoft_oss/rocket-ui.components.data-display.typography'
import Button from '@totalsoft_oss/rocket-ui.components.buttons.button'
import Card from '../Card'
import IconButton from '@totalsoft_oss/rocket-ui.components.buttons.icon-button'
import LocalActivityIcon from '@mui/icons-material/LocalActivity'

const LearnMoreButton = () => {
  return (
    <Button variant='outlined' color='info'>
      {'Learn more'}
    </Button>
  )
}

export const BasicCard = () => {
  return (
    <Grid container spacing={2}>
      <Grid item md={4}>
        <Card footer={<LearnMoreButton />}>
          <Grid container direction='column' justifyContent='center' alignItems='center'>
            {/* <Grid item>
              <img src={robot} id='img1' alt='robot' />
            </Grid> */}
            <Grid item>
              <Typography gutterBottom variant='h5'>
                BIT HARMONY
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body2' color='text.secondary'>
                We are building and publishing on Bit, which is a platform for component-driven development. Inside our scope, you can find
                codesandbox-style demos and source-code for all our rocket parts.
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid item md={4}>
        <Card footer={<LearnMoreButton />}>
          <Typography gutterBottom align='center' variant='h2'>
            MATERIAL-UI
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            This library represents our core, on top of which we design custom behaviors and styles.
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Besides that, it is one of our major benchmarks in terms of best development practices and conventions.
          </Typography>
        </Card>
      </Grid>
      <Grid item md={4}>
        <Card footer={<LearnMoreButton />}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Typography gutterBottom variant='h5'>
                GITHUB REPOSITORY
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Have a look over our source code, create issues and contribute, so we can all have a safer and smoother flight.
              </Typography>
            </Grid>
            {/* <Grid item xs={4}>
              <img src={spaceship} id='img1' alt='spaceship' />
            </Grid> */}
          </Grid>
        </Card>
      </Grid>
      <Grid item md={4}>
        <Card
          title='Card Title'
          actions={[
            <IconButton tooltip='Tooltip message' type='add' variant='text' size='small' />,
            <IconButton tooltip='Tooltip message' type='download' variant='text' size='small' />
          ]}
          footer={<LearnMoreButton />}
        >
          {'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
        </Card>
      </Grid>
      <Grid item md={4}>
        <Card
          icon={LocalActivityIcon}
          title='Card Title'
          actions={[
            <IconButton tooltip='Tooltip message' type='add' variant='text' size='small' />,
            <IconButton tooltip='Tooltip message' type='download' variant='text' size='small' />
          ]}
          footer={<LearnMoreButton />}
        >
          {'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
        </Card>
      </Grid>
    </Grid>
  )
}
