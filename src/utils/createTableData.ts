import { TableDataDemo } from "../types";

export function createDataDemo(
  id: number,
  placas: string,
  tipo_unidad: string,
  categoria: string,
  capacidad: string,
  arrendador: string,
  carrier: string,
  termino_vigencia: string,
  estatus_comercial: string,
  estatus_operativo: string,
): TableDataDemo {
  return {
    id,
    placas,
    tipo_unidad,
    categoria,
    capacidad,
    arrendador,
    carrier,
    termino_vigencia,
    estatus_comercial,
    estatus_operativo,
  };
}
