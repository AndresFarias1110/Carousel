/* eslint-disable jsx-a11y/alt-text */
import { KeyboardArrowDown } from "@mui/icons-material";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { MouseEvent, useState } from "react";

import Delete from "../../../../assets/img/table/delete.svg";
import Edit from "../../../../assets/img/table/edit.svg";
import { useAppDispatch } from "../../../../hooks/hooks";
import { setIdConsultaProveedores } from "../../../../store/slices/proveedores";
import {
  ProveedoreDataConsulta,
  TableDataProveedores,
  TableProveedoresProps,
} from "../../../../types/catalogoProveedores";
import { HeadCellProveedores, Order } from "../../../../types/commonTypes";
import { handleEllipsis } from "../../../../types/utils/common";
import { createDataProveedores } from "../../../../types/utils/createTableData";

const headCells: readonly HeadCellProveedores[] = [
  {
    id: "id",
    disablePadding: true,
    label: "ID",
  },
  {
    id: "clave",
    disablePadding: false,
    label: "Clave",
  },
  {
    id: "nombreCorto",
    disablePadding: false,
    label: "Nombre corto",
  },
  {
    id: "razonSocial",
    disablePadding: false,
    label: "Razón Social",
  },
  {
    id: "rfc",
    disablePadding: false,
    label: "RFC",
  },
  {
    id: "estado",
    disablePadding: false,
    label: "Estado",
  },
  {
    id: "calle",
    disablePadding: false,
    label: "Calle",
  },
  {
    id: "accion",
    disablePadding: false,
    label: "Accion",
  },
];
interface EnhancedTableProps {
  onRequestSort: (
    event: MouseEvent<unknown>,
    property: keyof TableDataProveedores,
  ) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
  numSelected: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy } = props;
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="left"
            padding="none"
            sortDirection={orderBy === headCell.id ? order : false}
            className="header__table"
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              IconComponent={KeyboardArrowDown}
            >
              <span className="header__text">{headCell.label}</span>
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
export const TableDesignProveedores = ({
  registrosProveedores,
  handleShowModalProveedores,
  handleShowModalProveedoresEliminar,
}: TableProveedoresProps) => {
  const dispatch = useAppDispatch();
  const [order, setOrder] = useState<Order>(undefined);
  const [orderBy, setOrderBy] =
    useState<keyof TableDataProveedores>("idVendor");
  const handleRequestSort = (
    event: MouseEvent<unknown>,
    property: keyof TableDataProveedores,
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  const rows = registrosProveedores.map((proveedores: ProveedoreDataConsulta) =>
    createDataProveedores(
      proveedores.idVendor,
      proveedores.key,
      proveedores.shortName,
      proveedores.busineesName,
      proveedores.rfc,
      proveedores.state.capital || "No asignado",
      proveedores.street || "No asignado",
    ),
  );
  const handleIdProveedores = (id: string) => {
    dispatch(setIdConsultaProveedores(id));
    handleShowModalProveedores();
  };
  const [rowsPaper] = useState(10);
  const [page, setPage] = useState(0);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer className="">
          <Table
            stickyHeader
            sx={{ minWidth: 1100, maxWidth: "100%" }}
            aria-labelledby="tableTitle"
          >
            <EnhancedTableHead
              numSelected={registrosProveedores.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {rows.length ? (
                rows
                  .slice(page * rowsPaper, page * rowsPaper + rowsPaper)
                  .map((row) => {
                    return (
                      <TableRow key={row.idVendor}>
                        <TableCell align="left" className="body__text">
                          {row.idVendor}
                        </TableCell>
                        <TableCell align="left" className="body__text">
                          {handleEllipsis(row.key)}
                        </TableCell>
                        <TableCell align="left" className="body__text">
                          {handleEllipsis(row.shortName)}
                        </TableCell>
                        <TableCell align="left" className="body__text">
                          {handleEllipsis(row.busineesName)}
                        </TableCell>
                        <TableCell align="left" className="body__text">
                          {handleEllipsis(row.rfc)}
                        </TableCell>
                        <TableCell align="left" className="body__text">
                          {handleEllipsis(row.state)}
                        </TableCell>
                        <TableCell align="left" className="body__text">
                          {handleEllipsis(row.street)}
                        </TableCell>
                        <TableCell align="left" className="body__text">
                          <div className="row">
                            <div className="col ">
                              <img
                                src={Delete}
                                className="cursor-pointer"
                                onClick={() =>
                                  handleShowModalProveedoresEliminar()
                                }
                              />
                            </div>
                            <div className="col ">
                              <img
                                src={Edit}
                                className="cursor-pointer"
                                onClick={() => handleIdProveedores(row.key)}
                              />
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })
              ) : (
                <TableRow>
                  <TableCell align="center" colSpan={10}>
                    No se encuentra ningun proveedor registrado
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          count={rows.length}
          rowsPerPage={rowsPaper}
          page={page}
          onPageChange={handleChangePage}
        />
      </Paper>
    </Box>
  );
};
