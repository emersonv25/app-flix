import { createTheme } from "@mui/material";
import { pink, purple } from "@mui/material/colors";


export const LightTheme = createTheme({
    palette: {
        mode: 'light',
        primary:{
          main: pink['A200'],
          dark: pink[500],
          light: pink['A100'],
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
        }
      },
      components: {
        MuiCard:{
           styleOverrides:{
              root:{
                 backgroundColor:'#f7f6f3'
              }
           }
        }
     }
});