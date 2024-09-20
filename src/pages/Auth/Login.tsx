import "./Login.css";
const Login = () => {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL_SSO;
  const ROUTE_SSO = `${BACKEND_URL}/oauth2/authorization/walmart-sso`;
  return (
    <div className="container-fluid">
      <div className="row vh-100">
        <div className="col col-padding">
          <div className="left"></div>
        </div>
        <div className="col align-self-center text-center">
          <h2 className="login__title mb-5">Optimus Portal</h2>
          <p className="login__description m-0">Inicio de sesión</p>
          <span className="text-grey">
            Utiliza tu usuario Walmart para ingresar
          </span>
          <br />
          <a href={ROUTE_SSO}>
            <button type="button" className="btn btn-primary btn__login mt-4">
              Iniciar sesión con SSO
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Login;
