const {
  ApolloServer,
  ApolloError,
  makeExecutableSchema,
  mergeSchemas,
  gql
} = require('apollo-server')

const cars = [
  {
    __typename: 'Car',
    make: 'Land Rover',
    model: 'Range Rover',
    year: 2015,
  },
];

const schema = makeExecutableSchema({
  typeDefs: gql`
    type Car {
      make: String!
      model: String!
      year: Int!
      inventory: Int
    }

    type Query {
      cars: [Car]
    }
  `,
  resolvers: {
    Car: {
      inventory() {
        throw new ApolloError('test error', 'CUSTOM_ERROR_CODE', {
          someExtraErrorProp: 'Something!',
        });
      }
    },
    Query: {
      cars() {
        return cars;
      },
    },
  },
});

const goodApolloServer = new ApolloServer({ schema });
goodApolloServer.listen(3000);

const badApolloServer = new ApolloServer({
  schema: mergeSchemas({ schemas: [schema] }),
});
badApolloServer.listen(3001);
