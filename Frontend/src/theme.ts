import { DefaultTheme } from 'styled-components';
import { createTheme, Theme } from '@mui/material/styles';

export const theme: DefaultTheme = {
  colors: {
    indigo4: '#748ffc',
    indigo5: '#5c7cfa',
    indigo6: '#4c6ef5',
    indigo7: '#4263eb',
    indigo8: '#3b5bdb',
  },
};

export const muiTheme: Theme = createTheme({
  colors: {
    indigo4: '#748ffc',
    indigo5: '#5c7cfa',
    indigo6: '#4c6ef5',
    indigo7: '#4263eb',
    indigo8: '#3b5bdb',
  },
});
