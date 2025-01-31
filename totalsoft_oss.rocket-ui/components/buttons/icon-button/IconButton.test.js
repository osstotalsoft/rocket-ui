import React from 'react'
import IconButton from './IconButton'
import { screen, waitFor, fireEvent } from '@testing-library/react'

import fns from '@totalsoft_oss/rocket-ui.utils.test-wrapper'

const { render, userClick } = fns

const customButtonTypes = [
  {
    type: 'add',
    testId: 'AddIcon'
  },
  { type: 'cancel', testId: 'CancelIcon' },
  {
    type: 'delete',
    testId: 'DeleteIcon'
  },
  {
    type: 'download',
    testId: 'CloudDownloadIcon'
  },
  {
    type: 'downward',
    testId: 'ArrowDownwardIcon'
  },
  {
    type: 'edit',
    testId: 'EditIcon'
  },
  {
    type: 'view',
    testId: 'VisibilityIcon'
  },
  {
    type: 'save',
    testId: 'SaveIcon'
  },
  {
    type: 'upward',
    testId: 'ArrowUpwardIcon'
  }
]

describe('Custom icon buttons', () => {
  it.each(customButtonTypes)("displays the correct icon for type = { '$type' }", ({ type, testId }) => {
    render(<IconButton type={type} />)
    expect(screen.getByTestId(testId)).toBeInTheDocument()
  })
})

describe('Disabled icon button', () => {
  it("doesn't call onClick", async () => {
    const mockOnClick = jest.fn()
    render(<IconButton onClick={mockOnClick} disabled />)
    userClick(screen.getByRole('button'))

    await waitFor(() => {
      expect(mockOnClick).not.toBeCalledWith()
    })
  })

  it('displays tooltip when disabled', async () => {
    render(<IconButton tooltip='tooltip' disabled />)
    fireEvent.mouseOver(screen.getByRole('button'))
    await waitFor(() => {
      expect(screen.getByText('tooltip')).toBeInTheDocument()
    })
  })
})

describe('Loading button', () => {
  it('renders a progress bar when loading = { true }', () => {
    render(<IconButton loading />)
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })
})
