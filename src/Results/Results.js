import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import CustomTablePagination from './../Common/CustomTablePagination';
import {StyledTableCell, StyledTableRow} from './../Common/CustomTableRowCell';
import Chip from '@material-ui/core/Chip';

const useStyles2 = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  table: {
    minWidth: 500,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  active :{
    color:'#008000',
    borderColor: '#008000'
  }
}));

 // table to show search results 
 function SearchResults(props) {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const {data} = props;

  // tracking the no of empty rows to be shown on the page
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  // update the page on the state to reflect the page change
  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  // Handle change rows when paginating
  function handleChangeRowsPerPage(event) {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }

  // When no results, dont render table
  if(!!data && data.length === 0) {
    return null;
  }

  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table className={classes.table} size="small">
          <TableHead>
          <TableRow>
            <StyledTableCell>Repository Name</StyledTableCell>
            <StyledTableCell align="right">Programming Language</StyledTableCell>
            <StyledTableCell align="right">Owner</StyledTableCell>
            <StyledTableCell align="center">Avatar</StyledTableCell>
            <StyledTableCell align="right">Stars</StyledTableCell>
          </TableRow>
        </TableHead>
          <TableBody>
            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(repoItem => (
              <StyledTableRow key={repoItem.repo_full_name}>
                <StyledTableCell component="th" scope="repoItem">
                  <Link href={repoItem.repo_url} target="_blank" rel="noopener">
                    {repoItem.repo_full_name}
                  </Link>
                </StyledTableCell>
                <StyledTableCell align="right">

                {
                  repoItem.programming_lang &&
                  <Chip label={repoItem.programming_lang} className={classes.active} variant="outlined" />
                }

                 </StyledTableCell>
                <StyledTableCell align="right">
                  <Link href={repoItem.owner_url} target="_blank" rel="noopener">
                    {repoItem.user_id} 
                  </Link>
                </StyledTableCell>
                <StyledTableCell align="center"><Avatar className="centerAlign" alt="avatar" src={repoItem.avatar_url}/></StyledTableCell>
                <StyledTableCell align="right">{repoItem.stars_count}</StyledTableCell>
              </StyledTableRow>
            ))}

            {emptyRows > 0 && (
              <StyledTableRow style={{ height: 68 * emptyRows }}>
                <StyledTableCell colSpan={6} />
              </StyledTableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                colSpan={5}
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { 'aria-label': 'rows per page' },
                  native: true,
                }}
                rowsPerPageOptions={[]}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={CustomTablePagination}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </Paper>
  );
}

export default SearchResults;