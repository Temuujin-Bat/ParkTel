// Third party
import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Components
import { PERSIST_KEYS, STORE_SLICES } from "../../utils/enums";
import { reducers } from "./reducers";
import { IRootState } from "./type";

const initialState: IRootState = {
  userSpaceList: [],
  userSingleSpaceList: {},
};

export const slice = createSlice({
  name: STORE_SLICES.SPACELIST,
  initialState,
  reducers,
});

const spaceList = slice.actions;

const spaceListPersistConfig = {
  key: PERSIST_KEYS.SPACELIST,
  storage,
};

export { spaceList };
export default persistReducer(spaceListPersistConfig, slice.reducer);
