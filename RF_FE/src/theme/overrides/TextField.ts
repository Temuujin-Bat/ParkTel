export default function Textfield() {
  return {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#8aa4b3 ",
              borderRadius: "4px",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#22a270",
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
