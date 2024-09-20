import eliminarProveedor from "../../assets/img/modal/eliminar-proveedor.svg";
export interface AliminarModalProps {
  handleShowModalProveedoresEliminar: () => void;
  nombre: string;
}
export const ModalEliminar = ({
  handleShowModalProveedoresEliminar,
  nombre,
}: AliminarModalProps) => {
  return (
    <div>
      <div className="modal modal-bg">
        <div className="modal-dialog ">
          <div
            className="modal-content container-sm"
            style={{ alignSelf: "stretch" }}
          >
            <div className="modal-body ">
              <div className="row">
                <div className="col-12 centrar-elemento padd-abajo-sm">
                  <img src={eliminarProveedor} alt="Eliminar-alert" />
                </div>
                <div className="col-12 padd-abajo-sm">
                  <h4 className="text-center negritas ">
                    ¿Estas seguro de eliminar el {nombre} seleccionado?
                  </h4>
                </div>
                <div className="col-12 centrar-elemento">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    style={{ paddingBottom: "5px" }}
                    onClick={() => handleShowModalProveedoresEliminar()}
                  >
                    Aceptar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
