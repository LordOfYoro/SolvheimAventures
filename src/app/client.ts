import { ApolloClient, createNetworkInterface } from 'apollo-client';

// Paste your endpoint for the Simple API here.
// Info: https://github.com/graphcool-examples/angular-apollo-instagram-example#2-create-graphql-api-with-graphcool
const networkInterface = createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/cj64tgku0um6j015341ezysuh' })
const client = new ApolloClient({ networkInterface });

export function provideClient(): ApolloClient {
  return client;
}
