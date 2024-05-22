import React from 'react';

import Navigator from './src/Navigator';
import AuthProvider from './src/AuthContext';
import Toast from 'react-native-toast-message';

function App() {
  return (
    <AuthProvider>
      <Navigator />
      <Toast />
    </AuthProvider>
  );
}

export default App;
