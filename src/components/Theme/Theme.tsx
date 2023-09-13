import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2C2C54',
      light: '#3D3F72',
    },
    success: {
      main: '#57CB82',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {},
});

export default theme;