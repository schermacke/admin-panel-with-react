import { useState } from 'react';
//import './App.css';
import { createTheme, CssBaseline, Grid, IconButton, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { routesList } from '../src/routes/routes';
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import ResponsiveAppBar from './components/navBar.jsx';


function App() {
  const [themeSelected, setThemeSelected] = useState('light');

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

    <ThemeProvider theme={themeSelected === 'light' ? lightMode : darkMode }>
      <CssBaseline />
      <IconButton sx={{ position: 'absolute', right: 5, top: 70 }} onClick={() => setThemeSelected(themeSelected === 'light' ? 'dark' : 'light')}>
        {themeSelected === 'dark' ? <FaSun color='#ffffff' /> : <FaMoon color='#2b2b2b' />}
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
