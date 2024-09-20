import { useEffect, useState } from "react";

import { ModalEliminar } from "../../../components/Modal-Eliminar/Modal-Eliminar";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import {
  CatalogoProveedoresState,
  getCatalogoProveedor,
  setCatalogoProveedorById,
  setIdConsultaProveedores,
} from "../../../store/slices/proveedores";
import Configuracion from "../Configuracion";

import { BuscadorProveedores } from "./components/buscadorProveedores";
import { AgregarModalProveedor } from "./components/modals/AgregarModalProveedor";
import { TableDesignProveedores } from "./components/TableDesignProveedores";

export const AdminProveedores = () => {
  const dispatch = useAppDispatch();
  const {
    catalogoProveedores,
    isLoadingCatalogoProveedor,
  }: CatalogoProveedoresState = useAppSelector(
    (state) => state.proveedoresState,
  );
  const [totalRegistro, setTotalRegistro] = useState<number>(0);
  const [modalProveedor, setmodalProveedor] = useState<boolean>(false);
  const [modalProveedorEliminar, setModalProveedorEliminar] =
    useState<boolean>(false);
  const handleShowModalAddProv = () => {
    setmodalProveedor(!modalProveedor);
  };
  const handleShowModalAddProvElimar = () => {
    setModalProveedorEliminar(!modalProveedorEliminar);
  };
  const handleShowModalAddProvClose = () => {
    setmodalProveedor(!modalProveedor);
    dispatch(setCatalogoProveedorById({}));
    dispatch(setIdConsultaProveedores(""));
  };
  useEffect(() => {
    dispatch(getCatalogoProveedor());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setTotalRegistro(catalogoProveedores.listaProvedores.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [catalogoProveedores]);
  return (
    <>
      <div className="container justify-content-center mt-5">
        <h5 className="negritas">Catálogo de Proveedores</h5>
        <h5 className="text-gray mb-4">
          Aqui podrás dar de alta, editar o eliminar registros.
        </h5>
        <div className="mb-5">
          <Configuracion activo="proveedores" />
        </div>
        <div className="text-center mb-5">
          <div className="row justify-content-between">
            <div className="col-4 d-flex justify-content-start align-items-center">
              <h5 className="text-gray negritas" style={{ margin: "0px" }}>
                Total de registro: {totalRegistro}
              </h5>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              <button
                type="button"
                className="btn btn-primary boton-primario border-radius px-4"
                onClick={() => handleShowModalAddProv()}
              >
                Agregar Proveedor
              </button>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <BuscadorProveedores />
        </div>
        <div>
          {isLoadingCatalogoProveedor ? (
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "50vh" }}
            ></div>
          ) : (
            <div className="col" style={{ width: "100%" }}>
              <TableDesignProveedores
                handleShowModalProveedores={handleShowModalAddProv}
                handleShowModalProveedoresEliminar={
                  handleShowModalAddProvElimar
                }
                registrosProveedores={catalogoProveedores.listaProvedores}
              />
            </div>
          )}
        </div>
      </div>
      {modalProveedor && (
        <AgregarModalProveedor
          handleShowModalProveedores={handleShowModalAddProvClose}
        />
      )}
      {modalProveedorEliminar && (
        <ModalEliminar
          handleShowModalProveedoresEliminar={handleShowModalAddProvElimar}
          nombre="proveedor"
        />
      )}
    </>
  );
};
