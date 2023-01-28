import { createTheme } from "@mui/material";
import { pink, purple, red } from "@mui/material/colors";


export const LightTheme = createTheme({
    palette: {
        mode: 'light',
        primary:{
          main: "#ED1C24",
          dark: red[800],
          light: red[400],
          contrastText: 'white',
        },
        secondary: {
           main: purple[500],
           dark: purple[400],
           light: purple[300],
           contrastText: 'white',
        },
        background:{
          paper: '#ffffff',
          default: '#f7f6f3'
        },
        action: {
          disabled: 'rgba(255, 255, 255, 0.3)'
        }
      }
});