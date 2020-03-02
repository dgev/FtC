import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";

const columns = [
  {
    id: "productName",
    label: "Product",
    minWidth: 100,
    align: "center",
    format: value => value.toLocaleString(),
  },
  {
    id: "amount",
    label: "Amount(kg)",
    minWidth: 100,
    align: "center",
    format: value => value.toLocaleString(),
  },
  {
    id: "quantity",
    label: "Price(AMD)",
    minWidth: 100,
    align: "center",
    format: value => value.toLocaleString(),
  },
  {
    id: "description",
    label: "Description",
    minWidth: 100,
    align: "center",
    format: value => value.toFixed(2),
  },
];
const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 400,
  },
});

export default function FarmerTable(props) {
  const classes = useStyles();
  const loaded = useSelector(state => state.getProducts.loaded);
  const user = useSelector(state => state.userData);
  const dispatch = useDispatch();
  const rows = loaded ? props.data.map(elem => elem) : null;

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(0);
  const [index, setIndex] = useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                    {columns.map(column => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id + i} align={column.align}>
                          {(column.format && typeof value === "number") ||
                          typeof value === "boolean"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15, 20]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
