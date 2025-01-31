import React from 'react'
import { screen } from '@testing-library/react'
import Pagination from './Pagination'
import fns from '@totalsoft_oss/rocket-ui.utils.test-wrapper'

const { render, userClick } = fns

const paginationProps = {
  count: 100,
  pageSize: 10,
  page: 0,
  onPageChange: jest.fn(),
  onRowsPerPageChange: jest.fn()
}

describe('Pagination', () => {
  it('renders default rowsPerPageText', () => {
    render(<Pagination {...paginationProps} />)
    expect(screen.getByText('Rows per page:')).toBeInTheDocument()
  })

  it('onRefresh is called', () => {
    const mockRefresh = jest.fn()
    render(<Pagination {...paginationProps} onRefresh={mockRefresh} />)
    const refreshButton = screen.getByTestId('RefreshIcon').parentElement
    userClick(refreshButton)
    expect(mockRefresh).toBeCalledTimes(1)
  })

  it('renders refresh button', () => {
    const mockRefresh = jest.fn()
    render(<Pagination {...paginationProps} onRefresh={mockRefresh} />)
    expect(screen.getByTestId('RefreshIcon')).toBeInTheDocument()
  })
})
