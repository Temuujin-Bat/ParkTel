// Components
import { RootState } from "..";

const getUserDetails = (state: RootState) => state.authReducer.userDetails;

export { getUserDetails };
