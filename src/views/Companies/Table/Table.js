import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import EditIcon from "@material-ui/icons/Edit";
import { useSelector, useDispatch } from "react-redux";
import { IconButton } from "@material-ui/core";
import { deleteProduct } from "redux/actions";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import Slide from "@material-ui/core/Slide";
import { green, red, yellow, orange } from "@material-ui/core/colors";
import FarmerInfo from "./FarmerInfo";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const columns = [
  { id: "productId", label: "Product", minWidth: 100 },
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
  {
    id: "isActive",
    label: "Status",
    minWidth: 100,
    align: "center",
    format: value => (value ? "pending" : "submitted"),
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

export default function StickyHeadTable(props) {
  const classes = useStyles();
  const loaded = useSelector(state => state.getProducts.loaded);
  const dispatch = useDispatch();
  const products = loaded ? props.data.map(elem => elem) : null;

  const rows = products;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const [index, setIndex] = useState("");

  const handleClick = isOpen => {
    setOpen(isOpen);
  };
  function handleClickDelete(id, index) {
    setOpen(!open);
    setId(id);
    setIndex(index);
  }
  const handleDelete = e => {
    e.preventDefault();
    setOpen(!open);
    dispatch(deleteProduct(id, index));
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleFarmerClick = isOpen => {
    setOpenFarmer(isOpen);
  };
  const [openFarmer, setOpenFarmer] = useState(false);
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
                  Actions
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
                      {!row["isActive"] ? (
                        <>
                          <IconButton style={{ color: yellow[600] }}>
                            <EditIcon />
                          </IconButton>
                          <IconButton
                            onClick={() => handleClickDelete(row["id"], i)}
                            style={{ color: red[600] }}
                          >
                            <DeleteOutlinedIcon />
                          </IconButton>
                        </>
                      ) : (
                        <IconButton
                          style={{ color: orange[600] }}
                          onClick={() => handleFarmerClick(true)}
                        >
                          <PersonOutlineIcon />
                        </IconButton>
                      )}
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
        <DialogTitle id="alert-dialog-slide-title">{"Delete Product"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure you want to delete this product from the Product List?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <IconButton onClick={handleDelete} style={{ color: green[500] }}>
            <CheckCircleOutlineIcon />
          </IconButton>
          <IconButton onClick={() => handleClick(!open)} style={{ color: red[500] }}>
            <HighlightOffIcon />
          </IconButton>
        </DialogActions>
      </Dialog>
      <FarmerInfo handleClick={handleFarmerClick} open={openFarmer} />
    </>
  );
}
