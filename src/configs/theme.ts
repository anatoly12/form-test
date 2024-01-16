import { createTheme } from "@mui/material";

const theme = createTheme({

    palette: {
        primary: {
            main: '#201E1C',
        },
        text: {
            primary: 'rgba(32,30,28,0.8)',
            secondary: '#201E1C'
        },
        divider: '#F0EDE5',
        error: {
            main: "#FF4141"
        }
    },
    typography: {
        fontFamily: 'Switzer',
        allVariants: {
            letterSpacing: '0.32px',
        },
    },
    spacing: [8, 16, 32],
})

export default theme;