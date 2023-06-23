import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider>
    <CSSReset />
    <App />
    </ThemeProvider>
  
  </ApolloProvider>,
  document.getElementById('root')
);
 