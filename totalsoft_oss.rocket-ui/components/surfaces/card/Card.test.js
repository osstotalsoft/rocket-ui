import React from 'react'
import { screen } from '@testing-library/react'
import Button from '@totalsoft_oss/rocket-ui.components.buttons.button'
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining'
import { defaultTheme } from '@totalsoft_oss/rocket-ui.themes'
import Card from './Card'
import fns from '@totalsoft_oss/rocket-ui.utils.test-wrapper'

const { render } = fns
const theme = defaultTheme
const text =
  'Cards are surfaces that display content and actions on a single topic. They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy. Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information.'

describe('Card', () => {
  it('renders footer', () => {
    render(<Card footer={<Button />}>{text}</Card>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('renders card header', () => {
    const title = 'Card title'
    const subheader = 'Card subtitle'

    render(<Card title={title} subheader={subheader} actions={<Button />} />)

    expect(screen.getByText(title)).toBeInTheDocument()
    expect(screen.getByText(subheader)).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it("doesn't render card header if none of its props is received", () => {
    render(<Card data-testid='card'>{text}</Card>)
    const card = screen.getByTestId('card')
    expect(card.childNodes.length).toBe(1)
  })

  it('adds padding by default', () => {
    render(<Card>{text}</Card>)
    expect(screen.getByText(text)).toHaveStyle(`padding: ${theme.spacing(1, 3, 3, 3)}`)
  })

  it('removes padding when disablePadding is `true`', () => {
    render(<Card disablePadding={true}>{text}</Card>)
    expect(screen.getByText(text)).not.toHaveStyle(`padding: ${theme.spacing(3, 3, 3, 3)}`)
  })

  it('when `icon` is received, applies a background of `iconColor`', () => {
    const iconColor = 'info'
    render(<Card icon={DeliveryDiningIcon} iconColor={iconColor} />)
    expect(screen.getByTestId('DeliveryDiningIcon').parentElement).toHaveStyle(
      `background: linear-gradient(195deg, ${theme.palette[iconColor].light}, ${theme.palette[iconColor].main})`
    )
  })

  it.each([
    {
      color: 'success',
      background: theme.palette.gradients.success
    },
    {
      color: 'info',
      background: theme.palette.gradients.info
    },
    {
      color: 'rose',
      background: theme.palette.gradients.rose
    },
    {
      color: 'danger',
      background: theme.palette.gradients.danger
    },
    {
      color: 'warning',
      background: theme.palette.gradients.warning
    }
  ])('applies the correct gradient background for $color color', ({ color, background }) => {
    render(<Card color={color}>{text}</Card>)
    expect(screen.getByText(text)).toHaveStyle(`background: ${background}`)
  })

  it('renders a photo', () => {
    // arrange
    render(
      <Card
        mediaProps={{ component: 'img', image: 'https://i.imgur.com/8woNLN2.jpeg', size: 's', alt: 'Squirrel', 'data-testid': 'image' }}
      />
    )

    // act
    const element = screen.getByTestId('image')

    // assert
    expect(element).toBeInTheDocument()
  })

  it('renders a video', () => {
    // arrange
    render(
      <Card
        mediaProps={{
          component: 'video',
          src: 'https://www.w3schools.com/html/mov_bbb.mp4',
          size: 'l',
          alt: 'Video Demo',
          controls: true,
          'data-testid': 'video'
        }}
      />
    )

    // act
    const element = screen.getByTestId('video')

    // assert
    expect(element).toBeInTheDocument()
  })

  it('renders audio', () => {
    // arrange
    render(
      <Card
        mediaProps={{
          component: 'audio',
          src: 'https://www.w3schools.com/html/horse.ogg',
          size: 'l',
          alt: 'Audio Demo',
          controls: true,
          'data-testid': 'audio'
        }}
      />
    )

    // act
    const element = screen.getByTestId('audio')

    // assert
    expect(element).toBeInTheDocument()
  })
})
