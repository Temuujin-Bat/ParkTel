import { PayloadAction } from "@reduxjs/toolkit";
import { IRootState } from "./types";

const reducers = {
  setUserDetails: (
    state: IRootState,
    action: PayloadAction<IRootState["userDetails"]>
  ) => {
    state.userDetails = action.payload;
  },
};

export { reducers };
