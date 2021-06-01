import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    cafeterias: [Cafeteria!]!
    cafeteria(name: String!, date: String!): Cafeteria!
    restaurants(location: String): [Restaurant!]!
    restaurant(location: String!, name: String!): Restaurant!
    schedule(year: Int!, month: Int!): [Schedule]
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
    details: [RestaurantDetail!]!
    time: String!
    break: String!
  }

  type Schedule {
    _id: ID!
    start_date: String!
    end_date: String
    content: String!
  }
`;

export default typeDefs;
