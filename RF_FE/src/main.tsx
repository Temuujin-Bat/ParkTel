import React from "react";
import ReactDOM from "react-dom/client";

// Third Party
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// Components
import App from "./App.tsx";

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
          <PersistGate loading={<div>hello</div>} persistor={persistor}>
            <App />
          </PersistGate>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
