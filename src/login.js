import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import SimpleCard from './components/cards';
import './index.css';
import Grid from 'material-ui/Grid';
class Login extends Component {
  render() {

    const theme = createMuiTheme({
                    palette: {
                      type: 'dark', // Switching the dark mode on is a single property value change.
                    },
                    typography: {
                      fontSize: 13,
                  // Use the system font over Roboto.
                  fontFamily:
                    '-apple-system,system-ui,BlinkMacSystemFont,' +
                    '"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
                  },
               });


      return (
      <div className="Login">


       <MuiThemeProvider theme={theme}>
     <Grid container spacing={12} justify="center">
      <SimpleCard className="crd" />
    </Grid>
      </MuiThemeProvider>

      </div>

    );
  }
}

export default Login;
