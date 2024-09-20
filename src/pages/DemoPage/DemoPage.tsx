import { useState } from "react";

import iconClean from "../../assets/icons/icon_clean.svg";
import iconHelp from "../../assets/icons/icon_help.svg";
import iconLoad from "../../assets/icons/icon_load.svg";
import iconPlus from "../../assets/icons/icon_plus.svg";
import iconRecordatorio from "../../assets/icons/icon_recordatorio.svg";
import { CustomTooltip } from "../../components/CustomTooltip/CustomTooltip";
import Progress from "../../components/Progress";
import { tiposAcciones } from "../../const";

import BuscadorDemoComponent from "./components/BuscardorDemo/BuscadorDemoComponent";
import DescargarReportesDemoComponent from "./components/DescargarReportesUnidades/DescargarReportesDemoComponent";
import TableDesignDemo from "./components/TableDesignDemo";

import "./DemoPage.css";

const initialValuesChips = {
  placas: [],
  tipoUnidad: [],
  categoria: [],
  capacidad: [],
  arrendador: [],
  carrier: [],
  estatusComercial: [],
  estatusOperativo: [],
  numeroEconomico: [],
  marca: [],
  modelo: [],
  claseNombre: [],
  tipoFlota: [],
  asignacionOperativa: [],
  folioContrato: [],
  tipoContrato: [],
  asignacionFinanciera: [],
};

const DemoPage = () => {
  const [chips, setChips] = useState<any>(initialValuesChips);
  const [searchValue, setSearchValue] = useState<string>("");

  const handleBuscador = () => {};

  return (
    <>
      {false && <Progress />}
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="d-flex gap-1">
              <img src={iconRecordatorio} alt="icon_clean" />
              <strong className="mt-4px"> Recordatorio</strong>
            </div>
            <p className="text-grey m-0">
              Tu perfil tiene permiso de
              <strong className="text-uppercase"> Edición </strong>y
              <strong className="text-uppercase"> Consulta</strong>.
            </p>
          </div>
        </div>
        <div className="row justify-content-end">
          <div className="col text-end">
            <button type="button" className="btn btn-primary btn-add-unidad">
              <img src={iconPlus} alt="icon_clean" />
              <span className="mx-2">Agregar Unidad</span>
            </button>
          </div>
        </div>
        <div className="row justify-content-start">
          <div className="col-auto link mt-2 margin">
            <img src={iconLoad} alt="icon-load" />
            <span className="text-decoration-underline mx-2">
              Cargar archivo masivo XLSX
            </span>
          </div>
        </div>
        <DescargarReportesDemoComponent />
        <hr />
        <BuscadorDemoComponent
          chips={chips}
          setChips={setChips}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          handleBuscador={handleBuscador}
        />
        <div className="row justify-content-between">
          <div className="col-2">
            <div className="dropdown">
              <button
                className="btn btn-primary btn-acciones dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                // disabled={!(unidadesSeleccionadas.length > 0)}
              >
                Acciones
              </button>
              <ul className="dropdown-menu">
                {tiposAcciones.map((accion, idx) => (
                  <li className="mb-2 cursor-pointer" key={idx}>
                    <p className="dropdown-item text-grey">{accion}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-auto align-self-center text-end">
            <span className="cursor-pointer">
              <img src={iconClean} alt="icon_clean" />
              <span className="text-grey fw-bold mx-1">Limpiar</span>
            </span>
            <CustomTooltip title="Solo borras tus búsquedas" placement="right">
              <img src={iconHelp} alt="icon_help" className="mb-4" />
            </CustomTooltip>
          </div>
        </div>
        <div className="row mt-2">
          {false ? (
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "50vh" }}
            ></div>
          ) : (
            <div className="col">
              <TableDesignDemo />
              <p className="text-end text-grey">10 / 10 Resultados</p>
            </div>
          )}
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <button type="button" className="btn btn-primary btn-ver">
              Ver más
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoPage;
