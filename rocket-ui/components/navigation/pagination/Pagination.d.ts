import { TablePaginationProps as MuiTablePaginationProps } from '@mui/material'
import React from 'react'

export interface PaginationProps extends Omit<MuiTablePaginationProps, 'onPageChange'> {
  /**
   * If the page is loading, this property is set to true
   */
  loading?: boolean
  /**
   * The number of rows per page. This property is required.
   */
  pageSize: number
  /**
   * Customize the rows per page label.
   *
   * @default 'Rows per page:'
   */
  rowsPerPageText?: React.ReactNode
  /**
   * Customize the displayed rows label.
   * @default 'of'
   */
  rowsOfText?: string
  /**
   * The function called on refresh.
   */
  onRefresh?: () => void
  /**
   * Callback fired when the page is changed.
   *
   * @param {React.MouseEvent<HTMLButtonElement> | null} event The event source of the callback.
   * @param {number} page The page selected.
   * @param {boolean} direction Direction for previous/next page (false for previous, true for next).
   */
  onPageChange: (event: React.MouseEvent<HTMLButtonElement> | null, page: number, direction: boolean) => void
}

/**
 *
 * Demos:
 *
 * - https://bit.cloud/totalsoft_oss/rocket-ui/components/navigation/pagination
 *
 * Take a look over the code for further information: https://github.com/osstotalsoft/rocket-ui/tree/main/rocket-ui/components/navigation/pagination
 *
 * Material-UI components used:
 *
 * - Autocomplete: https://mui.com/material-ui/api/table-pagination/
 *
 */

export default function Pagination(props: PaginationProps): JSX.Element
