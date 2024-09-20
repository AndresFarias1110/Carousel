import { useState } from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import { Spinner } from "./components/Spinner/spinner";
import AppRoutes from "./router/AppRoutes";
import { LoaderOptimus } from "./service/loaderService";
import { store } from "./store";

function App() {
  const [showLoader, setShowLoader] = useState<boolean>(false);
  LoaderOptimus.loader$.subscribe({
    next: (objLoader: any) => setShowLoader(objLoader.loader),
  });
  return (
    <Provider store={store}>
      <AppRoutes />
      <ToastContainer />
      {showLoader && <Spinner />}
    </Provider>
  );
}

export default App;
