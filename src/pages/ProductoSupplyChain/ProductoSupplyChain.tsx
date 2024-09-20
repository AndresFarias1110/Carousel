import { Formik } from "formik";
import { useEffect, useState } from "react";

import iconFlecha from "../../assets/icons/icon-flecha.svg";
import iconInboundImports from "../../assets/icons/icon-inbound-imports.png";
import iconOmniDC from "../../assets/icons/icon-omni-dc.png";
import iconOmniTransportation from "../../assets/icons/icon-omni-transportation.png";
import iconVer from "../../assets/icons/icon-ver.png";
import imgAgileWay from "../../assets/img/ProductoSupplyChain/agile-way-working.png";
import imgAssociateCentricity from "../../assets/img/ProductoSupplyChain/associate-centricity.png";
import barraAzul from "../../assets/img/ProductoSupplyChain/barra_azul.svg";
import imgCustomerCentricity from "../../assets/img/ProductoSupplyChain/customer-centricity.png";
import imgDataDriven from "../../assets/img/ProductoSupplyChain/data-driven-mindset.png";
import imgFederico from "../../assets/img/ProductoSupplyChain/federico.png";

import imgOmniDC from "../../assets/img/ProductoSupplyChain/img-dc.png";
import imgInbound from "../../assets/img/ProductoSupplyChain/img-Inbound.png";
import imgOmniTranspotation from "../../assets/img/ProductoSupplyChain/img-transportation.png";
import imgInboundChico from "../../assets/img/ProductoSupplyChain/Inbound-chico.png";
import imgInboundGrande from "../../assets/img/ProductoSupplyChain/Inbound-grande.png";
import imgJavier from "../../assets/img/ProductoSupplyChain/javier.png";
import imgJorge from "../../assets/img/ProductoSupplyChain/jorge.png";
import imgkaren from "../../assets/img/ProductoSupplyChain/karen.png";
import imgOmniDCChico from "../../assets/img/ProductoSupplyChain/Omni-DC-chico.png";
import imgOmniDCGrande from "../../assets/img/ProductoSupplyChain/Omni-DC-grande.png";
import imgOmniTranspotationChico from "../../assets/img/ProductoSupplyChain/Omni-Transportation-chico.png";
import imgOmniTranspotationGrande from "../../assets/img/ProductoSupplyChain/Omni-Transportation-grande.png";
import imgCProcesose2e from "../../assets/img/ProductoSupplyChain/procesos-e2e.png";
import imgPrincipal from "../../assets/img/ProductoSupplyChain/ProductoSupplyChain.svg";
import imgRajat from "../../assets/img/ProductoSupplyChain/rajat.png";
import CarouselProducto from "../../components/CarouselProducto/CarouselProducto";
import "./ProductoSupplyChain.css";
import { FootPagina } from "../../components/FootPagina/FootPagina";
import { PortafolioProducto } from "../../components/PortafolioProducto/PortafolioProducto";
import { Contactanos } from "../../components/Contactanos/Contactanos";

const portafoliosInicial = [
  {
    img: imgInbound,
    titulo: "Inbound & Imports",
    activo: false,
    class: "inbound position-relative",
    collapse: false,
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    img: imgOmniDC,
    titulo: "Omni DC & FC",
    activo: false,
    collapse: false,
    class: "omni-dc position-relative",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    img: imgOmniTranspotation,
    titulo: "Omni Transportation",
    activo: false,
    collapse: false,
    class: "position-relative",
    descripcion:
      "Proporcionar soluciones tecnológicas enfocadas en fortalecer la experiencia de nuestros usuarios de transporte a través de productos y sistema.",
  },
];

