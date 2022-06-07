import React from 'react';

import AppProvider from './contexts';
import { Router } from './routes/router';

function App() {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
}

export default App;
