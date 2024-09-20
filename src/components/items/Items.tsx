import "./Items.css";
export const Items = () => {
  return (
    <div>
      <div className="row justify-content-center grid gap-3">
        <div className="col g-col-6 sombra texto">
          <div className="row justify-content-center centrar-elemento cajas-items padd-cajas imagen-barco">
            <div className="col-12 centrar-elemento pt-4 padd-top">
              <p className="negritas texto-caja">Inbound</p>
            </div>
            <div className="col-12 centrar-elemento">
              <p className="text-center ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna
              </p>
            </div>
          </div>
        </div>
        <div className="col g-col-6 sombra texto">
          <div className="row justify-content-center cajas-items centrar-elemento padd-cajas imagen-casa">
            <div className="col-12 centrar-elemento padd-top">
              <p className="negritas texto-caja">DC and FC</p>
            </div>
            <div className="col-12 centrar-elemento">
              <p className="text-center ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                eiusmod tempor incididunt ut labore et dolore magna
              </p>
            </div>
          </div>
        </div>
        <div className="col g-col-6 sombra cajas-items texto  ">
          <div className="row justify-content-center centrar-elemento imagen-camion padd-cajas centrar-elemento">
            <div className="col-12 centrar-elemento pt-4 padd-top">
              <p className="negritas texto-caja ">Transportes</p>
            </div>
            <div className="col-12 centrar-elemento">
              <p className="text-center ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
