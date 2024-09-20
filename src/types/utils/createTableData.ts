import { TableDataProveedores } from "../catalogoProveedores";
import { TableDataUsuarios } from "../catalogoUsuarios";

export function createDataProveedores(
  idVendor: string,
  key: string,
  shortName: string,
  busineesName: string,
  rfc: string,
  state: string,
  street: string,
): TableDataProveedores {
  return {
    idVendor,
    key,
    shortName,
    busineesName,
    rfc,
    state,
    street,
  };
}

export function createDataUsuarios(
  idUser: string,
  name: string,
  lastName: string,
  motherLastName: string,
  status: string,
  user: string,
): TableDataUsuarios {
  return {
    idUser,
    name,
    lastName,
    motherLastName,
    status,
    user,
  };
}
