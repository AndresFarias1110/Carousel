import { Link, NavLink, useNavigate } from "react-router-dom";

import iconSearch from "../../assets/icons/icon_search_1.svg";
import Logo from "../../assets/img/logo.svg";
import clasificacion1 from "../../assets/img/nav-bar/clasificacion1.svg";
import clasificacion2 from "../../assets/img/nav-bar/clasificacion2.svg";
import clasificacion3 from "../../assets/img/nav-bar/clasificacion3.svg";
import clasificacion45 from "../../assets/img/nav-bar/clasificacion45.svg";
import flecha from "../../assets/img/nav-bar/flecha.svg";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <div className="col-auto my-auto">
            <Link to="/" className="navbar-brand">
              <img src={Logo} className="logo" alt="logo_img" />
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 col d-flex justify-content-end dropdown">
              <li className="nav-item">
                <NavLink
                  to="producto-supply-chain"
                  className={({ isActive }) => {
                    return isActive ? "activado nav-link" : "nav-link";
                  }}
                >
                  Product Omni Supply Chain
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="inbound"
                  className={({ isActive }) => {
                    return isActive ? "activado nav-link" : "nav-link";
                  }}
                >
                  Inbound & Imports
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  to="dc-fc"
                  className={({ isActive }) => {
                    return isActive ? "activado nav-link" : "nav-link";
                  }}
                >
                  Omni DC & FC
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="transportes"
                  className={({ isActive }) => {
                    return isActive ? "activado nav-link" : "nav-link";
                  }}
                >
                  Omni Transportation
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="dashboards"
                  className={({ isActive }) => {
                    return isActive ? "activado nav-link" : "nav-link";
                  }}
                >
                  Dashboards
                </NavLink>
              </li>
              <li className="nav-item">
                <img src={iconSearch} alt="" className="icon-search" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <input type="checkbox" id="btn-menu" />
      <div className="container-menu menu-configuracion">
        <div className="row m-0 justify-content-center">
          <div className="col-11">
            <div className="cont-menu">
              <div className="row">
                <div className="col navIzquierda">
                  <div className="row justify-content-start pb-3">
                    <div className="col-auto">
                      <img
                        src={clasificacion1}
                        alt="profile_img"
                        style={{ width: "27px", height: "27px" }}
                      ></img>
                    </div>
                    <div className="col contenedor-nombre">
                      <h6 className="nombre">CLASIFICACIÓN 1</h6>
                    </div>
                  </div>

                  <div className="cursor-pointer opcion">
                    <div
                      className="row justify-content-between"
                      onClick={() => navigate("/configuracion/usuarios")}
                    >
                      <div className="col-6">Usuarios</div>
                      <div
                        className="col-4 justify-content-end"
                        style={{ display: "flex" }}
                      >
                        <img
                          src={flecha}
                          alt="flecha_img"
                          style={{ width: "17px", height: "17px" }}
                        ></img>
                      </div>
                    </div>
                  </div>
                  <div className="cursor-pointer opcion">
                    <div
                      className="row justify-content-between"
                      onClick={() => navigate("/configuracion/proveedores")}
                    >
                      <div className="col-6">Proveedores</div>
                      <div
                        className="col-4 justify-content-end"
                        style={{ display: "flex" }}
                      >
                        <img
                          src={flecha}
                          alt="flecha_img"
                          style={{ width: "17px", height: "17px" }}
                        ></img>
                      </div>
                    </div>
                  </div>
                  <a href="/modulo-item2">
                    <div className="row justify-content-between">
                      <div className="col-8">Sub-clasificación</div>
                      <div
                        className="col-4 justify-content-end"
                        style={{ display: "flex" }}
                      >
                        <img
                          src={flecha}
                          alt="flecha_img"
                          style={{ width: "17px", height: "17px" }}
                        ></img>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="divider"></div>
                <div className="col navIzquierda">
                  <div className="row justify-content-start pb-3">
                    <div className="col-auto">
                      <img
                        src={clasificacion2}
                        alt="profile_img"
                        style={{ width: "27px", height: "27px" }}
                      ></img>
                    </div>
                    <div className="col contenedor-nombre">
                      <h6 className="nombre">CLASIFICACIÓN 2</h6>
                    </div>
                  </div>

                  <a href="/modulo-item1">
                    <div className="row justify-content-between">
                      <div className="col-8">Sub-clasificación</div>
                      <div
                        className="col-4 justify-content-end"
                        style={{ display: "flex" }}
                      >
                        <img
                          src={flecha}
                          alt="flecha_img"
                          style={{ width: "17px", height: "17px" }}
                        ></img>
                      </div>
                    </div>
                  </a>
                  <a href="/modulo-item2">
                    <div className="row justify-content-between">
                      <div className="col-8">Sub-clasificación</div>
                      <div
                        className="col-4 justify-content-end"
                        style={{ display: "flex" }}
                      >
                        <img
                          src={flecha}
                          alt="flecha_img"
                          style={{ width: "17px", height: "17px" }}
                        ></img>
                      </div>
                    </div>
                  </a>
                  <a href="/modulo-item2">
                    <div className="row justify-content-between">
                      <div className="col-8">Sub-clasificación</div>
                      <div
                        className="col-4 justify-content-end"
                        style={{ display: "flex" }}
                      >
                        <img
                          src={flecha}
                          alt="flecha_img"
                          style={{ width: "17px", height: "17px" }}
                        ></img>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="divider"></div>
                <div className="col navIzquierda">
                  <div className="row justify-content-start pb-3">
                    <div className="col-auto">
                      <img
                        src={clasificacion3}
                        alt="profile_img"
                        style={{ width: "27px", height: "27px" }}
                      ></img>
                    </div>
                    <div className="col contenedor-nombre">
                      <h6 className="nombre">CLASIFICACIÓN 3</h6>
                    </div>
                  </div>

                  <a href="/modulo-item1">
                    <div className="row justify-content-between">
                      <div className="col-8">Sub-clasificación</div>
                      <div
                        className="col-4 justify-content-end"
                        style={{ display: "flex" }}
                      >
                        <img
                          src={flecha}
                          alt="flecha_img"
                          style={{ width: "17px", height: "17px" }}
                        ></img>
                      </div>
                    </div>
                  </a>
                  <a href="/modulo-item2">
                    <div className="row justify-content-between">
                      <div className="col-8">Sub-clasificación</div>
                      <div
                        className="col-4 justify-content-end"
                        style={{ display: "flex" }}
                      >
                        <img
                          src={flecha}
                          alt="flecha_img"
                          style={{ width: "17px", height: "17px" }}
                        ></img>
                      </div>
                    </div>
                  </a>
                  <a href="/modulo-item2">
                    <div className="row justify-content-between">
                      <div className="col-8">Sub-clasificación</div>
                      <div
                        className="col-4 justify-content-end"
                        style={{ display: "flex" }}
                      >
                        <img
                          src={flecha}
                          alt="flecha_img"
                          style={{ width: "17px", height: "17px" }}
                        ></img>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="divider"></div>
                <div className="col navIzquierda">
                  <div className="row justify-content-start pb-3">
                    <div className="col-auto">
                      <img
                        src={clasificacion45}
                        alt="profile_img"
                        style={{ width: "27px", height: "27px" }}
                      ></img>
                    </div>
                    <div className="col contenedor-nombre">
                      <h6 className="nombre">CLASIFICACIÓN 4</h6>
                    </div>
                  </div>

                  <a href="/modulo-item1">
                    <div className="row justify-content-between">
                      <div className="col-8">Sub-clasificación</div>
                      <div
                        className="col-4 justify-content-end"
                        style={{ display: "flex" }}
                      >
                        <img
                          src={flecha}
                          alt="flecha_img"
                          style={{ width: "17px", height: "17px" }}
                        ></img>
                      </div>
                    </div>
                  </a>
                  <a href="/modulo-item2">
                    <div className="row justify-content-between">
                      <div className="col-8">Sub-clasificación</div>
                      <div
                        className="col-4 justify-content-end"
                        style={{ display: "flex" }}
                      >
                        <img
                          src={flecha}
                          alt="flecha_img"
                          style={{ width: "17px", height: "17px" }}
                        ></img>
                      </div>
                    </div>
                  </a>
                  <a href="/modulo-item2">
                    <div className="row justify-content-between">
                      <div className="col-8">Sub-clasificación</div>
                      <div
                        className="col-4 justify-content-end"
                        style={{ display: "flex" }}
                      >
                        <img
                          src={flecha}
                          alt="flecha_img"
                          style={{ width: "17px", height: "17px" }}
                        ></img>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="divider"></div>
                <div className="col navIzquierda">
                  <div className="row justify-content-start pb-3">
                    <div className="col-auto">
                      <img
                        src={clasificacion45}
                        alt="profile_img"
                        style={{ width: "27px", height: "27px" }}
                      ></img>
                    </div>
                    <div className="col contenedor-nombre">
                      <h6 className="nombre">CLASIFICACIÓN 4</h6>
                    </div>
                  </div>

                  <a href="/modulo-item1">
                    <div className="row justify-content-between">
                      <div className="col-8">Sub-clasificación</div>
                      <div
                        className="col-4 justify-content-end"
                        style={{ display: "flex" }}
                      >
                        <img
                          src={flecha}
                          alt="flecha_img"
                          style={{ width: "17px", height: "17px" }}
                        ></img>
                      </div>
                    </div>
                  </a>
                  <a href="/modulo-item2">
                    <div className="row justify-content-between">
                      <div className="col-8">Sub-clasificación</div>
                      <div
                        className="col-4 justify-content-end"
                        style={{ display: "flex" }}
                      >
                        <img
                          src={flecha}
                          alt="flecha_img"
                          style={{ width: "17px", height: "17px" }}
                        ></img>
                      </div>
                    </div>
                  </a>
                  <a href="/modulo-item2">
                    <div className="row justify-content-between">
                      <div className="col-8">Sub-clasificación</div>
                      <div
                        className="col-4 justify-content-end"
                        style={{ display: "flex" }}
                      >
                        <img
                          src={flecha}
                          alt="flecha_img"
                          style={{ width: "17px", height: "17px" }}
                        ></img>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-auto">
                  <label htmlFor="btn-menu" className="icon-equis">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-x-lg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </svg>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
