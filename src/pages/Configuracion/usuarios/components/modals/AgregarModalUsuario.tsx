import { Formik } from "formik";
import React, { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../../../../hooks/hooks";
import {
  CatalogoUsuariosState,
  getCatalogoUsuariosById,
} from "../../../../../store/slices/usuarios";
export interface AgregarUsuairoModalProps {
  handleShowModalUsuario: () => void;
}
export const AgregarModalUsuario = ({
  handleShowModalUsuario,
}: AgregarUsuairoModalProps) => {
  const dispatch = useAppDispatch();
  const [nombre, setNombre] = useState<string>("Agregar usuario");
  const {
    catalogoUsuariosById,
    idConsultaUsuarios,
    isLoadingUsuario,
  }: CatalogoUsuariosState = useAppSelector((state) => state.usuariosState);
  useEffect(() => {
    if (idConsultaUsuarios !== "") {
      handleConstruirDatos();
      dispatch(getCatalogoUsuariosById(idConsultaUsuarios));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCloseModal = () => {
    handleShowModalUsuario();
  };

  const handleConstruirDatos = () => {
    setNombre("Editar usuario");
  };
  return (
    <>
      <div className="container-sm">
        <div className="modal show fade modal-bg">
          <div className="modal-dialog modal-dialog-centered modal-lg ">
            <div
              className="modal-content container-sm"
              style={{ alignSelf: "stretch" }}
            >
              <div className="modal-header">
                <div className="row">
                  <div className="col-12">
                    <h5 className="modal-title negritas">{nombre}</h5>
                  </div>
                  <div className="col-12">
                    <p className="text-grey">
                      Ingresa los datos que se te solicitan
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="modal-body "
                style={{ paddingBottom: "3px", paddingTop: "3px" }}
              >
                {isLoadingUsuario === false ? (
                  <Formik
                    initialValues={{
                      id: catalogoUsuariosById.idUser || "",
                      nombre: catalogoUsuariosById.name || "",
                      apellido: catalogoUsuariosById.lastName || "",
                      apellidoMaterno:
                        catalogoUsuariosById.motherLastName || "",
                      usuario: catalogoUsuariosById.user || "",
                    }}
                    initialErrors={{}}
                    onSubmit={async (_, { resetForm }) => {}}
                  >
                    {({ values, handleSubmit }) => {
                      return (
                        <form onSubmit={handleSubmit}>
                          <div className="row gap-modal pad-button">
                            <div className="col">
                              <div className="row">
                                <label className="negritas">ID</label>
                              </div>
                              <div className="row form-inputs">
                                <input
                                  type="text"
                                  placeholder="Ingresar"
                                  disabled
                                  style={{
                                    border: "none",
                                    outline: 0,
                                    margin: "5px 0",
                                  }}
                                  value={values.id}
                                />
                              </div>
                            </div>
                            <div className="col ">
                              <div className="row">
                                <label className="negritas">Nombre</label>
                              </div>
                              <div className="row form-inputs">
                                <input
                                  type="text"
                                  placeholder="Ingresar"
                                  style={{
                                    border: "none",
                                    outline: 0,
                                    margin: "5px 0",
                                  }}
                                  value={values.nombre}
                                />
                              </div>
                            </div>
                            <div className="col">
                              <div className="row">
                                <label className="negritas">
                                  Apellido paterno
                                </label>
                              </div>
                              <div className="row form-inputs">
                                <input
                                  type="text"
                                  placeholder="Ingresar"
                                  style={{
                                    border: "none",
                                    outline: 0,
                                    margin: "5px 0",
                                  }}
                                  value={values.apellido}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row gap-modal pad-button">
                            <div className="col">
                              <div className="row">
                                <label className="negritas">
                                  Apellido materno
                                </label>
                              </div>
                              <div className="row form-inputs">
                                <input
                                  type="text"
                                  placeholder="Ingresar"
                                  style={{
                                    border: "none",
                                    outline: 0,
                                    margin: "5px 0",
                                  }}
                                  value={values.apellidoMaterno}
                                />
                              </div>
                            </div>
                            <div className="col ">
                              <div className="row">
                                <label className="negritas">Usuario</label>
                              </div>
                              <div className="row form-inputs">
                                <input
                                  type="text"
                                  placeholder="Ingresar"
                                  style={{
                                    border: "none",
                                    outline: 0,
                                    margin: "5px 0",
                                  }}
                                  value={values.usuario}
                                />
                              </div>
                            </div>
                          </div>
                        </form>
                      );
                    }}
                  </Formik>
                ) : (
                  <div></div>
                )}
              </div>
              <div className="modal-footer">
                <div className="row justify-content-end">
                  <div className="col-auto  ">
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-md"
                      onClick={() => handleCloseModal()}
                      style={{ paddingBottom: "5px" }}
                    >
                      Cancelar
                    </button>
                  </div>
                  {idConsultaUsuarios === "" && (
                    <div className="col-auto  ">
                      <button
                        type="button"
                        className="btn btn-primary btn-md"
                        onClick={() => handleCloseModal()}
                        style={{ paddingBottom: "5px" }}
                      >
                        Agregar
                      </button>
                    </div>
                  )}
                  {idConsultaUsuarios !== "" && (
                    <div className="col-auto  ">
                      <button
                        type="button"
                        className="btn btn-primary btn-md"
                        onClick={() => handleCloseModal()}
                        style={{ paddingBottom: "5px" }}
                      >
                        Guardar cambios
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
