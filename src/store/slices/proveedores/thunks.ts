import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import optimusApi from "../../../service/optimusApi";

import {
  CatalogoProveedoresState,
  setCatalogoProveedor,
  setCatalogoProveedorById,
  startLoadingCatalogoId,
  startLoadingCatalogoProveedor,
} from "./proveedoreSlice";

export const getCatalogoProveedor = () => {
  return async (
    dispatch: ThunkDispatch<
      { proveedoresState: CatalogoProveedoresState },
      undefined,
      AnyAction
    >,
  ) => {
    try {
      dispatch(startLoadingCatalogoProveedor());
      const { data } = await optimusApi.get(`/v1/vendor/listVendors/getAll`);
      /* const CatalogoProveedoresResponse = [
        {
          id: 0,
          clave: "0",
          nombre_corto: "*******",
          razon_social: "*******",
          rfc: "0",
          calle: null,
          colonia: null,
          municipio: null,
          codigo_postal: null,
          latitud: null,
          longitud: null,
          estatus: true,
          tipos_proveedor: [
            {
              clave: "0",
              descripcion: "0",
            },
          ],
          contactos: [
            {
              tipo: "*******",
              nombre: "*******",
              lada: null,
              telefono: 0,
              correo: "*******",
              descripcion_puesto: "*******",
            },
          ],
          estado: "Aguascalientes",
        },
        {
          id: 436,
          clave: "10436",
          nombre_corto: "3 GUERRERAS",
          razon_social: "LOGISTICA 3 GUERRERAS SA DE CV",
          rfc: "LTG161017MY7",
          calle: null,
          colonia: null,
          municipio: null,
          codigo_postal: null,
          latitud: null,
          longitud: null,
          estatus: true,
          tipos_proveedor: [
            {
              clave: "LT",
              descripcion: "Lineas Transportistas",
            },
          ],
          contactos: [],
          estado: "Ciudad de México",
        },
        {
          id: 140,
          clave: "10140",
          nombre_corto: "3R",
          razon_social: "TRANSPORTES ESPECIALIZADOS 3R DE MEXICO SA DE CV",
          rfc: "TET010312G71",
          calle: null,
          colonia: null,
          municipio: null,
          codigo_postal: null,
          latitud: null,
          longitud: null,
          estatus: true,
          tipos_proveedor: [
            {
              clave: "LT",
              descripcion: "Lineas Transportistas",
            },
          ],
          contactos: [],
          estado: "Ciudad de México",
        },
        {
          id: 225,
          clave: "10225",
          nombre_corto: "A LA TALLA",
          razon_social: "LOGISTICA A LA TALLA, S.A. DE C.V.",
          rfc: "LAT1003295A3",
          calle: null,
          colonia: null,
          municipio: null,
          codigo_postal: null,
          latitud: null,
          longitud: null,
          estatus: true,
          tipos_proveedor: [
            {
              clave: "LT",
              descripcion: "Lineas Transportistas",
            },
          ],
          contactos: [],
          estado: "Ciudad de México",
        },
        {
          id: 355,
          clave: "10355",
          nombre_corto: "ABC DEL CARIBE",
          razon_social: "TRANSPORTES ABC DEL CARIBE SA DE CV",
          rfc: "TAC040816DA4",
          calle: null,
          colonia: null,
          municipio: null,
          codigo_postal: null,
          latitud: null,
          longitud: null,
          estatus: true,
          tipos_proveedor: [
            {
              clave: "LT",
              descripcion: "Lineas Transportistas",
            },
          ],
          contactos: [],
          estado: "Ciudad de México",
        },
        {
          id: 274,
          clave: "10274",
          nombre_corto: "ACCEL",
          razon_social: "ACCEL COMERCIAL S.A. DE C.V.",
          rfc: "ACO941024FG4",
          calle: null,
          colonia: null,
          municipio: null,
          codigo_postal: null,
          latitud: null,
          longitud: null,
          estatus: true,
          tipos_proveedor: [
            {
              clave: "LT",
              descripcion: "Lineas Transportistas",
            },
          ],
          contactos: [],
          estado: "Ciudad de México",
        },
        {
          id: 392,
          clave: "10392",
          nombre_corto: "ACTINVER",
          razon_social: "ARRENDADORA ACTINVER SA DE CV",
          rfc: "PLE980309KL9",
          calle: null,
          colonia: null,
          municipio: null,
          codigo_postal: null,
          latitud: null,
          longitud: null,
          estatus: true,
          tipos_proveedor: [
            {
              clave: "LT",
              descripcion: "Lineas Transportistas",
            },
          ],
          contactos: [],
          estado: "Ciudad de México",
        },
        {
          id: 126,
          clave: "10126",
          nombre_corto: "ALA",
          razon_social: "AUTO LINEAS AMERICA S.A. DE C.V.",
          rfc: "ALA590112UQ6",
          calle: null,
          colonia: null,
          municipio: null,
          codigo_postal: null,
          latitud: null,
          longitud: null,
          estatus: true,
          tipos_proveedor: [
            {
              clave: "LT",
              descripcion: "Lineas Transportistas",
            },
          ],
          contactos: [],
          estado: "Ciudad de México",
        },
      ];*/

      dispatch(setCatalogoProveedor(data));
    } catch (err) {
      if (err instanceof AxiosError) {
        throw new Error(err.message);
      }
    }
  };
};

export const getCatalogoProveedorbyId = (id: string) => {
  return async (
    dispatch: ThunkDispatch<
      { proveedoresState: CatalogoProveedoresState },
      undefined,
      AnyAction
    >,
  ) => {
    try {
      let request = [id];
      dispatch(startLoadingCatalogoId());
      const { data } = await optimusApi.post(
        `/v1/vendor/listVendors/byListVendor`,
        request,
      );
      if (data[0]) {
        dispatch(setCatalogoProveedorById(data[0]));
      }

      //const { data } = await optimusApi.get(`/v2/proveedores`);
    } catch (err) {
      if (err instanceof AxiosError) {
        throw new Error(err.message);
      }
    }
  };
};
