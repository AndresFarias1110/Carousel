import flechaIzquierda from "../../assets/img/carrusel-configuracion/felcha-izquierda.svg";
import "./Configuracion.css";
export const FlechaIzquierda = () => {
  return (
    <div>
      <div className="caja-md-flecha caja-flecha-responsivo row justify-content-center centrar-elemento padd-cajas">
        <img src={flechaIzquierda} alt="flecha" style={{ width: "50%" }} />
      </div>
    </div>
  );
};
