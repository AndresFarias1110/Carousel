import { useRef, useState } from "react";

import iconDelete from "../../../../assets/icons/icon_delete.svg";
import iconSearch from "../../../../assets/icons/icon_search.svg";
import { chipOptionsUnidades } from "../../../../const";
import { useOnClickOutside } from "../../../../hooks";
import { existChipsSearch } from "../../../../utils";

export interface BuscadorDemoComponentProps {
  chips: any;
  setChips: any;
  searchValue: string;
  setSearchValue: any;
  handleBuscador: () => void;
}

const BuscadorDemoComponent = ({
  chips,
  setChips,
  searchValue,
  setSearchValue,
  handleBuscador,
}: BuscadorDemoComponentProps) => {
  const [opciones, setOpciones] = useState(false);
  const opcionesElement = useRef(null);

  const handleDeleteChip = (key: string, val: string) => {
    setChips((prev: any) => {
      let newValor = {
        ...prev,
        [key]: prev[key].filter((value: string) => value !== val),
      };
      return newValor;
    });
  };

  const handleKeypress = (e: any) => {
    if (e.code === "Enter" && searchValue) {
      let [propiedad, valor] = searchValue.split(":");
      let words = propiedad.split(" ");

      // Comprueba si la propiedad tiene mas de dos palabras para unirlas
      if (words.length > 1) {
        propiedad = "";
        words.forEach((word, idx) => {
          if (idx === 0) propiedad += word;
          else
            propiedad +=
              word.charAt(0).toUpperCase() + word.substring(1, word.length);
        });
      }

      // comprueba si existe algun valor en la propiedad
      if (valor) {
        setChips((prev: any) => ({
          ...prev,
          [propiedad]: prev.hasOwnProperty(propiedad)
            ? [...prev[propiedad], valor.trim()]
            : [valor.trim()],
        }));
      }
      setSearchValue("");
    }
  };

  const handleSearchValue = (e: any) => {
    setSearchValue(e.target.value);
  };

  const handleParametroBuscador = (valor: string) => {
    setSearchValue(`${valor}:`);
    setOpciones(!opciones);
  };

  const handleClickOutsideFn = () => setOpciones(!opciones);
  useOnClickOutside(opcionesElement, handleClickOutsideFn);

  return (
    <div className="row chips justify-content-center mb-4">
      <div className="col-md-8">
        <div className="row py-0 px-1 border-search flex-wrap">
          {Object.entries(chips).map(([key, value]: any, i) =>
            value.map((val: any, idx: number) => (
              <div className="col-auto" key={idx}>
                <div className="chip d-inline-block">
                  <span className="me-2">
                    {chipOptionsUnidades[i]}: {val}{" "}
                  </span>
                  <img
                    src={iconDelete}
                    alt="icon_delete"
                    onClick={() => handleDeleteChip(key, val)}
                  />
                </div>
              </div>
            )),
          )}
          <div className="col form-inputs">
            <input
              type="text"
              placeholder={
                existChipsSearch(chips) ? "Seguir buscando..." : "Buscar..."
              }
              style={{ border: "none", outline: 0, margin: "5px 0" }}
              value={searchValue}
              onClick={() => setOpciones(true)}
              onKeyPress={handleKeypress}
              onChange={(e) => handleSearchValue(e)}
            />
            <div>
              <img
                src={iconSearch}
                alt="icon_search"
                onClick={handleBuscador}
              />
            </div>
          </div>
        </div>
        <div className="position-relative zIndex-top">
          <div className="position-absolute chips-container w-100">
            {opciones && (
              <div ref={opcionesElement} className="options-contrato">
                {chipOptionsUnidades.map((chipOption, idx) => (
                  <span
                    key={idx}
                    className="chip d-inline-block"
                    onClick={() => handleParametroBuscador(chipOption)}
                  >
                    {chipOption}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuscadorDemoComponent;
