import React from 'react';
import { Layout } from './components/Layout';
import { BrowserRouter as Router } from 'react-router-dom';
import { IndexRoute } from './routes/index';
import { ApolloClient } from 'apollo-client';
import { enviroment } from './enviroment';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BatchHttpLink } from 'apollo-link-batch-http';
import { ApolloProvider } from '@apollo/react-hooks';
import { TopHeader } from './components/TopHeader';

export default class App extends React.Component {

  state: {
    client: ApolloClient<any>;
  }

  constructor(props: any) {
    super(props);
    this.state = {
      client: this.connectApolloClient(),
    }
  }

  connectApolloClient = () => {
    const url = enviroment.url;
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