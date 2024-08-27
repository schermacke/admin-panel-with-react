import { useState } from 'react';
//import './App.css';
import { createTheme, CssBaseline, Grid, IconButton, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { routesList } from '../src/routes/routes';
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import ResponsiveAppBar from './components/navBar.jsx';


function App() {
  const [themeSelected, setThemeSelected] = useState('dark');

  const darkMode = createTheme({
    palette: {
      mode: 'dark',
      background: {
        paper: '#252525',
        default: '#252525'
      }
    }
  })

  const lightMode = createTheme({
    palette: {
      mode: 'light',
      background: {
        paper: '#F0FFFF',
        default: '#F0FFFF'
      }
    }
  })


  return (

    <ThemeProvider theme={themeSelected === 'dark' ? darkMode : lightMode}>
      <CssBaseline />
      <IconButton sx={{ position: 'absolute', right: 5, top: 70 }} onClick={() => setThemeSelected(themeSelected === 'dark' ? 'light' : 'dark')}>
        {themeSelected === 'dark' ? <FaMoon color='#ffffff' /> : <FaSun color='#2b2b2b' />}
      </IconButton>
      <Grid container spacing={1}>
        <ResponsiveAppBar />
        <Grid item xs={12} >
          <Routes>
            {routesList.map((route) => (
              <Route key={route?.id} element={route?.component} path={route?.path} />
            ))}
          </Routes>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
