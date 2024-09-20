import { useNavigate } from "react-router-dom";

const NoAutorizado = () => {
  const navigate = useNavigate();

  const goBack = () => {
    // navigate(-1);
    navigate("/");
  };
  return (
    <section>
      <h1>Unauthorized</h1>
      <br />
      <p>You do not have access to the requested page.</p>
      <div className="flexGrow">
        <button onClick={goBack} style={{ cursor: "pointer" }}>
          Go Back
        </button>
      </div>
    </section>
  );
};

export default NoAutorizado;