export const ProductoSupplyChain = () => {

  return (
    <div>
      <div className="row contenedor-producto">
        <div
          style={{
            width: "787px",
            marginRight: "98px",
          }}
        >
          <div>
            <p style={{ width: "620px" }}>
              <h1 className="titulo-principal">
                Oficina de Producto Supply Chain
              </h1>
            </p>
            <p className="texto-principal">
              <span className="negritas">Misión:</span> Crear la mejor
              experiencia de compra, centrada en el cliente, a través de
              productos, servicios y soluciones que aseguren una continua
              transformación basada en datos y tecnología, encontrando y
              desarrollando oportunidades para crecer rápidamente.
            </p>
          </div>
        </div>
        <div
          className="text-center"
          style={{
            width: "674px",
          }}
        >
          <img src={imgPrincipal} alt="" className="imagen-principal" />
        </div>
      </div>
      <img src={barraAzul} alt="" className="imagen-barra-azul" />
      <CarouselProducto></CarouselProducto>
      <div className="container-fluid bg-azul-gradiente">
        <PortafolioProducto></PortafolioProducto>
        <div className="row mt-5">
          <div className="col-12 text-center portafolio-nosotros">
            <span>NOSOTROS</span>
          </div>
          <div className="col-12 text-center titulo-estructura">
            <span>Estructura oficina de producto.</span>
          </div>
          <div className="d-flex justify-content-center mb-4 oficina">
            <div className="card-fotos-oficina">
              <figure className="img-responsive">
                <img src={imgFederico} alt="" />
                <p className="nombre-responsable">
                  <span>Federico Baragallo</span>
                  <br />
                  <span className="puesto">PRODUCT LEAD</span>
                </p>
                <div className="actions">
                  <p className="ver-team">
                    <img src={iconVer} alt="" />
                    <span>Ver team</span>
                  </p>
                </div>
              </figure>
              <p className="nombre-oficina">
                <span>Product Office</span>
              </p>
            </div>
            <div className="card-fotos-oficina">
              <figure className="img-responsive">
                <img src={imgRajat} alt="" />
                <p className="nombre-responsable">
                  <span>Rajat Verma</span>
                  <br />
                  <span className="puesto">PRODUCT LEAD</span>
                </p>
                <div className="actions">
                  <p className="ver-team">
                    <img src={iconVer} alt="" />
                    <span>Ver team</span>
                  </p>
                </div>
              </figure>
              <p className="nombre-oficina">
                <span>Product Omni Supply Chain</span>
              </p>
            </div>
            <div className="card-fotos-oficina">
              <figure className="img-responsive">
                <img src={imgkaren} alt="" />
                <p className="nombre-responsable">
                  <span>Karen García</span>
                  <br />
                  <span className="puesto">PORTFOLIO LEAD</span>
                </p>
                <div className="actions">
                  <p className="ver-team">
                    <img src={iconVer} alt="" />
                    <span>Ver team</span>
                  </p>
                </div>
              </figure>
              <p className="nombre-oficina">
                <img src={iconInboundImports} alt="" />
                <span>Inbound & Imports</span>
              </p>
            </div>
            <div className="card-fotos-oficina">
              <figure className="img-responsive">
                <img src={imgJavier} alt="" />
                <p className="nombre-responsable">
                  <span>Javier Jasso</span>
                  <br />
                  <span className="puesto">PORTFOLIO LEAD</span>
                </p>
                <div className="actions">
                  <p className="ver-team">
                    <img src={iconVer} alt="" />
                    <span>Ver team</span>
                  </p>
                </div>
              </figure>
              <p className="nombre-oficina">
                <img src={iconOmniDC} alt="" />
                <span>Omni DC & FC</span>
              </p>
            </div>
            <div className="card-fotos-oficina">
              <figure className="img-responsive">
                <img src={imgJorge} alt="" />
                <p className="nombre-responsable">
                  <span>Jorge Cisneros</span>
                  <br />
                  <span className="puesto">PORTFOLIO LEAD</span>
                </p>
                <div className="actions">
                  <p className="ver-team">
                    <img src={iconVer} alt="" />
                    <span>Ver team</span>
                  </p>
                </div>
              </figure>
              <p className="nombre-oficina">
                <img src={iconOmniTransportation} alt="" />
                <span>Omni Transportation</span>
              </p>
            </div>
          </div>
          <div className="col-12 text-center seccion-pilares">
            <span>PILARES</span>
          </div>
          <div className="col-12 text-center titulo-pilares">
            <span>Pilares de transformación en Product Omni Supply Chain</span>
          </div>
          <div className="d-flex justify-content-center mb-4 pilares">
            <div>
              <p>
                <img src={imgCustomerCentricity} alt="" />
              </p>
              <p style={{ width: "200px" }}>
                <span className="nombre-pilar">Customer Centricity (CC):</span>
              </p>
              <p className="text-justify descripcion-pilar">
                <span>
                  Realizamos sesiones colaborativas antes de cada proyecto y
                  durante cada etapa del desarrollo del producto para entender
                  al cliente. Creamos objetivos en conjunto de la opinión del
                  cliente.
                </span>
              </p>
            </div>
            <div className="margen-pilares">
              <p>
                <img src={imgDataDriven} alt="" />
              </p>
              <p>
                <span className="nombre-pilar">Data Driven Mindset (DD):</span>
              </p>
              <p className="text-justify descripcion-pilar">
                <span>
                  Nuestro objetivo es:“ Establecer una cultura en el equipo de
                  Producto basado en toma de decisiones en datos de una sola
                  fuente información, donde el objetivo principal será brindar
                  visibilidad de cada uno de los indicadores internos a
                  cualquier área generando y gestionando herramientas con visión
                  End to End.”
                </span>
              </p>
            </div>
            <div className="margen-pilares">
              <p>
                <img src={imgCProcesose2e} alt="" />
              </p>
              <p>
                <span className="nombre-pilar">Procesos End to End (E2E):</span>
              </p>
              <p className="text-justify descripcion-pilar">
                <span>
                  Crear sesiones colaborativas donde se conozca y se identifique
                  lo que cada área presente en sus indicadores, métrica y
                  objetivos a corto, mediano y largo plazo. Cada equipo genera
                  un mecanismo para alinear sus indicadores con otros equipos y
                  tribu. Cada equipo utilizará el planner y roadmap para
                  documentar y medir los avances de los objetivos a corto,
                  mediano y largo plazo.
                </span>
              </p>
            </div>
            <div className="margen-pilares">
              <p>
                <img src={imgAgileWay} alt="" />
              </p>
              <p style={{ width: "228px" }}>
                <span className="nombre-pilar">
                  Agile Way of Working (WoW):
                </span>
              </p>
              <p className="text-justify descripcion-pilar">
                <span>
                  Definir los roles de forma clara para cada uno de los miembros
                  del equipo, para asumir sus responsabilidades individuales y
                  en equipo. Realizamos sesiones para planear acciones de
                  acuerdo a nuestro roadmap. Utilizamos las herramientas
                  disponibles para agilizar la entrega de trabajo y mejorar la
                  visibilidad de entrega de proyectos. Buscamos
                  retroalimentación de la figura de los coaches para obtener
                  retroalimentación de nuestros procesos, herramientas y
                  actividades.
                </span>
              </p>
            </div>
            <div className="margen-pilares">
              <p>
                <img src={imgAssociateCentricity} alt="" />
              </p>
              <p>
                <span className="nombre-pilar">Associate Centricity (AC):</span>
              </p>
              <p className="text-justify descripcion-pilar">
                <span>
                  Ejercemos autogestión, eficiencia, dinamismo, comunicación,
                  confianza, solución, priorización y mejora continua.
                  Agregaremos en las reuniones un “Check de Capacidades” en el
                  que los asociados puedan alzar la mano si se sienten
                  rebasados. Llevaremos a cabo reuniones de café para mejorar la
                  comunicación y la convivencia, así como conocer a todo el
                  equipo.
                </span>
              </p>
            </div>
          </div>
          <Contactanos></Contactanos>
        </div>
      </div>
      <FootPagina></FootPagina>
    </div>
  );
};
