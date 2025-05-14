import { ApolloClient , ApolloProvider, InMemoryCache  } from '@apollo/client';
import { createRoot } from 'react-dom/client'
import theme from './mui/theme.jsx';

import './index.css';
import './styles/fonts.css';
import "../i18n.js"
import App from './App.jsx';
import { ThemeProvider } from '@emotion/react';
const client= new ApolloClient({
  uri:import.meta.env.VITE_APP_GRAPHCMS_URI,
  cache: new InMemoryCache()
})

createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
 
  </ApolloProvider>
 
);
