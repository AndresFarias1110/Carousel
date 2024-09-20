import { LegacyRef, forwardRef, useState } from "react";
import ReactDatePicker from "react-datepicker";

import icon_calendar from "../../../../assets/icons/icon_calendar.svg";
import icon_clean from "../../../../assets/icons/icon_clean.svg";
import iconSearch from "../../../../assets/icons/icon_search.svg";
import { CustomHeader } from "../../../../components/CustomHeader/CustomHeader";
export const BuscadorProveedores = () => {
  const [searchDate, setsearchDate] = useState<any>(null);
  //*Componentes customizados
  const CustomInputDate = forwardRef(
    (
      { value, onClick, name }: any,
      ref: LegacyRef<HTMLButtonElement> | undefined,
    ) => {
      return (
        <div className="row">
          <div className="col">
            <div className="d-flex form-inputs pt-0">
              <button
                type="button"
                className="custom-input  text-grey pt-2 "
                onClick={onClick}
                ref={ref}
                // disabled={!!idInventario && !isEditingInventario}
              >
                <label className={value ? "fw-bold text-gray" : "text-gray"}>
                  {value ? value : "Fecha"}
                </label>
              </button>
              {!value && (
                <div onClick={onClick} className="mr-5px">
                  <img src={icon_calendar} alt="icon_calendar" />
                </div>
              )}
              {value && (
                <div
                  className="mr-5px"
                  onClick={() => {
                    setsearchDate(null);
                  }}
                >
                  <img src={icon_clean} alt="icon_delete" />
                </div>
              )}
            </div>
          </div>
        </div>
      );
    },
  );

  return (
    <div className="row border-top-shadow">
      <div className="col form-inputs">
        <input
          type="text"
          placeholder="Buscar..."
          style={{ border: "none", outline: 0, margin: "5px 0" }}
        />
        <div>
          <img src={iconSearch} alt="icon_search" />
        </div>
      </div>
      <div className="col">
        <div className="d-flex ">
          <ReactDatePicker
            renderCustomHeader={({
              date,
              changeYear,
              changeMonth,
              decreaseMonth,
              increaseMonth,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled,
            }) => (
              <CustomHeader
                date={date}
                changeYear={changeYear}
                changeMonth={changeMonth}
                decreaseMonth={decreaseMonth}
                increaseMonth={increaseMonth}
                prevMonthButtonDisabled={prevMonthButtonDisabled}
                nextMonthButtonDisabled={nextMonthButtonDisabled}
              />
            )}
            locale="es"
            className="datepicker text-grey"
            selectsRange={false}
            dateFormat="dd/MM/yyyy"
            selected={searchDate}
            onChange={(update) => {
              if (update) {
                setsearchDate(new Date(update));
              }
            }}
            placeholderText="Fecha"
            isClearable={false}
            customInput={<CustomInputDate />}
          />
        </div>
      </div>
      <div className="col form-inputs">
        <input
          type="text"
          placeholder="Ordenar"
          style={{ border: "none", outline: 0, margin: "5px 0" }}
        />
        <div>
          <img src={iconSearch} alt="icon_search" />
        </div>
      </div>
    </div>
  );
};
