import React from 'react'
import Typography from '@totalsoft_oss/rocket-ui.components.data-display.typography'
import Card from '../Card'
import { Grid, Link } from '@mui/material'
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople'

export const CardMedia = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} container spacing={2}>
        <Grid item xs={6} md={4}>
          <Card
            title='Random Image'
            mediaProps={{ component: 'img', image: 'https://i.imgur.com/8woNLN2.jpeg', size: 's', alt: 'Squirrel' }}
          >
            <Typography>This image is rendered with default &#39;s&#39; size.</Typography>
          </Card>
        </Grid>
        <Grid item xs={6} md={4}>
          <Card
            title='Random Image'
            mediaProps={{ component: 'img', image: 'https://i.imgur.com/8woNLN2.jpeg', size: 'm', alt: 'Squirrel' }}
          >
            <Typography>This image is rendered with default &#39;m&#39; size.</Typography>
          </Card>
        </Grid>
        <Grid item xs={6} md={4}>
          <Card
            title='Random Image'
            subheader='Random Subtitle'
            mediaProps={{ component: 'img', image: 'https://i.imgur.com/8woNLN2.jpeg', size: 'l', alt: 'Squirrel' }}
          >
            <Typography>This image is rendered with default &#39;l&#39; size.</Typography>
          </Card>
        </Grid>
      </Grid>
      <Grid item xs={12} container spacing={2}>
        <Grid item xs={6} md={4}>
          <Card
            title='Random Video'
            mediaProps={{
              component: 'video',
              src: 'https://www.w3schools.com/html/mov_bbb.mp4',
              size: 'l',
              alt: 'Video Demo',
              controls: true
            }}
          >
            <Typography>This is rendering a random video.</Typography>
            <Typography>
              Video courtesy of{' '}
              <Link href='https://www.bigbuckbunny.org/' target='_blank'>
                Big Buck Bunny
              </Link>
              .
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6} md={4}>
          <Card
            title='Random Audio'
            mediaProps={{
              component: 'audio',
              src: 'https://www.w3schools.com/html/horse.ogg',
              size: 'l',
              alt: 'Audio Demo',
              controls: true
            }}
          >
            <Typography>This is a random audio file with default controls.</Typography>
          </Card>
        </Grid>
        <Grid item xs={6} md={4}>
          <Card
            icon={EmojiPeopleIcon}
            title='Random Image'
            mediaProps={{ component: 'img', src: 'https://i.imgur.com/8woNLN2.jpeg', height: '280px', alt: 'Image Demo' }}
          >
            <Typography>This is a random image.</Typography>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  )
}
