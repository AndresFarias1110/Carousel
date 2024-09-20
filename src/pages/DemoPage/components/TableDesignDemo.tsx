import { KeyboardArrowDown } from "@mui/icons-material";
import {
  TableSortLabel,
  Box,
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { useState, MouseEvent } from "react";

import { EnhancedTablePropsDemo, Order, TableDataDemo } from "../../../types";
import { createDataDemo } from "../../../utils";

import "./TableDesignDemo.css";

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort<T>(
  array: readonly T[],
  order: undefined | string,
  comparator: (a: T, b: T) => number,
) {
  if (order === undefined) {
    return array;
  }
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells: readonly any[] = [
  {
    id: "placas",
    disablePadding: true,
    label: "Placas",
  },
  {
    id: "tipo_unidad",
    disablePadding: false,
    label: "Tipo Unidad",
  },
  {
    id: "categoria",
    disablePadding: false,
    label: "Categoría",
  },
  {
    id: "capacidad",
    disablePadding: false,
    label: "Capacidad",
  },
  {
    id: "arrendador",
    disablePadding: false,
    label: "Arrendador",
  },
  {
    id: "carrier",
    disablePadding: false,
    label: "Carrier",
  },
  {
    id: "termino_vigencia",
    disablePadding: false,
    label: "Término Vigencia",
  },
  {
    id: "estatus_comercial",
    disablePadding: false,
    label: "Estatus Comercial",
  },
  {
    id: "estatus_operativo",
    disablePadding: false,
    label: "Estatus Operativo",
  },
];

function EnhancedTableHead(props: EnhancedTablePropsDemo) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler =
    (property: keyof TableDataDemo) => (event: MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell className="header__table">
          <span className="header__text">Seleccionar</span>
        </TableCell>
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
              onClick={createSortHandler(headCell.id)}
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

const TableDesignDemo = () => {
  const [order, setOrder] = useState<Order>(undefined);
  const [orderBy, setOrderBy] = useState<keyof TableDataDemo>("id");

  const rows = [
    {
      id: "1",
      placas: "ABC123",
      tipoUnidad: "Remolque",
      categoria: "Seco",
      capacidad: "40",
      arrendador: "ACCEL COMERCIAL SA DE CV",
      carrier: "Prueba carrier",
      terminoVigencia: "01/01/2023",
      estatusComercial: "Activo",
      estatusOperativo: "Por ubicar",
    },
    {
      id: "2",
      placas: "ABC124",
      tipoUnidad: "Remolque",
      categoria: "Seco",
      capacidad: "40",
      arrendador: "ACCEL COMERCIAL SA DE CV",
      carrier: "Prueba carrier",
      terminoVigencia: "01/01/2023",
      estatusComercial: "Activo",
      estatusOperativo: "Por ubicar",
    },
    {
      id: "3",
      placas: "ABC125",
      tipoUnidad: "Remolque",
      categoria: "Seco",
      capacidad: "40",
      arrendador: "ACCEL COMERCIAL SA DE CV",
      carrier: "Prueba carrier",
      terminoVigencia: "01/01/2023",
      estatusComercial: "Activo",
      estatusOperativo: "Por ubicar",
    },
    {
      id: "4",
      placas: "ABC126",
      tipoUnidad: "Remolque",
      categoria: "Seco",
      capacidad: "40",
      arrendador: "ACCEL COMERCIAL SA DE CV",
      carrier: "Prueba carrier",
      terminoVigencia: "01/01/2023",
      estatusComercial: "Activo",
      estatusOperativo: "Por ubicar",
    },
    {
      id: "5",
      placas: "ABC127",
      tipoUnidad: "Remolque",
      categoria: "Seco",
      capacidad: "40",
      arrendador: "ACCEL COMERCIAL SA DE CV",
      carrier: "Prueba carrier",
      terminoVigencia: "01/01/2023",
      estatusComercial: "Activo",
      estatusOperativo: "Por ubicar",
    },
    {
      id: "6",
      placas: "ABC128",
      tipoUnidad: "Remolque",
      categoria: "Seco",
      capacidad: "40",
      arrendador: "ACCEL COMERCIAL SA DE CV",
      carrier: "Prueba carrier",
      terminoVigencia: "01/01/2023",
      estatusComercial: "Activo",
      estatusOperativo: "Por ubicar",
    },
    {
      id: "7",
      placas: "ABC129",
      tipoUnidad: "Remolque",
      categoria: "Seco",
      capacidad: "40",
      arrendador: "ACCEL COMERCIAL SA DE CV",
      carrier: "Prueba carrier",
      terminoVigencia: "01/01/2023",
      estatusComercial: "Activo",
      estatusOperativo: "Por ubicar",
    },
    {
      id: "8",
      placas: "ABC130",
      tipoUnidad: "Remolque",
      categoria: "Seco",
      capacidad: "40",
      arrendador: "ACCEL COMERCIAL SA DE CV",
      carrier: "Prueba carrier",
      terminoVigencia: "01/01/2023",
      estatusComercial: "Activo",
      estatusOperativo: "Por ubicar",
    },
    {
      id: "9",
      placas: "ABC131",
      tipoUnidad: "Remolque",
      categoria: "Seco",
      capacidad: "40",
      arrendador: "ACCEL COMERCIAL SA DE CV",
      carrier: "Prueba carrier",
      terminoVigencia: "01/01/2023",
      estatusComercial: "Activo",
      estatusOperativo: "Por ubicar",
    },
    {
      id: "10",
      placas: "ABC132",
      tipoUnidad: "Remolque",
      categoria: "Seco",
      capacidad: "40",
      arrendador: "ACCEL COMERCIAL SA DE CV",
      carrier: "Prueba carrier",
      terminoVigencia: "01/01/2023",
      estatusComercial: "Activo",
      estatusOperativo: "Por ubicar",
    },
  ].map((unidad: any) =>
    createDataDemo(
      unidad.id,
      unidad.placas,
      unidad.tipoUnidad,
      unidad.categoria,
      unidad.capacidad,
      unidad.arrendador,
      unidad.carrier,
      unidad.terminoVigencia,
      unidad.estatusComercial,
      unidad.estatusOperativo,
    ),
  );

  const handleRequestSort = (
    event: MouseEvent<unknown>,
    property: keyof TableDataDemo,
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table
            stickyHeader
            sx={{ minWidth: 950 }}
            aria-labelledby="tableTitle"
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {rows.length ? (
                stableSort(rows, order, getComparator(order, orderBy)).map(
                  (row, index) => {
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        role="checkbox"
                        key={row.placas}
                        className="table__row cursor-pointer"
                      >
                        <TableCell align="center" padding="checkbox">
                          <Checkbox
                            color="primary"
                            inputProps={{
                              "aria-labelledby": labelId,
                            }}
                          />
                        </TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          align="left"
                          className="body__text"
                        >
                          {row.placas}
                        </TableCell>
                        <TableCell align="left" className="body__text">
                          {row.tipo_unidad}
                        </TableCell>
                        <TableCell align="left" className="body__text">
                          {row.categoria}
                        </TableCell>
                        <TableCell align="left" className="body__text">
                          {row.capacidad}
                        </TableCell>
                        <TableCell align="left" className="body__text">
                          {row.arrendador}
                        </TableCell>
                        <TableCell align="left" className="body__text">
                          {row.carrier}
                        </TableCell>
                        <TableCell align="left" className="body__text">
                          {row.termino_vigencia}
                        </TableCell>
                        <TableCell align="left" className="body__text">
                          {row.estatus_comercial}
                        </TableCell>
                        <TableCell align="left" className="body__text">
                          {row.estatus_operativo}
                        </TableCell>
                      </TableRow>
                    );
                  },
                )
              ) : (
                <TableRow>
                  <TableCell align="center" colSpan={10}>
                    No se encuentra ninguna unidad registrada
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default TableDesignDemo;
