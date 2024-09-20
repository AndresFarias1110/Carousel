import { createSlice } from "@reduxjs/toolkit";

import {
  CatalogoUsuariosData,
  UserUpdate,
  UsuariosDataConsulta,
} from "../../../types/catalogoUsuarios";

export interface CatalogoUsuariosState {
  catalogoUsuarios: CatalogoUsuariosData;
  catalogoUsuariosById: UsuariosDataConsulta;
  isLoadingCatalogo: boolean;
  isLoadingUsuario: boolean;
  idConsultaUsuarios: string;
}

const initialState: CatalogoUsuariosState = {
  catalogoUsuarios: { listaUsuarios: [] },
  catalogoUsuariosById: {
    idUser: "0",
    user: "",
    name: "",
    motherLastName: null,
    lastName: "",
    email: "",
    directBoss: "",
    picture: null,
    status: "",
    userUpdate: UserUpdate.DBA,
    permissions: [],
  },
  isLoadingCatalogo: true,
  isLoadingUsuario: true,
  idConsultaUsuarios: "",
};

export const UsuariosSlice = createSlice({
  name: "usuarioState",
  initialState,
  reducers: {
    startLoadingCatalogoUsuario: (state) => {
      state.isLoadingCatalogo = true;
    },
    startLoadingUsuario: (state) => {
      state.isLoadingUsuario = true;
    },
    setCatalagoUsuario: (state, action) => {
      state.catalogoUsuarios.listaUsuarios = action.payload;
      state.isLoadingCatalogo = false;
    },
    setCatalogoUsuarioById: (state, action) => {
      state.catalogoUsuariosById = action.payload;
      state.isLoadingUsuario = false;
    },
    setIdUsuario: (state, action) => {
      state.idConsultaUsuarios = action.payload;
      state.isLoadingUsuario = false;
    },
  },
});

export const {
  startLoadingCatalogoUsuario,
  startLoadingUsuario,
  setCatalagoUsuario,
  setCatalogoUsuarioById,
  setIdUsuario,
} = UsuariosSlice.actions;
