import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Link from "next/link";
import classes from "../styles/Table.module.css";

export default function PersonTable({ rows }) {
  const defaultPage = 0;
  const [page, setPage] = React.useState(defaultPage);
  const [pageSize, setPageSize] = React.useState(5);

  if (rows?.length === 0) return null;

  const getVisibleRows = () =>
    rows.slice(page * pageSize, (page + 1) * pageSize);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangePageSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSize = parseInt(event.target.value, 10);
    setPageSize(newSize);
    setPage(defaultPage);
  };

  return (
    <Paper className={classes.paper}>
      <TableContainer>
        <Table className={classes.table} aria-label="people table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Sex</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {getVisibleRows().map(row => (
              <Link key={row.id} href={`/person/${row.id}`}>
                <TableRow style={{ cursor: "pointer" }}>
                  <TableCell>{row["id"]}</TableCell>
                  <TableCell align="right">{row["name"]}</TableCell>
                  <TableCell align="right">{row["age"]}</TableCell>
                  <TableCell align="right">{row["sex"]}</TableCell>
                </TableRow>
              </Link>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={pageSize}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangePageSize}
      />
    </Paper>
  );
}
