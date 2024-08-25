// Third party
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// Components

import { authActions } from "../store/auth/slice";
import { persistor } from "../store";

export const useLogout = (handleClose: () => void) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    await persistor.purge();
    sessionStorage.clear();
    localStorage.clear();
    dispatch(authActions.resetState());
    handleClose();
    navigate("/");
  };

  return { logoutHandler };
};
