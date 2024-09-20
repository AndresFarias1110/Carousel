import iconCorreo from "../../assets/icons/icono_correo.png";
import imgLinea from "../../assets/img/footer/linea-footer.png";
import imgCoeProducto from "../../assets/img/footer/logo-coe-producto.png";

import "./FootPagina.css";

export const FootPagina = () => {
  return (
    <div className="footer">
      <div className="row">
        <div className="d-flex justify-content-center">
          <div className="logo-coe-producto">
            <img src={imgCoeProducto} alt="" />
          </div>
          <div className="footer-contenedor-omni">
            <p className="footer-titulo-omni">
              <span>Product Omni Supply Chain</span>
            </p>
            <p className="footer-descripcion-omni">
              <span>
                Creamos la mejor experiencia de compra, centrada en el cliente,
                a través de nuestros productos, servicios y soluciones que
                aseguran nuestra continua transformación.
              </span>
            </p>
            <div className="d-flex justify-content-between footer-omni-link">
              <p>
                <a href="/">Términos y condiciones</a>
              </p>
              <p>
                <a href="/">Aviso de privacidad</a>
              </p>
            </div>
          </div>
          <div className="footer-acerca-de">
            <p className="footer-titulo footer-titulo-acerca">Acerca de</p>
            <p className="footer-nosotros">
              <a href="/">Nosotros</a>
            </p>
          </div>
          <div className="footer-mapa">
            <p className="footer-titulo footer-mapa-sitio">Mapa del sitio</p>
            <p className="footer-opciones-mapa">
              <a href="/">Product Omni Supply Chain</a>
            </p>
            <p className="footer-opciones-mapa">
              <a href="/">Inbound & Imports</a>
            </p>
            <p className="footer-opciones-mapa">
              <a href="/">Omni DC & FC</a>
            </p>
            <p className="footer-opciones-mapa">
              <a href="/">Omni Transportation</a>
            </p>
            <p className="footer-opciones-mapa">
              <a href="/">Dashboard</a>
            </p>
          </div>
          <div>
            <p className="footer-titulo">Contacto</p>
            <p className="footer-correo">
              <img src={iconCorreo} alt="" />
              <span>product_office_sch@walmart.com</span>
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="d-flex justify-content-center footer-linea">
          <img src={imgLinea} alt="" />
        </div>
        <div className="d-flex justify-content-center">
          <span className="footer-copyright">Copyright © 2024.</span>
        </div>
      </div>
    </div>
  );
};
