// Third party
import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";

// Components
import { PERSIST_KEYS, STORE_SLICES } from "../../utils/enums";
import { reducers } from "./reducers";
import { IRootState } from "./types";

const initialState: IRootState = {
  userDetails: {
    userID: "",
    email: "",
    firstName: "",
    lastName: "",
    mobile: "",
    role: "",
  },
};

export const slice = createSlice({
  name: STORE_SLICES.AUTH,
  initialState,
  reducers,
});

const authActions = slice.actions;

const authPersistConfig = {
  key: PERSIST_KEYS.AUTH,
  storage: storageSession,
};

export { authActions };
export default persistReducer(authPersistConfig, slice.reducer);
