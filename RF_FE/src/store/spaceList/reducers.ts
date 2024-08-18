// Third party
import { PayloadAction } from "@reduxjs/toolkit";

// Components
import { IRootState } from "./type";

const reducers = {
  setUserSpaceList: (
    state: IRootState,
    action: PayloadAction<IRootState["userSpaceList"]>
  ) => {
    state.userSpaceList = action.payload;
  },
};

export { reducers };
