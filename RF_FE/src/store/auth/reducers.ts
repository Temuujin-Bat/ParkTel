// Third party
import { PayloadAction } from "@reduxjs/toolkit";

// Components
import { IRootState } from "./types";

const reducers = {
  setUserDetails: (
    state: IRootState,
    action: PayloadAction<Partial<IRootState["userDetails"]>>
  ) => {
    state.userDetails = {
      ...state.userDetails,
      ...action.payload,
    };
  },
  resetState: (state: IRootState) => {
    state.userDetails = {
      userID: "",
      email: "",
      firstName: "",
      lastName: "",
      mobile: "",
      role: "",
    };
  },
};

export { reducers };
