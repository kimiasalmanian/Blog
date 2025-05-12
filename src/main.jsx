import { ApolloClient , ApolloProvider, InMemoryCache  } from '@apollo/client';
import { createRoot } from 'react-dom/client'
import './styles/fonts.css';
import './index.css';
import "../i18n.js"
import App from './App.jsx';
const client= new ApolloClient({
  uri:import.meta.env.VITE_APP_GRAPHCMS_URI,
  cache: new InMemoryCache()
})

createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>

 <App />
 
  </ApolloProvider>
 
);
