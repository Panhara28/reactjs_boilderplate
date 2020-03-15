import React from 'react';
import { Layout } from './components/Layout';
import { BrowserRouter as Router } from 'react-router-dom';
import { IndexRoute } from './routes/index';
import { ApolloClient } from 'apollo-client';
import { enviroment } from './enviroment';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BatchHttpLink } from 'apollo-link-batch-http';
import { Graphql } from './lib/graphql';
import { schema } from './lib/graphql/schema';
import { ApolloProvider } from '@apollo/react-hooks';
import { TopHeader } from './components/TopHeader';

export default class App extends React.Component {

  state: {
    token: string;
    client: ApolloClient<any>;
    me: schema.Query;
  }

  constructor(props: any) {
    super(props);
    const token = localStorage.getItem('token')!;
    this.state = {
      token,
      client: this.connectApolloClient(token),
      me: {}
    }
  }

  connectApolloClient = (token: string) => {
    const url = enviroment.url + '?token=' + token;
    const cache = new InMemoryCache();
    const batch = new BatchHttpLink({ uri: url });
    const client = new ApolloClient({
      cache,
      link: batch,
      defaultOptions: {
        watchQuery: {
          fetchPolicy: 'network-only',
          errorPolicy: 'all'
        },
        query: {
          fetchPolicy: 'no-cache',
          errorPolicy: "none"
        }
      }
    });

    return client;
  }

  renderApp() {
    return (
      <ApolloProvider client={this.state.client}>
        <Router>
          <TopHeader/>
          <Layout>
            <IndexRoute />
          </Layout>
        </Router>
      </ApolloProvider>
    )
  }


  render() {
    return this.renderApp();
  }
}