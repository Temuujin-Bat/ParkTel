export type TRegisterRequest = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  mobile: string;
};

export type TLoginRequest = {
  email: string;
  password: string;
};

export type TResetPass = {};
