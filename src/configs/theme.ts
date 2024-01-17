import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#201E1C",
    },
    text: {
      primary: "rgba(32,30,28,0.8)",
      secondary: "#201E1C",
    },
    error: {
      main: "#FF4141",
    },
    background: {
      default: "#201E1C",
      paper: "#F0EDE5",
    },
  },
  typography: {
    fontFamily: "Switzer",
    allVariants: {
      letterSpacing: "0.32px",
    },
  },
  spacing: [8, 16, 32],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontWeight: 300,
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        input: {
          fontWeight: 300,
        },
      },
    },
  },
});

export default theme;
