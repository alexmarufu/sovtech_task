const { ApolloServer, gql } = require("apollo-server-express");
const express = require("express");
const {default: axios  } = require('axios');

const typeDefs = gql`
  type Query {
    getPerson(name: String): [Person]
    getPeople(page: Int!): [Person]
  }

  type Planet {
    name: String
    rotation_period: String
    orbital_period: String
    films: [Film]
  }

  type Film {
    title: String
    episode_id: Int
    opening_crawl: String
    director: String
    producer: String
    release_date: String
  }

  type Person {
    name: String
    height: String
    mass: String
    hair_color: String
    skin_color: String
    eye_color: String
    birth_year: String
    gender: String
    films: [Film]
    homeworld: String
  }
`;

const endPoint = "https://swapi.dev/api/people"

const resolvers = {
  Query: {
    getPerson: async (_,{ name }) => {
      const response = await axios.get(`${endPoint}/?search=${name}`);
      //console.log(response.data)
      return response.data.results;
    },
    getPeople: async (_,{ page }) => {
      const response = await axios.get(`${endPoint}/?page=${page}`);
      //console.log(response.data.results)
      //console.log("ayyyyyyyyyyyyyy",response.json())
      return response.data.results;
    }
  }
}

async function startApolloServer(typeDefs, resolvers){
  const server = new ApolloServer({typeDefs, resolvers})
  const app = express();
  await server.start();
  server.applyMiddleware({app, path: '/graphql'});
  const PORT = 4000
  app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}${server.graphqlPath}`);
})
}

startApolloServer(typeDefs, resolvers);
