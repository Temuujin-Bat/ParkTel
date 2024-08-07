// MUI
import { TextField } from "@mui/material";

// Components
import { TMobileField } from "./type";

export default function MobileField({
  name,
  placeholder,
  value,
  onChange,
  error,
  sx,
}: TMobileField) {
  return (
    <TextField
      name={name}
      type="tel"
      placeholder={placeholder}
      value={value}
      required
      onChange={onChange}
      error={error}
      sx={{
        ...sx,
      }}
    />
  );
}
