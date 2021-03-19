import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    cafeterias: [Cafeteria!]!
    cafeteria(name: String!, date: String!): Cafeteria!
    restaurants(location: String): [Restaurant!]!
    restaurant(location: String!, name: String!): Restaurant!
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

  type RestaurantDetail {
    menu: String!
    price: Int!
  }

  type Restaurant {
    _id: ID!
    address: String!
    location: String!
    latitude: Float!
    longitude: Float!
    name: String!
    detail: [RestaurantDetail!]!
    time: String!
    break: String!
  }
`;

export default typeDefs;
