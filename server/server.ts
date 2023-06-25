import { ApolloServer } from "apollo-server";
import schema from "./src/schema";
const server = new ApolloServer({
    schema
})
// The `listen` method launches a web server.
server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});