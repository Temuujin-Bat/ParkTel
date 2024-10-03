// Third party
import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";

// Components
import { PERSIST_KEYS, STORE_SLICES } from "../../utils/enums";
import { reducers } from "./reducers";
import { IRootState } from "./type";

const initialState: IRootState = {
  userSpaceList: [],
  userSingleSpaceList: {},
  allSpaceList: [],
};

export const slice = createSlice({
  name: STORE_SLICES.SPACELIST,
  initialState,
  reducers,
});

const spaceList = slice.actions;

const spaceListPersistConfig = {
  key: PERSIST_KEYS.SPACELIST,
  storage: storageSession,
};

export { spaceList };
export default persistReducer(spaceListPersistConfig, slice.reducer);
