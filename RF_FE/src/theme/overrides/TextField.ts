export default function Textfield() {
  return {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#2dc98a ",
              borderRadius: "5px",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#78e2b8",
            },
            "& .MuiInputBase-input::placeholder": {
              fontSize: ".8em",
              fontWeight: "bold",
            },
          },
        },
      },
    },
  };
}
