import React, { useCallback, useState } from 'react'
import { Grid } from '@mui/material'
import IconButton from '../IconButton'
import RadioButtonSelect from '../RadioButtonSelect'

const sizeOptions = [{ name: 'small' }, { name: 'medium' }, { name: 'large' }]

export const CustomIconButton = () => {
  const [size, setSize] = useState('medium')
  const [fontSize, setFontSize] = useState('small')

  const handleSelectSize = useCallback(event => {
    setSize(event.target.value)
  }, [])

  const handleSelectFontSize = useCallback(event => {
    setFontSize(event.target.value)
  }, [])

  const sizeProps = { size, fontSize }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} container spacing={3}>
        <Grid item>
          <RadioButtonSelect label='Size' value={size} options={sizeOptions} valueKey='name' onSelect={handleSelectSize} />
        </Grid>
      </Grid>
      <Grid item xs={12} container spacing={3}>
        <Grid item>
          <RadioButtonSelect label='Font size' value={fontSize} options={sizeOptions} valueKey='name' onSelect={handleSelectFontSize} />
        </Grid>
      </Grid>
      <Grid item xs={12} container spacing={3}>
        <Grid item>
          <IconButton tooltip={'AddButton'} type='add' {...sizeProps} />
        </Grid>
        <Grid item>
          <IconButton tooltip={'CancelButton'} type='cancel' {...sizeProps} />
        </Grid>
        <Grid item>
          <IconButton tooltip={'DeleteButton'} type='delete' {...sizeProps} />
        </Grid>
        <Grid item>
          <IconButton tooltip={'DownloadButton'} type='download' {...sizeProps} />
        </Grid>
        <Grid item>
          <IconButton tooltip={'DownwardButton'} type='downward' {...sizeProps} />
        </Grid>
        <Grid item>
          <IconButton tooltip={'EditButton'} type='edit' {...sizeProps} />
        </Grid>
        <Grid item>
          <IconButton tooltip={'ViewButton'} type='view' {...sizeProps} />
        </Grid>
        <Grid item>
          <IconButton tooltip={'SaveButton'} type='save' {...sizeProps} />
        </Grid>
        <Grid item>
          <IconButton tooltip={'UpwardButton'} type='upward' {...sizeProps} />
        </Grid>
      </Grid>
      <Grid item xs={12} container spacing={3}>
        <Grid item>
          <IconButton tooltip={'AddButton'} type='add' variant='text' {...sizeProps} />
        </Grid>
        <Grid item>
          <IconButton tooltip={'CancelButton'} type='cancel' variant='text' {...sizeProps} />
        </Grid>
        <Grid item>
          <IconButton tooltip={'DeleteButton'} type='delete' variant='text' {...sizeProps} />
        </Grid>
        <Grid item>
          <IconButton tooltip={'DownloadButton'} type='download' variant='text' {...sizeProps} />
        </Grid>
        <Grid item>
          <IconButton tooltip={'DownwardButton'} type='downward' variant='text' {...sizeProps} />
        </Grid>
        <Grid item>
          <IconButton tooltip={'EditButton'} type='edit' variant='text' {...sizeProps} />
        </Grid>
        <Grid item>
          <IconButton tooltip={'ViewButton'} type='view' variant='text' {...sizeProps} />
        </Grid>
        <Grid item>
          <IconButton tooltip={'SaveButton'} type='save' variant='text' {...sizeProps} />
        </Grid>
        <Grid item>
          <IconButton tooltip={'UpwardButton'} type='upward' variant='text' {...sizeProps} />
        </Grid>
      </Grid>
    </Grid>
  )
}
