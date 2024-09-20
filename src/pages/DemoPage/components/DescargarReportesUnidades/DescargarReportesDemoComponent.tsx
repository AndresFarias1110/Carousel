import iconArrowDown from "../../../../assets/icons/icon_arrow_down.svg";
import iconDownload from "../../../../assets/icons/icon_download.svg";
import { tiposReportes } from "../../../../const";

const DescargarReportesDemoComponent = () => {
  return (
    <div className="row justify-content-end">
      <div className="col-auto text-end">
        <div className="dropdown position-relative">
          <button
            type="button"
            className="btn border-btn-reportes dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            <img src={iconDownload} alt="icon_clean" />
            <span className="text-grey fw-bold ms-2 me-3  ">
              Descargar Reportes
            </span>

            <img src={iconArrowDown} alt="icon_arrow_down" />
          </button>
          <ul className="dropdown-menu">
            {tiposReportes.map((reporte, idx) => (
              <li className="mb-2 cursor-pointer" key={idx}>
                <p className="dropdown-item text-grey m-0">{reporte}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DescargarReportesDemoComponent;
