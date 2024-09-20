import { MouseEvent } from "react";

import { Order } from "./commonTypes";

export interface TableDataDemo {
  id: number;
  placas: string;
  tipo_unidad: string;
  categoria: string;
  capacidad: string;
  arrendador: string;
  carrier: string;
  termino_vigencia: string;
  estatus_comercial: string;
  estatus_operativo: string;
}

export interface EnhancedTablePropsDemo {
  onRequestSort: (
    event: MouseEvent<unknown>,
    property: keyof TableDataDemo,
  ) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}
