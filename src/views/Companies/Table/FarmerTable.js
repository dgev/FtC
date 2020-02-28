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
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import NaturePeopleIcon from "@material-ui/icons/NaturePeople";
import { green, red } from "@material-ui/core/colors";
import { sendNotif } from "redux/actions/notification.action";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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
  const dispatch = useDispatch();
  const rows = loaded ? props.data.map(elem => elem) : null;

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const [index, setIndex] = useState("");

  const handleClick = isOpen => {
    setOpen(isOpen);
  };
  function handleClickApply(id, userId) {
    setOpen(!open);
    setId(id);
    setIndex(userId);
  }
  const handleApply = e => {
    const notif = {
      senderId: localStorage.getItem("id"),
      receiverId: index,
      userProductId: id,
      message: "Want to buy this item",
    };
    e.preventDefault();
    setOpen(!open);
    dispatch(sendNotif(notif));
  };

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
                <TableCell key="actions" align="center">
                  Apply
                </TableCell>
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
                    <TableCell key={i + "icon"} align={"center"}>
                      <>
                        <IconButton
                          onClick={() => handleClickApply(row["id"], row["userId"])}
                          style={{ color: green[600] }}
                        >
                          <NaturePeopleIcon />
                        </IconButton>
                      </>
                    </TableCell>
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
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => handleClick(!open)}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Contribute"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure you want to apply to this request?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <IconButton onClick={handleApply} style={{ color: green[500] }}>
            <CheckCircleOutlineIcon />
          </IconButton>
          <IconButton onClick={() => handleClick(!open)} style={{ color: red[500] }}>
            <HighlightOffIcon />
          </IconButton>
        </DialogActions>
      </Dialog>
    </>
  );
}
