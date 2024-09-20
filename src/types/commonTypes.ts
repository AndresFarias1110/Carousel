export type Order = "asc" | "desc" | undefined;

export interface HeadCellProveedores {
  disablePadding: boolean;
  id: keyof TableDataProveedores;
  label: string;
}

export interface TableDataProveedores {
  id: string;
  clave: string;
  nombreCorto: string;
  razonSocial: string;
  rfc: string;
  estado: string;
  calle: string;
  accion: string;
}
export interface TableDataUsuarios {
  idUser: string;
  name: string;
  lastName: string;
  motherLastName: string;
  status: string;
  user: string;
  accion: string;
}

export interface HeadCellUsuarios {
  disablePadding: boolean;
  id: keyof TableDataUsuarios;
  label: string;
}
