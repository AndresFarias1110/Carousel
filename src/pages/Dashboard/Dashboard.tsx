import imgContenidoCajas from "../../assets/img/dashboard/contenido-cajas.svg";
import imgPrincipal from "../../assets/img/dashboard/imagen-principal.svg";
import imgFlechaDerecha from "../../assets/img/dashboard/ver-mas.svg";
import "./Dashboard.css";
import { FootPagina } from "../../components/FootPagina/FootPagina";
import { Items } from "../../components/items/Items";

const Dashboard = () => {
  const opciones = [
    {
      titulo: "Título",
      texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      titulo: "Título",
      texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      titulo: "Título",
      texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      titulo: "Título",
      texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      titulo: "Título",
      texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      titulo: "Título",
      texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className="fondo-principal">
      <div className="container-md pt-5">
        <div className="row">
          <div className="col">
            <div className="col-12">
              <h1 className="titulo-principal">Dashboards</h1>
            </div>
            <div className="col-12">
              <p className="texto-principal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                pulvinar convallis vulputate. Phasellus vel lobortis lectus, eu
                egestas metus. Nunc venenatis ex magna, id cursus eros euismod
                condimentum.
              </p>
            </div>
          </div>
          <div className="col d-flex justify-content-center">
            <img src={imgPrincipal} alt="" className="imagen-principal" />
          </div>
        </div>
      </div>
      <div>
        <div className="container-md pt-5">
          <Items></Items>
        </div>
      </div>
      <div className="container-md text-center pt-5">
        <div className="row">
          {opciones.map((item) => (
            <div className="col-lg-4 col-md-12 ">
              <div className="caja-lg-secundaria  p-4">
                <img
                  src={imgContenidoCajas}
                  alt=""
                  className="imagen-principal"
                />
              </div>
              <div className="padd-cajas">
                <h5>{item.titulo}</h5>
                <p>{item.texto}</p>
                <div className="row justify-content-center">
                  <div className="col-auto negritas texto-resaltado-dark">
                    Ver más
                  </div>
                  <div className="col-auto">
                    <img
                      src={imgFlechaDerecha}
                      alt=""
                      className="imagen-principal"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <FootPagina></FootPagina>
      </div>
    </div>
  );
};

export default Dashboard;
