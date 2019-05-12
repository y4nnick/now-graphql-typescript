import { ApolloServer, gql } from 'apollo-server-micro'

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello typescript-world!',
  },
};

const apolloServer = new ApolloServer({
  introspection: true,
  playground: true,
  typeDefs,
  resolvers,
})

export default apolloServer.createHandler();
