import { createTheme } from "@mui/material";
import { pink, purple, grey } from "@mui/material/colors";


export const DarkTheme = createTheme({
   palette: {
      mode: 'dark',
      primary: {
         main: pink['A400'],
         dark: pink[800],
         light: pink[300],
         contrastText: '#FFFFFF',
      },
      secondary: {
         main: purple[500],
         dark: purple[400],
         light: purple[300],
         contrastText: '#FFFFFF',
      },
      background: {
         paper: '#1F2331',
         default: '#090C13'
      }
      
   },
   components: {
      MuiTextField:{
         styleOverrides:{
            root:{
               "& label": {
                  color: "white"
                },
               '& label.Mui-focused': {
                  color: 'white',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white',
                  },
                  '&:hover fieldset': {
                    borderColor: grey[500],
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: pink[800],
                  }
               }
            }
         }
      },
      MuiCard:{
         styleOverrides:{
            root:{
               backgroundColor:'#090C13'
            }
         }
      }
   }
});