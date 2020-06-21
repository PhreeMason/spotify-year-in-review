import React from 'react';

const TokenContext = React.createContext({
  accessToken: '',
  setAccessToken: () => {},
});

export default TokenContext;