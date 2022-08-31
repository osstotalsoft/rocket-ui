import React from 'react'
import { screen } from '@testing-library/react'
import LoadingFakeText from './LoadingFakeText'
import fns from '@totalsoft_oss/rocket-ui.utils.test-wrapper'

const { render } = fns

describe('Loading fake text', () => {
  test('applies the correct variant (text)', () => {
    render(<LoadingFakeText variant={'text'} data-testid='skeleton' />)
    expect(screen.getByTestId('skeleton')).toHaveClass(`MuiSkeleton-text`)
  })

  test('applies the correct variant (circular)', () => {
    render(<LoadingFakeText variant={'circular'} data-testid='skeleton' />)
    expect(screen.getByTestId('skeleton')).toHaveClass(`MuiSkeleton-circular`)
  })

  test('applies the correct animation (wave)', () => {
    render(<LoadingFakeText animation={'wave'} data-testid='skeleton' />)
    expect(screen.getByTestId('skeleton')).toHaveClass(`MuiSkeleton-wave`)
  })

  test('applies the correct animation (pulse)', () => {
    render(<LoadingFakeText animation={'pulse'} data-testid='skeleton' />)
    expect(screen.getByTestId('skeleton')).toHaveClass(`MuiSkeleton-pulse`)
  })

  test('renders the correct number of lines', () => {
    render(<LoadingFakeText data-testid='skeleton' lines={10} />)
    expect(screen.getAllByTestId('skeleton')).toHaveLength(10)
  })

  test('by default it renders only one line', () => {
    render(<LoadingFakeText data-testid='skeleton' />)
    expect(screen.getAllByTestId('skeleton')).toHaveLength(1)
  })

  test('it renders on paper if onPaper is set to true', () => {
    render(<LoadingFakeText data-testid='skeleton' onPaper={true} />)
    expect(screen.getByTestId('skeleton').parentNode).toHaveClass('MuiPaper-root')
  })

  test('other variants than text, are ignoring lines parameter and render only once', () => {
    render(<LoadingFakeText data-testid='skeleton' variant='rectangular' lines={2} />)
    expect(screen.getAllByTestId('skeleton')).toHaveLength(1)
  })
})
