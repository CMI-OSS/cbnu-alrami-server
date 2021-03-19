import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    cafeterias: [Cafeteria!]!
    cafeteria(name: String!, date: String!): Cafeteria!
  }

  type Cafeteria {
    _id: ID!
    date: String!
    type: Boolean!
    name: String!
    breakfast: String
    lunch: String
    dinner: String
  }
`;

export default typeDefs;
