import { RootState } from "../index";

const getUserDetails = (state: RootState) => state.authReducer.userDetails;

export { getUserDetails };
