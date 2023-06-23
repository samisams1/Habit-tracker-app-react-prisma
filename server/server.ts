import { ApolloServer } from "apollo-server";
import { makeSchema } from "nexus";
import { nexusSchemaPrisma } from 'nexus-plugin-prisma/schema';
import { Habit } from "./src/types/Habit";
import { Mutation } from "./src/types/Mutation";
import { Query } from "./src/types/Query";
const schema =makeSchema({
    types:[Habit,Query,Mutation],
    plugins: [nexusSchemaPrisma()],
    outputs:{
        schema:`${__dirname}/generated/schema.graphql`,
        typegen:`${__dirname}/generated/types.ts`
    }
   
});
const server = new ApolloServer({
    schema
})
// The `listen` method launches a web server.
server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});