import ApolloClient, { gql } from "apollo-boost";

const client = new ApolloClient({
  uri: "https://ranked-lang-colors.herokuapp.com/v1/graphql",
});

client
  .query({
    query: gql`
    query getTodos {
      languages {
          id
          name
          hex
      }}
    `,
  }).then((data) => console.log({ data }));

export default client;