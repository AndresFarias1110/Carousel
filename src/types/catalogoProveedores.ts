export interface CatalogoProveedoresData {
  listaProvedores: ProveedoreDataConsulta[];
}
export interface ProveedoreDataConsulta {
  idVendor: string;
  key: string;
  shortName: string;
  busineesName: string;
  rfc: string;
  street: null;
  colonia: null;
  municipality: null;
  postalCode: null;
  latitude: null;
  longitude: null;
  status: string;
  userUpdate: string;
  vendorType: VendorType[];
  vendorContacts: any[];
  state: State;
}

export interface State {
  idFederalState: number;
  key: string;
  description: string;
  capital: string;
  status: string;
  userUpdate: string;
  lastUpdateDate: string;
}

export interface VendorType {
  idVendorType: number;
  status: string;
  userUpdate: string;
  lastUpdateDate: string;
  type: Type;
}

export interface Type {
  idVendorType: number;
  key: string;
  description: string;
  status: string;
  userUpdate: string;
  lastUpdateDate: string;
}
export interface TableDataProveedores {
  idVendor: string;
  key: string;
  shortName: string;
  busineesName: string;
  rfc: string;
  state: string;
  street: string;
}

export interface TableProveedoresProps {
  registrosProveedores: ProveedoreDataConsulta[];
  handleShowModalProveedores: () => void;
  handleShowModalProveedoresEliminar: () => void;
}
