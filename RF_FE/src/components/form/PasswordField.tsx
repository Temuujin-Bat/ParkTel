// MUI
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

// Components
import { TPasswordField } from "./type";

export default function PasswordField({
  name,
  placeholder,
  value,
  showPassword,
  onChange,
  onToggleShowPassword,
  error,
  sx,
}: TPasswordField) {
  return (
    <TextField
      name={name}
      type={showPassword ? "text" : "password"}
      placeholder={placeholder}
      required
      value={value}
      error={error}
      onChange={onChange}
      sx={{ width: "50%", ...sx }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={onToggleShowPassword} edge="end" sx={{ p: 2 }}>
              {showPassword ? (
                <VisibilityOff sx={{ fontSize: ".8em" }} />
              ) : (
                <Visibility sx={{ fontSize: ".8em" }} />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
