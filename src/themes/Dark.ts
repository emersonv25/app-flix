import { createTheme } from "@mui/material";
import { pink, purple, grey, red } from "@mui/material/colors";


export const DarkTheme = createTheme({
   palette: {
      mode: 'dark',
      primary: {
         main: "#ED1C24",
         dark: red[800],
         light: red[400],
         contrastText: '#FFFFFF',
      },
      secondary: {
         main: purple[500],
         dark: purple[400],
         light: purple[300],
         contrastText: '#FFFFFF',
      },
      background: {
         paper: '#000000',
         default: '#212121'
      },   
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
      }
   }
});