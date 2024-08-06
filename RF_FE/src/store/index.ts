import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  PERSIST,
  PURGE,
  REGISTER,
  PAUSE,
  REHYDRATE,
} from "redux-persist";

const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
