import {graphqlHTTP} from 'express-graphql';
import { buildSchema } from 'graphql';


const heroesSchema = buildSchema(`
  type Query {
    hero(id: Int!): Hero
  }
  type Hero {
    id: Int!
    name: String!
    superpower: String!
    universe: String!
  }
`);  

const getHero = function () {
    return {
        id: 42,
        name: "Superman",
        superpower: "Flying",
        universe: "DC"
    }
};

const root = {
    hero: getHero
};

const router = graphqlHTTP({
    schema: heroesSchema,
    graphiql: true,
    rootValue: root
});

export default router;