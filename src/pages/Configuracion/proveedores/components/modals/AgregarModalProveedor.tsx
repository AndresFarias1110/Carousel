import { Formik } from "formik";
import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../../../../hooks/hooks";
import {
  CatalogoProveedoresState,
  getCatalogoProveedorbyId,
} from "../../../../../store/slices/proveedores";
export interface AgregarProveedorModalProps {
  handleShowModalProveedores: () => void;
}
export const AgregarModalProveedor = ({
  handleShowModalProveedores,
}: AgregarProveedorModalProps) => {
  const dispatch = useAppDispatch();
  const [nombre, setNombre] = useState<string>("Agregar nuevo proveedor");
  const {
    idConsultaProveedores,
    catalogoProveedoresById,
  }: CatalogoProveedoresState = useAppSelector(
    (state) => state.proveedoresState,
  );
  useEffect(() => {
    if (idConsultaProveedores !== "") {
      handleConstruirDatos();
      dispatch(getCatalogoProveedorbyId(idConsultaProveedores));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleCloseModal = () => {
    handleShowModalProveedores();
  };
  const handleConstruirDatos = () => {
    setNombre("Editar proveedor");
  };
  return (
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
              {catalogoProveedoresById.idVendor ? (
                <Formik
                  initialValues={{
                    id: catalogoProveedoresById.idVendor || "",
                    clave: catalogoProveedoresById.key || "",
                    nombre_corto: catalogoProveedoresById.shortName || "",
                    razon_social: catalogoProveedoresById.busineesName || "",
                    rfc: catalogoProveedoresById.rfc || "",
                    calle: catalogoProveedoresById.street || "",
                    colonia: catalogoProveedoresById.colonia || "",
                    municipio: catalogoProveedoresById.municipality || "",
                    estado: catalogoProveedoresById.state.capital || "",
                    codigo_postal: catalogoProveedoresById.postalCode || "",
                    latitud: catalogoProveedoresById.latitude || "",
                    longitud: catalogoProveedoresById.longitude || "",
                    estatus: catalogoProveedoresById.status || "",
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
                              <label className="negritas">Clave</label>
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
                                value={values.clave}
                              />
                            </div>
                          </div>
                          <div className="col">
                            <div className="row">
                              <label className="negritas">Nombre corto</label>
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
                                value={values.nombre_corto}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row gap-modal pad-button">
                          <div className="col">
                            <div className="row">
                              <label className="negritas">Razón social</label>
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
                                value={values.razon_social}
                              />
                            </div>
                          </div>
                          <div className="col ">
                            <div className="row">
                              <label className="negritas">RFC</label>
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
                                value={values.rfc}
                              />
                            </div>
                          </div>
                          <div className="col">
                            <div className="row">
                              <label className="negritas">Estado</label>
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
                                value={values.estado}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row gap-modal pad-button">
                          <div className="col">
                            <div className="row">
                              <label className="negritas">C.P</label>
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
                                value={values.codigo_postal}
                              />
                            </div>
                          </div>
                          <div className="col ">
                            <div className="row">
                              <label className="negritas">Colonia</label>
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
                                value={values.colonia}
                              />
                            </div>
                          </div>
                          <div className="col">
                            <div className="row">
                              <label className="negritas">Municipio</label>
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
                                value={values.municipio}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row gap-modal pad-button">
                          <div className="col">
                            <div className="row">
                              <label className="negritas">Calle</label>
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
                                value={values.calle}
                              />
                            </div>
                          </div>
                          <div className="col ">
                            <div className="row">
                              <label className="negritas">Latitud</label>
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
                                value={values.latitud}
                              />
                            </div>
                          </div>
                          <div className="col">
                            <div className="row">
                              <label className="negritas">Longitud</label>
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
                                value={values.longitud}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row gap-modal pad-button">
                          <div className="col-4">
                            <div className="row">
                              <label className="negritas">Estatus</label>
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
                                value={values.estatus}
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
                {idConsultaProveedores === "" && (
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
                {idConsultaProveedores !== "" && (
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
  );
};
