import { createSlice } from "@reduxjs/toolkit";

import {
  CatalogoProveedoresData,
  ProveedoreDataConsulta,
} from "../../../types/catalogoProveedores";
export interface CatalogoProveedoresState {
  catalogoProveedores: CatalogoProveedoresData;
  catalogoProveedoresById: ProveedoreDataConsulta;
  isLoadingProveedor: boolean;
  isLoadingCatalogoProveedor: boolean;
  idConsultaProveedores: string;
}

const initialState: CatalogoProveedoresState = {
  isLoadingProveedor: true,
  catalogoProveedores: {
    listaProvedores: [],
  },
  idConsultaProveedores: "",
  catalogoProveedoresById: {
    idVendor: "",
    key: "",
    shortName: "",
    busineesName: "",
    rfc: "",
    street: null,
    colonia: null,
    municipality: null,
    postalCode: null,
    latitude: null,
    longitude: null,
    status: "",
    userUpdate: "",
    vendorType: [],
    vendorContacts: [],
    state: {
      idFederalState: 0,
      key: "",
      description: "",
      capital: "",
      status: "",
      userUpdate: "",
      lastUpdateDate: "",
    },
  },
  isLoadingCatalogoProveedor: true,
};

export const ProveedoresSlice = createSlice({
  name: "proovedoresState",
  initialState,
  reducers: {
    //loaging
    startLoadingCatalogoProveedor: (state) => {
      state.isLoadingCatalogoProveedor = true;
    },
    setCatalogoProveedor: (state, action) => {
      state.catalogoProveedores.listaProvedores = action.payload;
      state.isLoadingCatalogoProveedor = false;
    },
    startLoadingCatalogoId: (state) => {
      state.isLoadingProveedor = true;
    },
    setIdConsultaProveedores: (state, action) => {
      state.idConsultaProveedores = action.payload;
      state.isLoadingProveedor = false;
    },
    setCatalogoProveedorById: (state, action) => {
      state.catalogoProveedoresById = action.payload;
      state.isLoadingProveedor = false;
    },
  },
});

export const {
  setCatalogoProveedor,
  startLoadingCatalogoProveedor,
  startLoadingCatalogoId,
  setIdConsultaProveedores,
  setCatalogoProveedorById,
} = ProveedoresSlice.actions;
