import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import optimusApi from "../../../service/optimusApi";

import {
  CatalogoUsuariosState,
  setCatalagoUsuario,
  setCatalogoUsuarioById,
  startLoadingCatalogoUsuario,
  startLoadingUsuario,
} from "./usuarioSlice";

export const getCatalogoUsuarios = () => {
  return async (
    dispatch: ThunkDispatch<
      { usuariosState: CatalogoUsuariosState },
      undefined,
      AnyAction
    >,
  ) => {
    try {
      dispatch(startLoadingCatalogoUsuario());

      const { data } = await optimusApi.get(`/v1/user-control`);
      dispatch(setCatalagoUsuario(data));
    } catch (err) {
      if (err instanceof AxiosError) {
        throw new Error(err.message);
      }
    }
  };
};
export const getCatalogoUsuariosById = (id: string) => {
  return async (
    dispatch: ThunkDispatch<
      { usuariosState: CatalogoUsuariosState },
      undefined,
      AnyAction
    >,
  ) => {
    try {
      dispatch(startLoadingUsuario());
      const { data } = await optimusApi.get(`/v1/user-control/${id}`);
      if (data[0]) {
        dispatch(setCatalogoUsuarioById(data[0]));
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        throw new Error(err.message);
      }
    }
  };
};
