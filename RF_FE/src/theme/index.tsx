import { FC } from "react";

// MUI
import {
  createTheme,
  CssBaseline,
  PaletteMode,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";

// Components
import { TThemeConfig } from "./type";
import typography from "./typography";
import ComponentsOverrides from "./overrides";

const ThemeConfig: FC<TThemeConfig> = ({ children }) => {
  const themeOptions = {
    palette: { mode: "light" as PaletteMode },
    typography,
  };

  const theme = createTheme(themeOptions);

  theme.components = ComponentsOverrides();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeConfig;
