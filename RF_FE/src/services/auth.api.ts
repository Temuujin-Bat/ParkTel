// Third party
import axios from "axios";

// Components
import { TLoginRequest, TRegisterRequest } from "../types/requests";
import { encryptData } from "../utils/crypto_util";

const RegisterController = async (registerData: TRegisterRequest) => {
  try {
    const response = await axios.post(
      "http://localhost:1010/api/v1/auth/register",
      registerData,
      { withCredentials: true }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

const LoginController = async (loginData: TLoginRequest) => {
  try {
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
  } catch (error) {
    throw error;
  }
};

const ForgotPasswordController = async (email: string) => {
  try {
    const response = await axios.post(
      "http://localhost:1010/api/v1/auth/forgot-password",
      { email },
      { withCredentials: true }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

const ResetPasswordController = async ({
  token,
  password,
}: {
  token: string;
  password: string;
}) => {
  try {
    const response = await axios.post(
      `http://localhost:1010/api/v1/auth/reset-password/${token}`,
      { password },
      { withCredentials: true }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

const ValidateResetToken = async (token: string) => {
  try {
    await axios.post(
      `http://localhost:1010/api/v1/auth/reset-password/${token}`,
      {},
      { withCredentials: true }
    );
  } catch (error) {
    throw error;
  }
};

export {
  RegisterController,
  LoginController,
  ForgotPasswordController,
  ResetPasswordController,
  ValidateResetToken,
};
