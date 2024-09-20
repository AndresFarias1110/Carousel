import { Contactanos } from "../../components/Contactanos/Contactanos";
import { FootPagina } from "../../components/FootPagina/FootPagina";
import "./Transportes.css";

export const Transportes = () => {
 
  return (
    <div className="bg-azul-gradiente">
      <div className="text-center nosotros-subtitulo">
        <span>NOSOTROS</span>
      </div>
      <div className="text-center nosotros-titulo">
        <span>Estructura oficina de producto</span>
      </div>
      <div className="d-flex justify-content-center nosotros-botones">
        <p>
          <button className="btn btn-primary">Inbound & Imports</button>
        </p>
        <p>
          <button className="btn btn-primary">Omni DC & FC</button>
        </p>
        <p>
          <button className="btn btn-primary">Omni Transportation</button>
        </p>
      </div>
      <Contactanos></Contactanos>
      <div>
        <FootPagina></FootPagina>
      </div>
    </div>
  );
};
