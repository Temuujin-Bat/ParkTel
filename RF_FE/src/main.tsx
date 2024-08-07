import React from "react";
import ReactDOM from "react-dom/client";
import { Suspense } from "react";

// Third Party
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// Components
import App from "./App.tsx";
import LoadingMUI from "./components/LoadingMUI.tsx";

// Redux-toolkit
import { store, persistor } from "./store/index.ts";

// Style
import "./assets/css/common.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <PersistGate loading={<LoadingMUI />} persistor={persistor}>
            <Suspense fallback={<LoadingMUI />}>
              <App />
            </Suspense>
          </PersistGate>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
