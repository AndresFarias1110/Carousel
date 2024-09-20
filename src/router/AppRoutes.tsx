import { useEffect } from "react";
import {
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";

import { Layout } from "../components/Layout/Layout";
import customHistory from "../helpers/history";
import { useAuthStore } from "../hooks/useAuthStore";
import {
  Dashboard,
  DemoPage,
  ProductoSupplyChain,
  Inbound,
  DcFc,
  Transportes,
  Pagina404,
} from "../pages/";
import { AdminProveedores } from "../pages/Configuracion/proveedores/adminProveedores";
import { AdminUsuarios } from "../pages/Configuracion/usuarios/adminUsuarios";
import NoAutorizado from "../pages/Error/NoAutorizado";

const AppRoutes = () => {
  const { checkAuthToken, status } = useAuthStore();
  useEffect(() => {
    checkAuthToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (status === "checking") {
    return <></>;
  }
  return (
    <>
      <HistoryRouter history={customHistory}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ProductoSupplyChain />} />
            <Route path="dashboards" element={<Dashboard />} />
            <Route path="modulo-demo" element={<DemoPage />} />
            <Route
              path="producto-supply-chain"
              element={<ProductoSupplyChain />}
            />
            <Route path="inbound" element={<Inbound />} />
            <Route path="dc-fc" element={<DcFc />} />
            <Route path="transportes" element={<Transportes />} />
            <Route
              path="configuracion/proveedores"
              element={<AdminProveedores />}
            />
            <Route path="configuracion/usuarios" element={<AdminUsuarios />} />
          </Route>
          <Route path="/unauthorized" element={<NoAutorizado />} />
          <Route path="*" element={<Pagina404 />} />
        </Routes>
      </HistoryRouter>
    </>
  );
};

export default AppRoutes;
