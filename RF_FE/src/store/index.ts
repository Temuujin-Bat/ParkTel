// Third party
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

// Components
import authReducer from "./auth/slice";
import userSpaceListReducer from "./spaceList/slice";

const store = configureStore({
  reducer: {
    authReducer,
    userSpaceListReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export { store, persistor };
