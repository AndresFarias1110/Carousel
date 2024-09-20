import { useNavigate, useLocation } from "react-router-dom";

import imagen404 from "../../assets/img/imagen404.png";

import "./Error.css";

const Pagina404 = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="row m-0 justify-content-center">
      <div className="col-12 text-center">
        <img src={imagen404} className="img-fluid" alt="imagen_404" />
      </div>
      <div className="col-4 text-center">
        <p className="fs-2 fw-bold">Página no encontrada</p>
        <p className="text-grey mb-4">
          Lamentamos el incoveniente, de momento el servicio no se encuentra
          disponible, favor de intentarlo más tarde.
        </p>
        <div className="d-flex gap-3 justify-content-center">
          <button
            className="btn btn-outline-primary btn-regresar fw-bold"
            onClick={() => navigate(-1)}
          >
            Regresar
          </button>
          <button
            className="btn btn-primary btn-pagina-principal fw-bold"
            onClick={() =>
              navigate("/", { replace: true, state: { from: location } })
            }
          >
            Página Principal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagina404;
