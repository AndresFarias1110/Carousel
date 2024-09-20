import { Formik } from "formik";

import imgContactanos from "../../assets/img/ProductoSupplyChain/img-contactanos.png";
import "./Contactanos.css";


export const Contactanos = () => {
  
  return <>
  <div className="col-12 text-center contactanos">
            <p>
              <span>Contáctanos</span>
            </p>
            <p className="descripcion-contactanos">
              ¿Necesitas más información? Compártenos tus datos para que nuestro
              equipo se comunique contigo a la brevedad.
            </p>
          </div>
          <div className="row mb-4">
            <div className="col-6 text-center">
              <img src={imgContactanos} alt="" style={{ marginTop: "-6px" }} />
            </div>
            <div className="col-6">
              <Formik
                initialValues={{
                  nombre: "",
                  apellidos: "",
                  area: "",
                  producto: "",
                  mensaje: "",
                }}
                initialErrors={{}}
                onSubmit={async (_, { resetForm }) => {}}
              >
                {({ values, handleSubmit, handleChange }) => {
                  return (
                    <form onSubmit={handleSubmit} className="form-contactanos">
                      <div className="d-flex">
                        <div className="input-wrapper row-inputs">
                          <input
                            className="input"
                            type="text"
                            placeholder=" "
                            data-placeholder="Nombre"
                          />
                          <p className="placeholder">
                            Nombre(s)
                            <span style={{ color: "red" }}>*</span>
                          </p>
                        </div>
                        <div className="input-wrapper row-inputs">
                          <input
                            className="input"
                            type="text"
                            placeholder=" "
                            data-placeholder="Apellidos"
                          />
                          <p className="placeholder">
                            Apellidos
                            <span style={{ color: "red" }}>*</span>
                          </p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="input-wrapper row-inputs">
                          <input
                            className="input"
                            type="text"
                            placeholder=" "
                            data-placeholder="Área"
                          />
                          <p className="placeholder">
                            Área
                            <span style={{ color: "red" }}>*</span>
                          </p>
                        </div>
                        <div className="input-wrapper row-inputs">
                          <input
                            className="input"
                            type="text"
                            placeholder=" "
                            data-placeholder="Producto"
                          />
                          <p className="placeholder">
                            Producto
                            <span style={{ color: "red" }}>*</span>
                          </p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="input-wrapper">
                          <textarea
                            className="input"
                            name="mensaje"
                            placeholder=" "
                            data-placeholder="Mensaje"
                          />
                          <p className="placeholder">Mensaje</p>
                        </div>
                      </div>
                      <div
                        className="d-flex justify-content-end"
                        style={{ width: "773px" }}
                      >
                        <button className="btn btn-primary btn-enviar">
                          Enviar
                        </button>
                      </div>
                    </form>
                  );
                }}
              </Formik>
            </div>
          </div>
  </>
};
