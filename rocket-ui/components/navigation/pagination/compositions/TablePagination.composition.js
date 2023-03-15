import React, { useCallback, useState } from 'react'
import Grid from '@mui/material/Grid'
import Pagination from '../Pagination'
import CollapseCard from '@totalsoft_oss/rocket-ui.components.surfaces.collapse-card'

export const TablePagination = () => {
  const [page, setPage] = useState(0)
  const [pageSize, setPageSize] = useState(25)

  const handleChangePage = useCallback(value => {
    setPage(value)
  }, [])

  const handleChangeRowsPerPage = useCallback(value => {
    setPageSize(value)
    setPage(0)
  }, [])

  return (
    <CollapseCard
      defaultExpanded
      title='Basic'
      content={
        <Grid container>
          <Grid item xs={12}>
            <Pagination
              component='div'
              count={100}
              page={page}
              onPageChange={handleChangePage}
              pageSize={pageSize}
              onRowsPerPageChange={handleChangeRowsPerPage}
              rowsPerPageOptions={[25, 50, 75, 100]}
            />
          </Grid>
        </Grid>
      }
    />
  )
}
