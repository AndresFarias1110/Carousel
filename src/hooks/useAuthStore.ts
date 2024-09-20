import Cookies from "universal-cookie";

import { onLogin, onLogout } from "../store/slices/auth";
import { descifrar } from "../utils";

import { useAppDispatch, useAppSelector } from "./hooks";

export const useAuthStore = () => {
  const { status, displayName, modules } = useAppSelector(
    (state) => state.authState,
  );
  const dispatch = useAppDispatch();
  const cookies = new Cookies();

  const checkAuthToken = async () => {
    const displayName = cookies.get("dn");
    if (!displayName) return dispatch(onLogout());
    await dispatch(onLogin(descifrar(displayName)));
  };

  const startLogout = () => {
    cookies.remove("dn");
    cookies.remove("e");
    cookies.remove("u");
    cookies.remove("JSESSIONID");
    dispatch(onLogout());
  };

  return {
    // Propiedades
    status,
    displayName,
    modules,

    // Métodos
    checkAuthToken,
    startLogout,
  };
};
