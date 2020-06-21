import React, { useState } from 'react';
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { ThemeProvider, merge } from 'theme-ui'
import dark from '@theme-ui/preset-dark'
import TokenContext from './contexts/access-token';

const theme = merge(dark, {
  colors: {
    text: '#fff',
    background: '#060606',
    primary: '#1db954',
    secondary: '#e0f',
    muted: '#191919',
    highlight: '#29112c',
    gray: '#999',
    purple: '#c0f',
  },
})

function App() {
  const [accessToken, setAccessToken] = useState('')
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <TokenContext.Provider value={{ accessToken, setAccessToken }}>
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </TokenContext.Provider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
