import { ApolloClient , ApolloProvider, InMemoryCache  } from '@apollo/client';
import { createRoot } from 'react-dom/client'
import './styles/fonts.css';
import './index.css';
import "../i18n.js"
import App from './App.jsx';
const client= new ApolloClient({
  uri:"https://us-west-2.cdn.hygraph.com/content/cm9o1rvvn01e407w2o07odyi6/master",
  cache: new InMemoryCache()
})

createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>

 <App />
 
  </ApolloProvider>
 
);
