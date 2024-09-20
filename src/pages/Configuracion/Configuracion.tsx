import "./Configuracion.css";
import { Carousel } from "@trendyol-js/react-carousel";
import { useNavigate } from "react-router-dom";

import { FlechaIzquierda } from "./flechaIzquierda";
export interface ElementsByValueComponentProps {
  activo: string;
}
const Configuracion = ({ activo }: ElementsByValueComponentProps) => {
  const navigate = useNavigate();
  return (
    <div>
      <Carousel
        className="centrar-elemento"
        show={5}
        slide={1}
        transition={0.3}
        responsive={true}
        rightArrow={<FlechaIzquierda />}
      >
        <div
          className={`caja-md-flecha sombra row justify-content-center centrar-elemento cajas-items padd-cajas imagen-camion ${
            activo === "proveedores" && "activo-camion cajas-item-activo"
          }`}
          onClick={() => navigate("/configuracion/proveedores")}
        >
          <div className="col-12 centrar-elemento pt-5">
            <p className="negritas texto-caja">Proveedores</p>
          </div>
        </div>
        <div
          className={`test caja-md-flecha sombra row justify-content-center centrar-elemento cajas-items padd-cajas imagen-usuario ${
            activo === "usuarios" && "activo-usuario cajas-item-activo"
          }`}
          onClick={() => navigate("/configuracion/usuarios")}
        >
          <div className="col-12 centrar-elemento pt-5">
            <p className="negritas texto-caja">Usuarios</p>
          </div>
        </div>
        <div className="caja-md-flecha sombra row justify-content-center centrar-elemento cajas-items padd-cajas imagen-gps">
          <div className="col-12 centrar-elemento pt-5">
            <p className="negritas texto-caja">Tabla</p>
          </div>
        </div>
        <div className="caja-md-flecha sombra row justify-content-center centrar-elemento cajas-items padd-cajas imagen-trailer">
          <div className="col-12 centrar-elemento pt-5">
            <p className="negritas texto-caja">Tabla</p>
          </div>
        </div>
        <div className="caja-md-flecha sombra row justify-content-center centrar-elemento cajas-items padd-cajas imagen-folder">
          <div className="col-12 centrar-elemento pt-5">
            <p className="negritas texto-caja">Tabla</p>
          </div>
        </div>
        <div className="caja-md-flecha sombra row justify-content-center centrar-elemento cajas-items padd-cajas imagen-gps">
          <div className="col-12 centrar-elemento pt-5">
            <p className="negritas texto-caja">Tabla</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Configuracion;
