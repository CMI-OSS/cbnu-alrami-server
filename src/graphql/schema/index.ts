import { gql } from "apollo-server";

const typeDefs = gql`
  scalar date

  type Query {
    cafeterias: [Cafeteria]
    cafeteria(name: String, date: date): Cafeteria
  }

  type Cafeteria {
    _id: ID
    date: date
    type: Boolean
    name: String
    breakfast: String
    lunch: String
    dinner: String
  }
`;

export default typeDefs;
