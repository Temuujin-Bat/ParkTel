import { SxProps, Theme } from "@mui/material";

export type TMobileField = {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
  sx?: SxProps<Theme>;
};

export type TErrorMessagesField = {
  isError: boolean;
  isMobileError: boolean;
  isPasswordMatchError: boolean;
  isPasswordError: boolean;
};

export type TPasswordField = {
  name: string;
  placeholder: string;
  value: string;
  showPassword: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onToggleShowPassword: () => void;
  error: boolean;
};
