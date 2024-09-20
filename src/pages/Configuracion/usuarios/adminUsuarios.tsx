import { useEffect, useState } from "react";

import { ModalEliminar } from "../../../components/Modal-Eliminar/Modal-Eliminar";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import {
  CatalogoUsuariosState,
  getCatalogoUsuarios,
  setCatalogoUsuarioById,
  setIdUsuario,
} from "../../../store/slices/usuarios";
import Configuracion from "../Configuracion";

import { BuscadorUsuarios } from "./components/buscadorUsuario";
import { AgregarModalUsuario } from "./components/modals/AgregarModalUsuario";
import { TableDesignUsuarios } from "./components/TableDesignUsuarios";

export const AdminUsuarios = () => {
  const dispatch = useAppDispatch();
  const { catalogoUsuarios, isLoadingCatalogo }: CatalogoUsuariosState =
    useAppSelector((state) => state.usuariosState);
  const [totalRegistro, setTotalRegistro] = useState<number>(0);
  const [modalUsuario, setmodalUsuario] = useState<boolean>(false);
  const [modalProveedorEliminar, setModalProveedorEliminar] =
    useState<boolean>(false);
  useEffect(() => {
    dispatch(getCatalogoUsuarios());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setTotalRegistro(catalogoUsuarios.listaUsuarios.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [catalogoUsuarios]);
  const handleShowModalAddUser = () => {
    setmodalUsuario(!modalUsuario);
  };
  const handleShowModalAddProvElimar = () => {
    setModalProveedorEliminar(!modalProveedorEliminar);
  };
  const handleShowModalAddUserClose = () => {
    setmodalUsuario(!modalUsuario);
    dispatch(setCatalogoUsuarioById({}));
    dispatch(setIdUsuario(""));
  };
  return (
    <>
      <div className="container justify-content-center mt-5">
        <h5 className="negritas">Catálogo de Usuarios</h5>
        <h5 className="text-gray mb-4">
          Aqui podrás dar de alta, editar o eliminar registros.
        </h5>
        <div className="mb-5">
          <Configuracion activo="usuarios" />
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
                onClick={() => handleShowModalAddUser()}
              >
                Agregar usuario
              </button>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <BuscadorUsuarios></BuscadorUsuarios>
        </div>
        <div>
          {isLoadingCatalogo ? (
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "50vh" }}
            ></div>
          ) : (
            <div className="col" style={{ width: "100%" }}>
              {isLoadingCatalogo ? (
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ height: "50vh" }}
                ></div>
              ) : (
                <div className="col">
                  <TableDesignUsuarios
                    handleShowModalUsuario={handleShowModalAddUser}
                    handleShowModalUsuarioEliminar={
                      handleShowModalAddProvElimar
                    }
                    registrosUsuarios={catalogoUsuarios.listaUsuarios}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {modalUsuario && (
        <AgregarModalUsuario
          handleShowModalUsuario={handleShowModalAddUserClose}
        />
      )}
      {modalProveedorEliminar && (
        <ModalEliminar
          handleShowModalProveedoresEliminar={handleShowModalAddProvElimar}
          nombre="usuario"
        />
      )}
    </>
  );
};
