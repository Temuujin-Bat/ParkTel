// Third party
import axios from "axios";

// Components
import {
  TChangePassword,
  TLoginRequest,
  TRegisterRequest,
} from "../types/requests";
import { encryptData } from "../utils/crypto_util";

const RegisterController = async (registerData: TRegisterRequest) => {
  const response = await axios.post(
    "http://localhost:1010/api/v1/auth/register",
    registerData,
    { withCredentials: true }
  );

  return response.data;
};

const LoginController = async (loginData: TLoginRequest) => {
  const email = loginData?.email.toLocaleLowerCase();
  const password = loginData?.password;

  const response = await axios.post(
    "http://localhost:1010/api/v1/auth/login",
    { email, password },
    { withCredentials: true }
  );

  if (response) {
    encryptData("token", response.data.token, "sessionStorage");
  }

  return response.data;
};

const ForgotPasswordController = async (email: string) => {
  const response = await axios.post(
    "http://localhost:1010/api/v1/auth/forgot-password",
    { email },
    { withCredentials: true }
  );

  return response.data;
};

const ResetPasswordController = async ({
  token,
  password,
}: {
  token: string;
  password: string;
}) => {
  const response = await axios.post(
    `http://localhost:1010/api/v1/auth/reset-password/${token}`,
    { password },
    { withCredentials: true }
  );

  return response.data;
};

const ValidateResetTokenController = async (token: string) => {
  await axios.post(
    `http://localhost:1010/api/v1/auth/validate-reset-token/${token}`,
    { withCredentials: true }
  );
};

const ChangePasswordController = async (changeData: TChangePassword) => {
  await axios.post(
    "http://localhost:1010/api/v1/auth/change-password",
    {
      oldPassword: changeData.oldPassword,
      newPassword: changeData.newPassword,
    },
    { withCredentials: true }
  );
};

export {
  RegisterController,
  LoginController,
  ForgotPasswordController,
  ResetPasswordController,
  ValidateResetTokenController,
  ChangePasswordController,
};
