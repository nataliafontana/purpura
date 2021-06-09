
import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Typography} from '@material-ui/core'
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import {makeStyles} from '@material-ui/core/styles'
import {ThemeProvider} from '@material-ui/core/styles' 
import theme from './components/ThemeConfig'
import NavBar from './components/NavBar';



function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar>

      </NavBar>
    </ThemeProvider>
  );
}

export default App;
