// Third party
import axios from "axios";

// Components
import {
  TChangePassword,
  TLoginRequest,
  TRegisterRequest,
} from "../types/requests";

const LogoutController = async () => {
  await axios.post(
    "http://localhost:1010/api/v1/auth/logout",
    {},
    {
      withCredentials: true,
    }
  );
};

const RegisterController = async (registerData: TRegisterRequest) => {
  await axios.post("http://localhost:1010/api/v1/auth/register", registerData, {
    withCredentials: true,
  });
};

const LoginController = async (loginData: TLoginRequest) => {
  const email = loginData?.email.toLocaleLowerCase();
  const password = loginData?.password;

  const response = await axios.post(
    "http://localhost:1010/api/v1/auth/login",
    { email, password },
    { withCredentials: true }
  );

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
  LogoutController,
  RegisterController,
  LoginController,
  ForgotPasswordController,
  ResetPasswordController,
  ValidateResetTokenController,
  ChangePasswordController,
};
