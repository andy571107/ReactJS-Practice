import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from 'serviceWorker';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  status: {
    typography: {fontFamily: '"Noto Sans KR", serif'}
  }
});

ReactDOM.render(<MuiThemeProvider theme={theme}><App /></MuiThemeProvider>, document.getElementById('root'));

//serviceWorker.unregister();