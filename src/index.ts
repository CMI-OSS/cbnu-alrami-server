import dbConnect from "./models";
import { ApolloServer } from "apollo-server";
import resolvers from "./graphql/resolvers";
import typeDefs from "./graphql/schema";

dbConnect();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// listen 함수로 웹 서버 실행
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
