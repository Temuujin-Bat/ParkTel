// Third party
import { PayloadAction } from "@reduxjs/toolkit";

// Components
import { IRootState, TUserSpaceList } from "./type";

const reducers = {
  setUserSpaceList: (
    state: IRootState,
    action: PayloadAction<IRootState["userSpaceList"]>
  ) => {
    state.userSpaceList = action.payload;
  },
  setUserSingleSpaceList: (
    state: IRootState,
    action: PayloadAction<Partial<TUserSpaceList>>
  ) => {
    state.userSingleSpaceList = action.payload;
  },
  setAllSpaceList: (
    state: IRootState,
    action: PayloadAction<IRootState["allSpaceList"]>
  ) => {
    state.allSpaceList = action.payload;
  },
};

export { reducers };
