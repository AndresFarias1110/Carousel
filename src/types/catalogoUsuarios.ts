export interface CatalogoUsuariosData {
  listaUsuarios: UsuariosDataConsulta[];
}

export interface UsuariosDataConsulta {
  idUser: string;
  user: string;
  name: string;
  motherLastName: null;
  lastName: string;
  email: string;
  directBoss: string;
  picture: null;
  status: string;
  userUpdate: UserUpdate;
  permissions: Permission[];
}

export interface Permission {
  idRel: number;
  status: string;
  userUpdate: UserUpdate;
  lastUpdateDate: string;
  profile: Profile;
}

export interface Profile {
  idProfile: number;
  product: Product;
  key: ProfileKey;
  description: ProfileDescription;
  lastUpdateDate: string;
  visibility: any[];
}

export enum ProfileDescription {
  Administrador = "Administrador",
  CedisTrasnsportes = "Cedis Trasnsportes",
  CoETransportes = "CoE Transportes",
  Consulta = "Consulta",
  Cops = "COPS",
  Gnfr = "GNFR",
  SoporteFuncional = "Soporte Funcional",
}

export enum ProfileKey {
  MFAdmin = "MF_ADMIN",
  MFCdtrans = "MF_CDTRANS",
  MFCoetrans = "MF_COETRANS",
  MFCops = "MF_COPS",
  MFGnfr = "MF_GNFR",
  MFSf = "MF_SF",
  VimAdmin = "VIM_ADMIN",
  VimRead = "VIM_READ",
}

export interface Product {
  idProducto: number;
  key: ProductKey;
  shortName: Name;
  fullName: Name;
  status: string;
  updatedUser: UserUpdate;
  lastUpdateDate: string;
  program: Program;
  transportApprovals: any[];
  solutionType: SolutionType;
}

export enum Name {
  MyFleet = "My Fleet",
  Vimops = "Vimops",
}

export enum ProductKey {
  MF = "MF",
  Vim = "VIM",
}

export interface Program {
  idProgram: number;
  key: ProgramKey;
  description: ProgramDescription;
  objective: string;
  status: string;
  updateUser: UpdateUser;
  lastUpdateDate: string;
}

export enum ProgramDescription {
  E2EProductivity = "E2E Productivity",
  OmniSupplyChain = "Omni Supply Chain",
}

export enum ProgramKey {
  E2Ep = "E2EP",
  Osch = "OSCH",
}

export enum UpdateUser {
  Mj0Cisn = "mj0cisn",
}

export interface SolutionType {
  idSolutionType: number;
  key: SolutionTypeKey;
  description: SolutionTypeDescription;
  status: string;
  updatedUser: UpdateUser;
  lastUpdateDate: string;
}

export enum SolutionTypeDescription {
  Local = "Local",
}

export enum SolutionTypeKey {
  Lo = "LO",
}

export enum UserUpdate {
  DBA = "DBA",
}

export interface TableUsuariosProps {
  registrosUsuarios: UsuariosDataConsulta[];
  handleShowModalUsuario: () => void;
  handleShowModalUsuarioEliminar: () => void;
}
export interface TableDataUsuarios {
  idUser: string;
  name: string;
  lastName: string;
  motherLastName: string;
  status: string;
  user: string;
}
