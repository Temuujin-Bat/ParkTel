// Third party
import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { PERSIST_KEYS, STORE_SLICES } from "../../utils/enums";
import { reducers } from "./reducers";

const initialState = {
  tokenDetails: {},
  userFirstName: "",
};

export const slice = createSlice({
  name: STORE_SLICES.AUTH,
  initialState,
  reducers,
});

const authActions = slice.actions;

const authPersistConfig = {
  key: PERSIST_KEYS.AUTH,
  storage,
};

export { authActions };
export default persistReducer(authPersistConfig, slice.reducer);
