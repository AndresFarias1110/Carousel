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
import { setIdUsuario } from "../../../../store/slices/usuarios";
import {
  TableDataUsuarios,
  TableUsuariosProps,
  UsuariosDataConsulta,
} from "../../../../types/catalogoUsuarios";
import { HeadCellUsuarios, Order } from "../../../../types/commonTypes";
import { handleEllipsis } from "../../../../types/utils/common";
import { createDataUsuarios } from "../../../../types/utils/createTableData";

import "../../Configuracion.css";

const headCells: readonly HeadCellUsuarios[] = [
  {
    id: "idUser",
    disablePadding: true,
    label: "ID",
  },
  {
    id: "name",
    disablePadding: false,
    label: "Nombre",
  },
  {
    id: "lastName",
    disablePadding: false,
    label: "Apellido",
  },
  {
    id: "motherLastName",
    disablePadding: false,
    label: "Apellido materno",
  },
  {
    id: "status",
    disablePadding: false,
    label: "Estatus",
  },
  {
    id: "user",
    disablePadding: false,
    label: "Usuario",
  },
  {
    id: "accion",
    disablePadding: false,
    label: "Acción",
  },
];
interface EnhancedTableProps {
  onRequestSort: (
    event: MouseEvent<unknown>,
    property: keyof TableDataUsuarios,
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
export const TableDesignUsuarios = ({
  registrosUsuarios,
  handleShowModalUsuario,
  handleShowModalUsuarioEliminar,
}: TableUsuariosProps) => {
  const dispatch = useAppDispatch();
  const [order, setOrder] = useState<Order>(undefined);
  const [orderBy, setOrderBy] = useState<keyof TableDataUsuarios>("idUser");
  const handleRequestSort = (
    event: MouseEvent<unknown>,
    property: keyof TableDataUsuarios,
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  const rows = registrosUsuarios.map((proveedores: UsuariosDataConsulta) =>
    createDataUsuarios(
      proveedores.idUser,
      proveedores.name,
      proveedores.lastName,
      proveedores.motherLastName || "No asignado",
      proveedores.status,
      proveedores.user || "No asignado",
    ),
  );

  const [rowsPaper] = useState(10);
  const [page, setPage] = useState(0);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleIdUsuario = (user: string) => {
    dispatch(setIdUsuario(user));
    handleShowModalUsuario();
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
              numSelected={registrosUsuarios.length}
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
                      <TableRow key={row.idUser}>
                        <TableCell align="left" className="body__text">
                          {row.idUser}
                        </TableCell>
                        <TableCell align="left" className="body__text">
                          {handleEllipsis(row.name)}
                        </TableCell>
                        <TableCell align="left" className="body__text">
                          {handleEllipsis(row.lastName)}
                        </TableCell>
                        <TableCell align="left" className="body__text">
                          {handleEllipsis(row.motherLastName)}
                        </TableCell>
                        <TableCell align="left" className="body__text">
                          {handleEllipsis(row.status)}
                        </TableCell>
                        <TableCell align="left" className="body__text">
                          {handleEllipsis(row.user)}
                        </TableCell>
                        <TableCell align="left" className="body__text">
                          <div className="row">
                            <div className="col ">
                              <img
                                src={Delete}
                                className="cursor-pointer"
                                onClick={() => handleShowModalUsuarioEliminar()}
                              />
                            </div>
                            <div className="col ">
                              <img
                                src={Edit}
                                className="cursor-pointer"
                                onClick={() => handleIdUsuario(row.user)}
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
